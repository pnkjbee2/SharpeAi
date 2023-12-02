import React from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F'];

const PieComp = ({ data1, data2 }) => {
  const data = [
    { name: 'user ID 1', value: data1 },
    { name: 'Total', value: data2 },  
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" dataKey="value">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieComp;
