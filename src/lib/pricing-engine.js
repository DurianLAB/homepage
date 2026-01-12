// lib/pricing-engine.js
// Cloud cost simulation logic for DurianLAB pricing engine

export const defaultCloudServices = [
  { name: 'Compute', cost: 1200.50, min: 1000, max: 1500 },
  { name: 'Storage', cost: 300.25, min: 250, max: 400 },
  { name: 'Network', cost: 150.70, min: 100, max: 200 },
  { name: 'Database', cost: 750.00, min: 600, max: 900 },
  { name: 'Monitoring', cost: 80.10, min: 70, max: 120 }
];

export const updateSimulatedCloudCosts = (services) => {
  let totalCost = 0;
  services.forEach(service => {
    const fluctuation = (Math.random() - 0.5) * 20;
    service.cost = Math.max(service.min, Math.min(service.max, service.cost + fluctuation));
    service.cost = parseFloat(service.cost.toFixed(2));
    totalCost += service.cost;
  });
  return { services, totalCost: totalCost.toFixed(2) };
};

// Akash pricing tiers (example rates)
export const akashPricingTiers = {
  standard: { cpu: 0.5, memory: 0.25, storage: 0.1 }, // per GB/hour
  advanced: { cpu: 0.75, memory: 0.35, storage: 0.15 },
  enterprise: { cpu: 1.0, memory: 0.5, storage: 0.2 }
};

// Comparison rates for cloud providers
export const cloudProviderRates = {
  github: { compute: 0.008, storage: 0.023 }, // per GB/hour approx
  aws: { compute: 0.096, storage: 0.023 }, // EC2 t3.medium + EBS
  akash: akashPricingTiers.advanced // using advanced tier as default
};

export const calculateSavings = (workload) => {
  // Simple savings calculation: compare Akash vs AWS/GitHub
  const awsCost = workload.cpu * cloudProviderRates.aws.compute + workload.storage * cloudProviderRates.aws.storage;
  const akashCost = workload.cpu * cloudProviderRates.akash.cpu + workload.memory * cloudProviderRates.akash.memory + workload.storage * cloudProviderRates.akash.storage;
  const savings = awsCost - akashCost;
  const savingsPercent = ((savings / awsCost) * 100).toFixed(1);

  return {
    awsCost: awsCost.toFixed(2),
    akashCost: akashCost.toFixed(2),
    savings: savings.toFixed(2),
    savingsPercent
  };
};