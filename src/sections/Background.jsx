import React from "react";
import { FaStar } from "react-icons/fa"; // Star icon for achievements

const Background = () => {
  const workExperience = [
    {
      title: "Associate WordPress Developer (Intern)",
      company: "Biyaheng Pinoy Corp. (Eeazy Philippines)",
      duration: "Feb – May 2025",
      description:
        "Trained as a WordPress intern at Biyaheng Pinoy Corp. (Eeazy Philippines) using the Gantry framework and Helium theme, and assisted in creating a user guide for the company’s system, documenting workflows and processes.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Technological University of the Philippines - Manila",
      duration: "2021 – 2025",
      description:
        "Focused on software engineering, database systems, and full-stack web development, culminating in a capstone project developing the Public Employment Service Office (PESO) City of Taguig website.",
      achievements: "Dean's Lister (2021-2025), Graduated with Latin Honors.",
    },
  ];

  return (
    <div id="background" className="px-6 py-20 md:px-12 lg:p-24">
      <div className="flex flex-col md:flex-row gap-6 md:gap-16">
        {/* Work Experience */}
        <div className="md:w-1/2">
          <h3 className="text-2xl md:text-4xl font-bold text-primary mb-10 text-center md:text-start">
            Work <span className="text-slate-700">Experience</span>
          </h3>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index}>
                <h4 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">
                  {job.title}
                </h4>
                <p className="text-gray-500 text-sm lg:text-base">
                  {job.company} • {job.duration}
                </p>
                <p className="mt-2 text-gray-700 leading-relaxed text-sm lg:text-base">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        {/* Education */}
        <div className="md:w-1/2">
          <h3 className="text-2xl md:text-4xl font-bold text-primary mb-10 text-center md:text-start mb-10">
            Education
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index}>
                <h4 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">
                  {edu.degree}
                </h4>
                <p className="text-gray-500 text-sm lg:text-base">
                  {edu.school} • {edu.duration}
                </p>
                <p className="mt-2 text-gray-700 leading-relaxed text-sm lg:text-base">
                  {edu.description}
                </p>
                {/* Achievements */}
                {edu.achievements && (
                  <p className="mt-2 text-blue-600 font-semibold flex items-center gap-2 text-sm lg:text-base">
                    <FaStar className="text-yellow-400" />
                    {edu.achievements}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
