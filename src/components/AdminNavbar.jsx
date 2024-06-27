import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center text-white">
      <div className="flex items-center">
        <img src="/images/logo.jpg" alt="Logo" className="h-8 w-8 mr-2" />
        <span className="text-lg font-bold">Humna Salik</span>
      </div>
      <div>
        <NavLink to={'/admin'}className="mr-8">Dashboard</NavLink>
        <NavLink to={'/user-management'} className="mr-4">User Management</NavLink>
        <NavLink to={'/product-management'}>Product Management</NavLink>
      </div>
    </nav>
  );
};

export default AdminNavbar;
