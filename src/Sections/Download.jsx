import React from "react";
import { Element } from "react-scroll";
import { teamMembers } from "../constants/index.jsx"; // Import the team members data

const MeetOurTeam = () => {
  return (
    <section  className="team-section py-16">
      <Element name="Team">
      <div className="container mx-auto ">
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
      </Element>
    </section>
  );
};

export default MeetOurTeam;
