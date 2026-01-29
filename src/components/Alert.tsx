import { Alert as AlertType } from '../data';

interface AlertProps {
  alert: AlertType;
}

export const Alert = ({ alert }: AlertProps) => {
  const borderColors = {
    warning: 'border-l-yellow-500',
    critical: 'border-l-red-500',
    info: 'border-l-blue-500',
  };

  return (
    <div
      className={`bg-gray-800 border border-gray-700 border-l-4 ${borderColors[alert.type]} rounded-lg p-4 flex items-start gap-3`}
    >
      <div className="text-xl">{alert.icon}</div>
      <div className="flex-1">
        <div className="font-semibold mb-1">{alert.title}</div>
        <div className="text-sm text-gray-400 mb-2">{alert.description}</div>
        <div className="text-xs text-gray-500">{alert.timestamp}</div>
      </div>
    </div>
  );
};
