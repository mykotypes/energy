import { StatCard as StatCardType } from '../data';

interface StatCardProps {
  stat: StatCardType;
}

const colorClasses = {
  green: 'text-green-500',
  blue: 'text-blue-500',
  yellow: 'text-yellow-500',
  purple: 'text-purple-500',
};

export const StatCard = ({ stat }: StatCardProps) => {
  const isPositive = stat.change > 0;

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-gray-600 hover:-translate-y-0.5 transition-all duration-300">
      <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
      <div className={`text-3xl font-bold mb-2 ${colorClasses[stat.color]}`}>
        {stat.value}
      </div>
      <div className="flex items-center gap-1 text-sm">
        <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
          {isPositive ? '↑' : '↓'} {Math.abs(stat.change)}%
        </span>
        <span className="text-gray-500">{stat.changeLabel}</span>
      </div>
    </div>
  );
};
