// This will be the footer component for the app
// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 ">
      <div className="container mx-auto flex justify-center items-end h-full">
        <p>&copy; <a href="https://github.com/gabrielclteixeira" target='_blank' className='italic font-medium hover:underline underline-offset-2'>Gabriel Teixeira</a>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
