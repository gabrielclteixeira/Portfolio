// This will be the footer component for the app
// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white h-16 bottom-0">
      <div className="container mx-auto flex justify-center items-center h-full">
        <p className='font-mono justify-center items-center flex flex-1'>&copy; <a href="https://github.com/gabrielclteixeira" target='_blank' className='italic font-black hover:underline underline-offset-2'>Gabriel Teixeira</a>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
