import { useState, useEffect, useCallback } from 'react';

// Sample pricing data - fallback when APIs are slow
const SAMPLE_PRICING = {
  aws: {
    AmazonEC2: {
      service: 'EC2',
      price: '0.0104',
      unit: 'hour',
      description: 't3.micro (US East)',
      region: 'US East'
    },
    AmazonS3: {
      service: 'S3',
      price: '0.023',
      unit: 'GB',
      description: 'Standard Storage',
      region: 'US East'
    },
    AmazonRDS: {
      service: 'RDS',
      price: '0.017',
      unit: 'hour',
      description: 'db.t3.micro (US East)',
      region: 'US East'
    }
  },
  gcp: {
    ComputeEngine: {
      service: 'Compute',
      price: '0.006655',
      unit: 'hour',
      description: 'e2-micro (us-central1)',
      region: 'us-central1'
    },
    CloudStorage: {
      service: 'Storage',
      price: '0.020',
      unit: 'GB',
      description: 'Standard Storage',
      region: 'Multi-Region'
    },
    CloudSQL: {
      service: 'CloudSQL',
      price: '0.0128',
      unit: 'hour',
      description: 'db-f1-micro',
      region: 'us-central1'
    }
  }
};

const fetchAWSPrices = async (signal) => {
  const prices = {};
  const services = [
    { code: 'AmazonEC2', name: 'EC2' },
    { code: 'AmazonS3', name: 'S3' },
    { code: 'AmazonRDS', name: 'RDS' }
  ];
  
  for (const svc of services) {
    try {
      const response = await fetch(
        `https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/${svc.code}/current/index.json`,
        { signal }
      );
      
      if (!response.ok) continue;
      
      const data = await response.json();
      const products = Object.values(data.products || {}).slice(0, 50);
      const product = products.find(p => 
        p.attributes?.location?.includes('US East') && 
        (p.attributes?.instanceType?.includes('t3.micro') || 
         p.attributes?.storageClass === 'Standard')
      ) || products[0];
      
      if (product) {
        const sku = product.sku;
        const terms = data.terms?.OnDemand || {};
        const term = Object.values(terms).find(t => t.sku === sku) || Object.values(terms)[0];
        const priceDims = term?.priceDimensions || {};
        const priceDim = Object.values(priceDims)[0];
        
        if (priceDim?.pricePerUnit?.USD) {
          prices[svc.code] = {
            service: svc.name,
            price: priceDim.pricePerUnit.USD,
            unit: priceDim.unit || 'hour',
            description: product.attributes?.instanceType || product.attributes?.storageClass || 'Standard',
            region: 'US East'
          };
        }
      }
    } catch (e) {
      console.warn(`AWS ${svc.name} failed:`, e.message);
    }
  }
  
  return prices;
};

const fetchGCPPrices = async (signal) => {
  // GCP pricing API is more complex, using sample data for now
  // In production, you would use GCP Cloud Billing API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ComputeEngine: {
          service: 'Compute',
          price: '0.006655',
          unit: 'hour',
          description: 'e2-micro (us-central1)',
          region: 'us-central1'
        },
        CloudStorage: {
          service: 'Storage',
          price: '0.020',
          unit: 'GB',
          description: 'Standard Storage',
          region: 'Multi-Region'
        },
        CloudSQL: {
          service: 'CloudSQL',
          price: '0.0128',
          unit: 'hour',
          description: 'db-f1-micro',
          region: 'us-central1'
        }
      });
    }, 500);
  });
};

export const useCloudPricing = () => {
  const [awsPrices, setAwsPrices] = useState(SAMPLE_PRICING.aws);
  const [gcpPrices, setGcpPrices] = useState(SAMPLE_PRICING.gcp);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState('Sample Data');

  const fetchPricingData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    try {
      // Fetch both in parallel
      const [awsResults, gcpResults] = await Promise.allSettled([
        fetchAWSPrices(controller.signal),
        fetchGCPPrices(controller.signal)
      ]);
      
      clearTimeout(timeoutId);
      
      let updated = false;
      
      if (awsResults.status === 'fulfilled' && Object.keys(awsResults.value).length > 0) {
        setAwsPrices(awsResults.value);
        updated = true;
      }
      
      if (gcpResults.status === 'fulfilled' && Object.keys(gcpResults.value).length > 0) {
        setGcpPrices(gcpResults.value);
        updated = true;
      }
      
      if (updated) {
        setLastUpdated(new Date().toLocaleTimeString());
      }
      
    } catch (err) {
      console.error('Cloud Pricing error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Try to fetch fresh data after initial render
    const timer = setTimeout(fetchPricingData, 2000);
    return () => clearTimeout(timer);
  }, [fetchPricingData]);

  const refresh = () => {
    fetchPricingData();
  };

  return {
    awsPrices,
    gcpPrices,
    loading,
    error,
    lastUpdated,
    refresh
  };
};

export default useCloudPricing;
