import React from 'react';
import { useCloudPricing } from '../hooks/useCloudPricing';

const CloudPricingBanner = () => {
  const { awsPrices, gcpPrices, lastUpdated, refresh } = useCloudPricing();
  
  const formatPrice = (price) => {
    if (price === 'N/A' || !price) return 'N/A';
    const num = parseFloat(price);
    if (isNaN(num)) return price;
    return num < 0.01 ? `$${num.toFixed(6)}` : `$${num.toFixed(4)}`;
  };

  const formatUnit = (unit) => {
    if (!unit || unit === 'N/A') return 'hr';
    return unit.toLowerCase().replace('hours', 'hr').replace('hour', 'hr');
  };

  const renderPriceItems = (prices, provider) => {
    return Object.values(prices).map((priceInfo, index) => (
      <span key={`${provider}-${index}`} className="pricing-item">
        <strong className={`provider-${provider}`}>{priceInfo.service}</strong>
        {formatPrice(priceInfo.price)}/{formatUnit(priceInfo.unit)}
        <small>{priceInfo.description}</small>
      </span>
    ));
  };

  const renderContent = () => (
    <>
      <span className="provider-label aws-label">AWS</span>
      {renderPriceItems(awsPrices, 'aws')}
      <span className="provider-separator">|</span>
      <span className="provider-label gcp-label">GCP</span>
      {renderPriceItems(gcpPrices, 'gcp')}
      {lastUpdated && (
        <span className="update-time">
          Updated: {lastUpdated}
        </span>
      )}
      <button onClick={refresh} className="refresh-btn" title="Refresh pricing">
        🔄
      </button>
    </>
  );

  return (
    <div id="running-banner" className="running-banner">
      <div className="marquee-container">
        <div className="marquee-content">
          <div className="marquee-item">{renderContent()}</div>
          <div className="marquee-item">{renderContent()}</div>
          <div className="marquee-item">{renderContent()}</div>
          <div className="marquee-item">{renderContent()}</div>
          <div className="marquee-item">{renderContent()}</div>
          <div className="marquee-item">{renderContent()}</div>
          <div className="marquee-item">{renderContent()}</div>
          <div className="marquee-item">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default CloudPricingBanner;
