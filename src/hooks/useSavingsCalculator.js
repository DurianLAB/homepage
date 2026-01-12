// hooks/useSavingsCalculator.js
import { useState, useEffect, useCallback } from 'react';
import { defaultCloudServices, updateSimulatedCloudCosts, calculateSavings } from '../lib/pricing-engine';

export const useSavingsCalculator = () => {
  const [cloudCost, setCloudCost] = useState(0.00);
  const [services, setServices] = useState([...defaultCloudServices]);
  const [workload, setWorkload] = useState({ cpu: 4, memory: 8, storage: 100 }); // example workload
  const [savings, setSavings] = useState(null);
  const [isSimulationActive, setIsSimulationActive] = useState(false); // Start inactive

  const updateCosts = useCallback(() => {
    const { services: updatedServices, totalCost } = updateSimulatedCloudCosts([...services]);
    setServices(updatedServices);
    setCloudCost(totalCost);
    setSavings(calculateSavings(workload));
  }, [services, workload]);

  useEffect(() => {
    updateCosts(); // Initial update
    let interval;
    if (isSimulationActive) {
      interval = setInterval(updateCosts, 60000); // Update every 60 seconds when active
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [updateCosts, isSimulationActive]);

  const updateWorkload = useCallback((newWorkload) => {
    setWorkload(newWorkload);
  }, []);

  const toggleSimulation = useCallback(() => {
    setIsSimulationActive(prev => !prev);
  }, []);

  return {
    cloudCost,
    services,
    workload,
    savings,
    isSimulationActive,
    updateWorkload,
    refreshCosts: updateCosts,
    toggleSimulation
  };
};