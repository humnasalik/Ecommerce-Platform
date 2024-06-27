import React from 'react';
import { NavLink } from 'react-router-dom';
const OrderConfirmationModal = ({ orderId, onClose }) => {



  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Order Confirmed!</h2>
        <p className="text-lg mb-4 text-center">you will soon receive a confirmation message on your provided email.</p>
        <div className="text-center">
          <NavLink to={'/'} 
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none"
          >
            Close
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
