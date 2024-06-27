import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    
        <footer className="bg-gray-800 py-6">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-center">
            <div className="text-center text-gray-400 text-sm">
              <p>&copy; 2024 Ghazi Trends. All rights reserved.</p>
              <p>Designed with <span className="text-red-600">&hearts;</span> by You</p>
              <div className="mt-4">
                <NavLink to={'./aboutus'} className="text-gray-400 hover:text-white mx-2">About Us</NavLink>
                
              </div>
            </div>
          </div>
        </footer>
      );
    };
    

export default Footer;