import React from "react";
import { Link } from "react-router-dom";
import { teamMembers } from "../constants/index.jsx"; // Import the team members data

const MeetOurTeam = () => {
  return (
    <div className="team-section py-16">

      {/* Back button to navigate back to the homepage */}
      <div className="container mx-auto mb-8">
        <Link to="/">
          <div
            className=" text-white flex items-center px-2 py-3 text-xl  transition duration-300 hover:text-p2 back-animation"
            style={{zIndex: 10 }}
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

      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
          Meet Our Team
        </h2>

        <div className="grid gap-8">
          {/* First Row - 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {teamMembers.slice(0, 2).map((member) => (
              <div
                key={member.id}
                className="team-member rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105"
                style={{ backgroundColor: "#350d4a" }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-white"
                />
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {member.name}
                </h3>

                {/* Social Icons */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-500 hover:scale-125"
                  >
                    <img
                      src="/images/socials/instagram.svg"
                      alt="Instagram"
                      className="w-8 h-8 object-contain"
                    />
                  </a>
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-500 hover:scale-125"
                  >
                    <img
                      src="/images/socials/github.svg"
                      alt="GitHub"
                      className="w-8 h-8 object-contain"
                    />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-500 hover:scale-125"
                  >
                    <img
                      src="/images/socials/linkedin.svg"
                      alt="LinkedIn"
                      className="w-8 h-8 object-contain"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Additional team members grid */}
          {/* Add the rest of the team members here */}
              {/* Second Row - 4 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {teamMembers.slice(2, 6).map((member) => (
              <div
                key={member.id}
                className="team-member bg-p3 rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105"
                style={{ backgroundColor: '#350d4a' }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-white"
                />
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {member.name}
                </h3>

                {/* Social Icons */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-500 hover:scale-125"
                  >
                    <img
                      src="/images/socials/instagram.svg"
                      alt="Instagram"
                      className="w-8 h-8 object-contain"
                    />
                  </a>
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-500 hover:scale-125"
                  >
                    <img
                      src="/images/socials/github.svg"
                      alt="GitHub"
                      className="w-8 h-8 object-contain"
                    />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-500 hover:scale-125"
                  >
                    <img
                      src="/images/socials/linkedin.svg"
                      alt="LinkedIn"
                      className="w-8 h-8 object-contain"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Third Row - 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {teamMembers.slice(6, 9).map((member) => (
              <div
                key={member.id}
                className="team-member bg-p3 rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105"
                style={{ backgroundColor: '#350d4a' }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-white"
                />
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {member.name}
                </h3>

                {/* Social Icons */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-500 hover:scale-125"
                  >
                    <img
                      src="/images/socials/instagram.svg"
                      alt="Instagram"
                      className="w-8 h-8 object-contain"
                    />
                  </a>
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-500 hover:scale-125"
                  >
                    <img
                      src="/images/socials/github.svg"
                      alt="GitHub"
                      className="w-8 h-8 object-contain"
                    />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-500 hover:scale-125"
                  >
                    <img
                      src="/images/socials/linkedin.svg"
                      alt="LinkedIn"
                      className="w-8 h-8 object-contain"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation for shaking the back button */}
      <style >{`
        @keyframes swing {
         from { transform: translateX(0rem); }
         to { transform: translateX(0.5rem); }
         }

        .back-animation {
          animation: swing 1s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default MeetOurTeam;
