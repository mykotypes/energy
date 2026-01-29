# Prototyping project: Energy Grid Dashboard

React + TypeScript + Tailwind CSS dashboard showcasing energy storage monitoring capabilities with D3.js visualizations.

## 🚀 Features

- **Real-time Grid Monitoring** - Live supply/demand balance visualization
- **Battery Facility Management** - Status tracking for 38+ facilities
- **Interactive D3.js Charts** - Smooth, responsive data visualization
- **Alert System** - Critical notifications and optimization opportunities
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Dark Theme** - Optimized for operational monitoring

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **D3.js** - Advanced data visualization
- **Responsive Design** - Mobile-first approach

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Key Components

### LineChart (D3.js)
Interactive line chart showing supply, demand, and storage trends over time. Features:
- Smooth curve interpolation
- Grid lines and axes
- Hover tooltips
- Responsive scaling

### StatCard
KPI display cards with:
- Color-coded metrics
- Trend indicators
- Percentage changes

### BatteryCard
Individual facility monitoring with:
- Real-time status (charging/discharging/idle)
- Capacity visualization
- Hover effects

### Alert System
Critical notifications with:
- Priority levels (info/warning/critical)
- Timestamps
- Actionable descriptions

## 📁 Project Structure

```
energy-dashboard/
├── src/
│   ├── components/
│   │   ├── LineChart.tsx      # D3.js visualization
│   │   ├── StatCard.tsx       # KPI cards
│   │   ├── BatteryCard.tsx    # Facility cards
│   │   └── Alert.tsx          # Notification alerts
│   ├── data.ts                # Dummy data & types
│   ├── App.tsx                # Main dashboard
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎯 Design Decisions

### Color System
- **Green (#10b981)**: Positive states, charging, available
- **Blue (#3b82f6)**: Demand, neutral operations
- **Yellow (#f59e0b)**: Warnings, discharging
- **Red (#ef4444)**: Critical alerts
- **Purple (#8b5cf6)**: Reserved capacity

### Data Visualization
- D3.js for complex, interactive charts
- Smooth curve interpolation for readability
- Real-time hover interactions
- Responsive SVG scaling

### UX Principles
- Information hierarchy (most important metrics first)
- Quick health check (status badge + stats)
- Progressive disclosure (drill down for details)
- Consistent spacing (24-32px rhythm)

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag /dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy /dist folder
```

## 📊 Dummy Data

The dashboard uses realistic dummy data including:
- 24-hour historical trends
- 6 battery facilities across Europe
- 3 system alerts with different priorities
- 4 key performance indicators
- Storage capacity breakdown

Data can be easily replaced with real API calls in `data.ts`.

## 🎓 Portfolio Presentation

This project demonstrates:
- **TypeScript proficiency** - Strict typing throughout
- **React best practices** - Hooks, component composition
- **D3.js expertise** - Custom interactive visualizations
- **Responsive design** - Mobile-first Tailwind CSS
- **UI/UX skills** - Clean information architecture
- **Production-ready code** - Organized, documented, scalable

## 📝 Next Steps

To make this production-ready:
1. Add real-time WebSocket data connection
2. Implement authentication & authorization
3. Add unit tests (Vitest + React Testing Library)
4. Create facility detail drill-down pages
5. Add export functionality (PDF/CSV)
6. Implement dark/light mode toggle
7. Add accessibility features (ARIA labels, keyboard nav)

## 📄 License

MIT

---

