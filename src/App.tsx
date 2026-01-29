import { useState } from 'react';
import { LineChart } from './components/LineChart';
import { StatCard } from './components/StatCard';
import { BatteryCard } from './components/BatteryCard';
import { Alert } from './components/Alert';
import {
  statsData,
  batteryFacilities,
  alerts,
  chartData,
  storageBreakdown,
} from './data';

function App() {
  const [timeRange, setTimeRange] = useState('24h');

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-gray-800 border-r border-gray-700 p-6 hidden lg:block">
        <div className="flex items-center gap-2 text-xl font-bold text-green-500 mb-8">
          <span>⚡</span>
          <span>Energy dashboard</span>
        </div>

        <nav className="space-y-1">
          {[
            { icon: '📊', label: 'Overview', active: true },
            { icon: '🔋', label: 'Storage Assets', active: false },
            { icon: '⚡', label: 'Grid Status', active: false },
            { icon: '📈', label: 'Analytics', active: false },
            { icon: '⚙️', label: 'Settings', active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                item.active
                  ? 'bg-gray-700 text-green-500 border-l-4 border-green-500'
                  : 'text-gray-400 hover:bg-gray-700 hover:text-gray-200'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-4 md:p-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold mb-1">Grid Overview</h1>
              <p className="text-gray-400 text-sm">
                Real-time energy storage and grid monitoring
              </p>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-sm cursor-pointer focus:outline-none focus:border-green-500"
              >
                <option value="24h">Last 24 hours</option>
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
              </select>

              <div className="flex items-center gap-2 px-3 py-2 bg-green-900/20 text-green-500 rounded-lg text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Grid Stable
              </div>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-gray-800 border border-gray-700 rounded-xl p-6">
            <div className="flex flex-wrap items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Supply & Demand Balance</h3>
              <div className="flex gap-4 text-sm">
                {[
                  { color: 'bg-green-500', label: 'Supply' },
                  { color: 'bg-blue-500', label: 'Demand' },
                  { color: 'bg-yellow-500', label: 'Storage' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                    <span className="text-gray-400">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <LineChart data={chartData} />
          </div>

          {/* Storage Summary */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-6">Storage Summary</h3>
            <div className="space-y-4">
              {storageBreakdown.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-700 rounded-lg"
                >
                  <div>
                    <h4 className="text-sm font-medium mb-1">{item.label}</h4>
                    <p className="text-xs text-gray-400">
                      {item.label === 'Available Capacity' && 'Ready to dispatch'}
                      {item.label === 'In Use' && 'Currently discharging'}
                      {item.label === 'Charging' && 'Storing excess energy'}
                      {item.label === 'Reserved' && 'Contracted capacity'}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xl font-bold block ${item.color}`}>
                      {item.value}
                    </span>
                    <span className="text-xs text-gray-400">{item.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Battery Facilities */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Battery Facilities</h3>
            <span className="text-sm text-gray-400">
              {batteryFacilities.length} active facilities
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {batteryFacilities.map((facility) => (
              <BatteryCard key={facility.id} facility={facility} />
            ))}
          </div>
        </div>

        {/* Alerts Section */}
        <div>
          <h2 className="text-xl font-semibold mb-5">System Alerts</h2>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <Alert key={alert.id} alert={alert} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
