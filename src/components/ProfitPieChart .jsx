import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const data = [
  { name: 'Profit 2023', value: 400 },
  { name: 'Profit 2022', value: 300 },
];

const COLORS = ['#1e3a8a', '#ff4d4f'];

const ProfitPieChart = () => {
  return (
    <div className="flex items-center justify-center">
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx={200}
          cy={150}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
      <div className="ml-4">
        <h2 className="text-lg font-bold mb-2">Profit Distribution</h2>
        <ul>
          {data.map((entry, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="inline-block w-4 h-4 mr-2 rounded-full" style={{ backgroundColor: COLORS[index] }}></span>
              <span>{entry.name}: ${entry.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfitPieChart;
