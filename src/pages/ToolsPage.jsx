import React from "react";
import { Link } from "react-router-dom";
import { tools } from "../constants/index";

const ToolsPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-[#1E1637] py-16 px-7">
      
      {/* Back button to navigate back to the homepage */}
      <div className="container mx-auto mb-8">
        <Link to="/">
          <div
            className=" text-white flex items-center px-2 py-3 text-xl transition duration-300 hover:text-p2 back-animation"
            style={{ zIndex: 10 }}
          >
            <img
              src="/images/back.svg"
              alt="Back"
              className="mr-2 filter-white"
              style={{ width: "20px", height: "20px" }}
            />
            Back
          </div>
        </Link>
      </div>

      <h2 className="text-4xl font-bold text-purple-300 mb-12">Our Tools</h2>
      
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {tools.map(({ id, image, title, description, url }) => (
            <div
              key={id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 animate-fadeIn"
              style={{ animationDelay: `${id * 100}ms` }}
            >
              <img src={image} alt={title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-200 text-purple-800 font-semibold py-2 px-4 rounded-lg hover:bg-purple-300 transition-colors duration-300"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation for shaking the back button */}
      <style>{`
        @keyframes swing {
          from { transform: translateX(0rem); }
          to { transform: translateX(0.5rem); }
        }

        .back-animation {
          animation: swing 1s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default ToolsPage;
