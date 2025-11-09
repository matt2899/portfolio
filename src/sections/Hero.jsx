import React from "react";
import { FaDownload, FaFolderOpen } from "react-icons/fa";
import profilePic from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <div id="home" className="hero relative overflow-hidden min-h-screen">
      {/* Left middle blob - blue */}
      <div
        className="absolute top-1/2 w-84 h-84 bg-linear-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 -translate-y-1/2 animate-blob"
        style={{ left: "25%" }}
      ></div>

      {/* Right middle blob - purple/indigo */}
      <div
        className="absolute top-1/2 w-84 h-84 bg-linear-to-r from-purple-500 via-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 -translate-y-1/2 animate-blob animation-delay-2000"
        style={{ right: "25%" }}
      ></div>

      {/* Subtle outlined blue shapes */}
      <div className="absolute top-24 left-8 w-40 h-40 border-2 border-blue-500 opacity-25 rounded-lg animate-blob-slow"></div>
      <div className="absolute bottom-24 right-12 w-48 h-48 border-2 border-blue-500 opacity-20 rounded-lg animate-blob-slow animation-delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-28 h-28 border-2 border-blue-500 opacity-20 rounded-lg animate-blob-slow animation-delay-2000"></div>

      <div className="hero-content text-center relative z-10">
        <div className="max-w-xl">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="Profile"
              className="w-28 h-28 rounded-full border-3 border-primary shadow-md"
            />
          </div>

          {/* Main headline */}
          <h1 className="text-3xl md:text-5xl font-bold py-6 text-primary">
            I build software, craft experiences,{" "}
            <span className="text-slate-700">and solve problems.</span>
          </h1>

          <p className="text-gray-600">
            Hi! Im Matt - A Passionate Software Developer from Philippines.
          </p>

          <div className="flex gap-2 align-center justify-center mt-4">
            <button className="btn md:btn-lg btn-primary flex items-center gap-2">
              <FaDownload /> Download CV
            </button>
            <button
              className="btn md:btn-lg btn-outline btn-primary flex items-center gap-2"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <FaFolderOpen /> See My Work
            </button>
          </div>
        </div>
      </div>

      {/* Tailwind animations */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(10px, -20px) scale(1.05); }
            66% { transform: translate(-10px, 15px) scale(0.95); }
          }
          .animate-blob {
            animation: blob 8s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }

          @keyframes blob-slow {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(5px, -5px) scale(1.02); }
          }
          .animate-blob-slow {
            animation: blob-slow 12s infinite;
          }
          .animation-delay-1000 {
            animation-delay: 1s;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
