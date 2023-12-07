import React from 'react';

interface AboutCardProps {
    imgSrc?: string;
    description?: string;
  }
  

const AboutCard: React.FC<AboutCardProps> = ({ imgSrc = "/images/me.jpg", description = ""}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md flex">
      {/* Profile Image */}
      <img
        src={imgSrc}
        alt="Your Name"
        className="w-32 h-32 rounded-lg rounded-br-none rounded-tr-none mx-auto round" // Center the image with mx-auto
      />

      {/* About Me Text */}
      <p className="text-lg leading-relaxed p-4 flex flex-1 justify-center items-center">
        {description}
      </p>
    </div>
  );
};

export default AboutCard;
