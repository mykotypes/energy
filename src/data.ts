export interface StatCard {
  label: string;
  value: string;
  change: number;
  changeLabel: string;
  color: 'green' | 'blue' | 'yellow' | 'purple';
}

export interface BatteryFacility {
  id: string;
  name: string;
  status: 'charging' | 'discharging' | 'idle';
  level: number;
  current: number;
  capacity: number;
}

export interface Alert {
  id: string;
  type: 'warning' | 'critical' | 'info';
  title: string;
  description: string;
  timestamp: string;
  icon: string;
}

export interface ChartDataPoint {
  time: string;
  supply: number;
  demand: number;
  storage: number;
}

export const statsData: StatCard[] = [
  {
    label: 'Total Storage Capacity',
    value: '2,847 MWh',
    change: 12.5,
    changeLabel: 'vs last month',
    color: 'green',
  },
  {
    label: 'Current Load',
    value: '1,923 MW',
    change: 8.3,
    changeLabel: 'vs avg',
    color: 'blue',
  },
  {
    label: 'Renewable Generation',
    value: '1,456 MW',
    change: -15.2,
    changeLabel: 'low wind',
    color: 'yellow',
  },
  {
    label: 'Active Facilities',
    value: '38/42',
    change: 90.5,
    changeLabel: 'utilization',
    color: 'purple',
  },
];

export const batteryFacilities: BatteryFacility[] = [
  {
    id: '1',
    name: 'Berlin Hub Alpha',
    status: 'charging',
    level: 78,
    current: 156,
    capacity: 200,
  },
  {
    id: '2',
    name: 'London Grid Station',
    status: 'discharging',
    level: 45,
    current: 68,
    capacity: 150,
  },
  {
    id: '3',
    name: 'Hamburg Solar Link',
    status: 'charging',
    level: 92,
    current: 138,
    capacity: 150,
  },
  {
    id: '4',
    name: 'Munich Bay Storage',
    status: 'idle',
    level: 100,
    current: 180,
    capacity: 180,
  },
  {
    id: '5',
    name: 'Frankfurt Node 7',
    status: 'discharging',
    level: 34,
    current: 51,
    capacity: 150,
  },
  {
    id: '6',
    name: 'Dresden Wind Hub',
    status: 'charging',
    level: 67,
    current: 80,
    capacity: 120,
  },
];

export const alerts: Alert[] = [
  {
    id: '1',
    type: 'warning',
    title: 'High Demand Forecast',
    description: 'Expected peak demand at 18:00 CET. Recommend pre-positioning 400 MWh capacity.',
    timestamp: '2 hours ago',
    icon: '⚠️',
  },
  {
    id: '2',
    type: 'critical',
    title: 'London Grid Station - Low Capacity',
    description: 'Facility approaching minimum operational threshold. Consider load redistribution.',
    timestamp: '15 minutes ago',
    icon: '🔴',
  },
  {
    id: '3',
    type: 'info',
    title: 'Optimization Opportunity',
    description: 'Current market conditions favorable for charging. 12% cost reduction available.',
    timestamp: '1 hour ago',
    icon: '💡',
  },
];

// Generate chart data for the last 24 hours
export const generateChartData = (): ChartDataPoint[] => {
  const data: ChartDataPoint[] = [];
  const now = new Date();
  
  for (let i = 24; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60 * 60 * 1000);
    const hour = time.getHours();
    
    // Simulate realistic patterns
    const baseSupply = 1500;
    const baseDemand = 1600;
    
    // Add time-of-day patterns
    const demandMultiplier = hour >= 6 && hour <= 22 ? 1.2 : 0.8;
    const supplyMultiplier = hour >= 10 && hour <= 16 ? 1.3 : 0.9; // Solar peak
    
    data.push({
      time: `${hour.toString().padStart(2, '0')}:00`,
      supply: baseSupply * supplyMultiplier + Math.random() * 200 - 100,
      demand: baseDemand * demandMultiplier + Math.random() * 150 - 75,
      storage: 1200 + Math.random() * 400 - 200,
    });
  }
  
  return data;
};

export const chartData = generateChartData();

export const storageBreakdown = [
  { label: 'Available Capacity', value: 1284, unit: 'MWh', color: 'text-green-500' },
  { label: 'In Use', value: 863, unit: 'MWh', color: 'text-yellow-500' },
  { label: 'Charging', value: 512, unit: 'MWh', color: 'text-blue-500' },
  { label: 'Reserved', value: 188, unit: 'MWh', color: 'text-purple-500' },
];
