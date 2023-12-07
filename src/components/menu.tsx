import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import './../../public/styles.css'

// Assume you have some icons available (you can use your own or find icons online)
import { FaHome, FaUser, FaCode } from 'react-icons/fa';

export const Menu: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;

      if (totalHeight === 0) {
        setScrollProgress(0);
      } else {
        setScrollProgress((scrollPosition / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-gray-800 flex flex-1 w-full h-16 sticky top-0">
      <div className="container flex justify-between items-center h-16">
        {/* Navigation Links */}
        <div className="absolute top-0 left-0 h-1 bg-blue-400" style={{ width: `${scrollProgress}%` }} />

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
