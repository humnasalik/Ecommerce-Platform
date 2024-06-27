import React from 'react';

const StatisticsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow rounded p-4 flex items-center">
      <div className="text-blue-500 text-3xl mr-4">{icon}</div>
      <div>
        <div className="text-gray-500">{title}</div>
        <div className="text-2xl font-bold text-gray-700">{value}</div>
      </div>
    </div>
  );
};

export default StatisticsCard;
