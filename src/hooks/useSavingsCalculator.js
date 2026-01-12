// hooks/useSavingsCalculator.js
import { useState, useEffect, useCallback } from 'react';
import { defaultCloudServices, updateSimulatedCloudCosts, calculateSavings } from '../lib/pricing-engine';

export const useSavingsCalculator = () => {
  const [cloudCost, setCloudCost] = useState(0.00);
  const [services, setServices] = useState([...defaultCloudServices]);
  const [workload, setWorkload] = useState({ cpu: 4, memory: 8, storage: 100 }); // example workload
  const [savings, setSavings] = useState(null);

  const updateCosts = useCallback(() => {
    const { services: updatedServices, totalCost } = updateSimulatedCloudCosts([...services]);
    setServices(updatedServices);
    setCloudCost(totalCost);
    setSavings(calculateSavings(workload));
  }, [services, workload]);

  useEffect(() => {
    updateCosts();
    const interval = setInterval(updateCosts, 20000); // Update every 20 seconds
    return () => clearInterval(interval);
  }, [updateCosts]);

  const updateWorkload = useCallback((newWorkload) => {
    setWorkload(newWorkload);
  }, []);

  return {
    cloudCost,
    services,
    workload,
    savings,
    updateWorkload,
    refreshCosts: updateCosts
  };
};