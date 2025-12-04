import React from "react";
import pesoLandingPage from "../assets/peso-landing-page.png";
import astereiaFirst from "../assets/astereia-first.png";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div id="projects" className="px-6 py-20 md:px-12 lg:p-24">
      <div className="text-center mb-10 md:mb-24 ">
        <h2 className="text-2xl md:text-4xl font-bold text-primary">
          Featured <span className="text-slate-700">Projects</span>
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-lg">
          A selection of projects I’ve developed using various technologies
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-12 mb-16">
        {/* Image Section */}
        <div className="md:w-1/2 w-full stack">
          <img
            src={pesoLandingPage}
            alt="Project"
            className="rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300"
          />
          <div className="card bg-base-200 text-center shadow-md">
            <div className="card-body">A</div>
          </div>
          <div className="card bg-base-200 text-center shadow">
            <div className="card-body">B</div>
          </div>
          <div className="card bg-base-200 text-center shadow-sm">
            <div className="card-body">C</div>
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h3 className="text-xl md:text-3xl font-semibold mb-4 text-gray-700">
            Public Employment Service Office - City of Taguig Website (Capstone)
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base">
            A web platform built for the Public Employment Service Office - City
            of Taguig, designed to connect job seekers and employers. It
            features job posting, applicant management, and job fair event
            tracking, streamlining employment services through a modern MERN
            stack solution.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/project1")}
            >
              View Details
            </button>
            <a
              href="https://github.com/matt2899/peso-city-of-taguig-website"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* You can duplicate this block for more projects */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-5 md:gap-12">
        {/* Image Section */}
        <div className="md:w-1/2 w-full stack">
          <img
            src={astereiaFirst}
            alt="Project"
            className="rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300"
          />
          <div className="card bg-base-200 text-center shadow-md">
            <div className="card-body">A</div>
          </div>
          <div className="card bg-base-200 text-center shadow">
            <div className="card-body">B</div>
          </div>
          <div className="card bg-base-200 text-center shadow-sm">
            <div className="card-body">C</div>
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h3 className="text-xl md:text-3xl font-semibold mb-4 text-gray-700">
            Astereia & Stellar - 2 Player Unity Game
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base">
            A local two-player game that emphasizes teamwork and strategy.
            Players control distinct characters and must collaborate to solve
            puzzles, navigate obstacles, and progress through increasingly
            challenging levels.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/project2")}
            >
              View Project
            </button>
            <button className="btn btn-outline btn-primary">GitHub</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
