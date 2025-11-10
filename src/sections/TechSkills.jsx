import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAngular,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiDotnet,
  SiWordpress,
  SiExpress, 
  SiExpo,
   SiNestjs, 
   SiPostgresql,
} from "react-icons/si";
import { HiDatabase } from "react-icons/hi";

const techs = [
  { name: "React", icon: <FaReact size={45} className="text-blue-500" /> },
   { name: "Node.js", icon: <FaNodeJs size={45} className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress size={45} className="text-gray-700" /> },
  {
    name: "WordPress",
    icon: <SiWordpress size={45} className="text-blue-800" />,
  },
  { name: "MongoDB", icon: <SiMongodb size={45} className="text-green-700" /> },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size={45} className="text-purple-600" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={45} className="text-blue-700" />,
  },
 
  { name: "HTML5", icon: <FaHtml5 size={45} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={45} className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs size={45} className="text-yellow-500" /> },

  {
    name: "Tailwind",
    icon: <SiTailwindcss size={45} className="text-teal-400" />,
  },
  { name: "Expo", icon: <SiExpo size={45} className="text-black" /> },

  // {
  //   name: "SQL",
  //   icon: <HiDatabase size={45} className="text-sky-600" />,
  // },
  //  {
  //   name: "NestJS",
  //   icon: <SiNestjs size={45} className="text-red-600" />, 
  // },
  // {
  //   name: "PostgreSQL",
  //   icon: <SiPostgresql size={45} className="text-sky-700" />, 
  // },
];

const TechSkills = () => {
  return (
    <div id="skills" className="px-6 py-20 md:px-12 lg:p-24 bg-base-200">
      <div className="text-center mb-10 md:mb-24">
        <h2 className="text-2xl md:text-4xl font-bold text-primary">
          Tech <span className="text-slate-700">Stacks</span>
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-lg">
          Technologies I work with to build modern web applications
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 ">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="card rounded-none  bg-base-100 shadow-sm flex flex-col items-center justify-center p-6 sm:p-8 hover:shadow-md transition"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gray-100 mb-3">
              {tech.icon}
            </div>
            <p className="font-medium text-gray-700 text-xs md:text-sm sm:text-base text-center">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
