import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import StatisticsCard from '../components/StatisticsCard';
import SalesStatistics from '../components/SalesStatistics ';
import ProfitPieChart from '../components/ProfitPieChart ';
import { FaDollarSign, FaChartLine, FaFileInvoiceDollar } from 'react-icons/fa';
let date=new Date().toLocaleDateString();
let time=new Date().toLocaleTimeString();


const AdminDashboard = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="p-4 bg-gray-400" >
        <div className="my-4 bg-white shadow-md rounded-lg p-6">
          <h1 className="text-gray-800 text-3xl font-bold text-center mb-4">SALES ANALYTICS</h1>
            <div className="flex justify-center">
              <h2 className="text-gray-800 text-lg mb-2">Date: {date}</h2>
            </div>
            <div className="flex justify-center">
              <h2 className="text-gray-800 text-lg">Time: {time}</h2>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <StatisticsCard title="Income" value="$10,000" icon={<FaDollarSign />} />
          <StatisticsCard title="Profit" value="$8,000" icon={<FaChartLine />} />
          <StatisticsCard title="Expenses" value="$2,000" icon={<FaFileInvoiceDollar />} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold mb-4">Sales Statistics 2023</h2>
            <SalesStatistics />
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold mb-4">Profit Performance</h2>
            <ProfitPieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
