import React from "react";
import { securityInfoData } from "../constants/index"; // Adjust the path as needed

const SecurityInfo = () => {
  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-[#1E1637] gap-8 p-8">
      {securityInfoData.map(({ frontImage, title, description, backgroundColor, textColor }, index) => (
        <div key={index} className="w-72 h-72 perspective-1000">
          <div className="relative w-full h-full text-center transition-transform duration-500 transform-style-preserve-3d group hover:rotate-y-180">
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-white flex items-center justify-center rounded-lg">
              <img
                src={frontImage}
                alt={title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Back Side */}
            <div
              className={`absolute w-full h-full rounded-lg transform rotate-y-180 backface-hidden flex flex-col items-center justify-center ${textColor}`}
              style={{ backgroundColor }}
            >
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="mt-2 text-lg">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SecurityInfo;
