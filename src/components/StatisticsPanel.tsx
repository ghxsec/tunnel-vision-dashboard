
import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", download: 65, upload: 35 },
  { name: "Feb", download: 59, upload: 25 },
  { name: "Mar", download: 80, upload: 40 },
  { name: "Apr", download: 81, upload: 56 },
  { name: "May", download: 56, upload: 45 },
  { name: "Jun", download: 55, upload: 30 },
  { name: "Jul", download: 40, upload: 35 },
];

const StatisticsPanel: React.FC = () => {
  return (
    <div className="stats-card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Data Usage</h3>
        <select className="bg-vpn-darker text-sm p-1 rounded border border-white/10">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 3 Months</option>
        </select>
      </div>

      <div className="h-[240px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorDownload" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1EAEDB" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#1EAEDB" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorUpload" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#9ca3af', fontSize: 12 }} 
              axisLine={{ stroke: '#3f3f46' }}
              tickLine={{ stroke: '#3f3f46' }}
            />
            <YAxis 
              tick={{ fill: '#9ca3af', fontSize: 12 }} 
              axisLine={{ stroke: '#3f3f46' }}
              tickLine={{ stroke: '#3f3f46' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1A1F2C', 
                borderColor: '#3f3f46',
                borderRadius: '0.5rem',
              }}
              itemStyle={{ color: '#f3f4f6' }}
              labelStyle={{ color: '#9ca3af' }}
            />
            <Area
              type="monotone"
              dataKey="download"
              stroke="#1EAEDB"
              fillOpacity={1}
              fill="url(#colorDownload)"
            />
            <Area
              type="monotone"
              dataKey="upload"
              stroke="#10B981"
              fillOpacity={1}
              fill="url(#colorUpload)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="px-4 py-3 rounded-lg bg-vpn-darker">
          <p className="text-xs text-gray-400">Total Used</p>
          <p className="font-semibold">125.4 GB</p>
        </div>
        <div className="px-4 py-3 rounded-lg bg-vpn-darker">
          <p className="text-xs text-gray-400">Download</p>
          <p className="font-semibold text-vpn-accent">89.7 GB</p>
        </div>
        <div className="px-4 py-3 rounded-lg bg-vpn-darker">
          <p className="text-xs text-gray-400">Upload</p>
          <p className="font-semibold text-vpn-success">35.7 GB</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPanel;
