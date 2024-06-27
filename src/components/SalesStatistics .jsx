import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 2000 },
  { name: 'Apr', sales: 5000 },
  { name: 'May', sales: 7000 },
  { name: 'Jun', sales: 2000 },
  { name: 'Jul', sales: 9000 },
  { name: 'Aug', sales: 1000 },
  { name: 'Sep', sales: 8000 },
  { name: 'Oct', sales: 4000 },
  { name: 'Nov', sales: 6000 },
  { name: 'Dec', sales: 7000 },
];

const SalesStatistics = () => {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sales" stroke="#1e3a8a" />
    </LineChart>
  );
};

export default SalesStatistics;


