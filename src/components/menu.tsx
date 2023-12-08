import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import './../../public/styles.css'

// Assume you have some icons available (you can use your own or find icons online)
import { FaHome, FaUser, FaCode } from 'react-icons/fa';

export const Menu: React.FC = () => {


  return (
    <nav className="bg-gray-800 flex flex-1 w-full h-16 top-0">
      <div className="container flex justify-between items-center h-16">
        {/* Navigation Links */}

        <ul className="flex space-x-4 z-10 relative">
          <li>
            <a href="/" className="text-white hover:text-gray-300 flex items-center">
              <FaHome className="mr-2" />
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300 flex items-center">
              <FaUser className="mr-2" />
              About
            </a>
          </li>
          <li>
            <a href="/projects" className="text-white hover:text-gray-300 flex items-center">
              <FaCode className="mr-2" />
              Projects
            </a>
          </li>
          {/* Add more links as needed */}
        </ul>
          {/* <a href="/" className="text-white text-lg font-bold italic">
            Your Logo
          </a> */}
      </div>
    </nav>
  );
};
