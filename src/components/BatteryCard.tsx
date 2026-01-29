import { BatteryFacility } from '../data';

interface BatteryCardProps {
  facility: BatteryFacility;
}

export const BatteryCard = ({ facility }: BatteryCardProps) => {
  const statusColors = {
    charging: 'bg-green-900/30 text-green-500',
    discharging: 'bg-yellow-900/30 text-yellow-500',
    idle: 'bg-gray-700 text-gray-400',
  };

  return (
    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer">
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-sm">{facility.name}</span>
        <span
          className={`text-xs px-2 py-1 rounded ${
            statusColors[facility.status]
          }`}
        >
          {facility.status.charAt(0).toUpperCase() + facility.status.slice(1)}
        </span>
      </div>

      <div className="h-2 bg-gray-600 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-500"
          style={{ width: `${facility.level}%` }}
        />
      </div>

      <div className="text-xs text-gray-400">
        {facility.level}% • {facility.current} MWh / {facility.capacity} MWh
      </div>
    </div>
  );
};
