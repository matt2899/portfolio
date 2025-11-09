import React, { useEffect, useState } from "react";
import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Footer from "../sections/Footer";
import { useNavigate } from "react-router-dom";
import astereiaHome from "../assets/astereia-home.png";
import astereiaFirst from "../assets/astereia-first.png";
import ice from "../assets/ice.png";
import jungle from "../assets/jungle.png";
import voidLevel from "../assets/void.png";
import { SiUnity } from "react-icons/si";

const Project2 = () => {
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [astereiaFirst, voidLevel, jungle, ice];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setSelectedImage(
      images[currentIndex === 0 ? images.length - 1 : currentIndex - 1]
    );
  };

  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => setSelectedImage(null);

  const tools = [
    { name: "Unity", icon: <SiUnity className="text-gray-800" /> },
  ];

  const fullDescription = `
A local two-player game that emphasizes teamwork, strategy, and problem-solving. 
Players control distinct characters, each with unique abilities, and must collaborate 
to solve complex puzzles, navigate intricate obstacles, and overcome dynamic challenges. 
The game features multiple levels with increasing difficulty, requiring coordination, 
timing, and communication to progress. With engaging visuals and interactive mechanics, 
it encourages players to experiment with different strategies and fosters cooperative gameplay.
`;

  const truncated = fullDescription.split(" ").slice(0, 60).join(" ") + "...";

  return (
    <>
      <div className="px-6 md:px-12 lg:px-24 py-10 max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="btn btn-circle btn-primary mb-6 hover:bg-primary/80 transition"
        >
          <FaArrowLeft />
        </button>

        {/* Title + Image Section */}
        <div className="flex flex-col lg:flex-row items-start  justify-between gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4">
              Astereia & Stellar - 2 Player Unity Game
            </h1>
            {/* Description with strong tags */}
            <p
              className="text-gray-600 leading-relaxed text-base md:w-3/4 lg:w-full"
              dangerouslySetInnerHTML={{
                __html: showFull ? fullDescription : truncated,
              }}
            />

            <button
              onClick={() => setShowFull(!showFull)}
              className="mt-3 text-primary font-medium underline"
            >
              {showFull ? "View less" : "View more"}
            </button>
          </div>

          {/* Image only on large screens */}
          <div className="hidden lg:block flex-shrink-0 w-[350px]">
            <img
              src={astereiaHome}
              alt="Project Preview"
              className="rounded-lg shadow-md hover:shadow-lg transition"
            />
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Tools & Technologies
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-0">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-none shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <span className="text-gray-700 text-sm font-medium">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Links</h2>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-white font-medium rounded-md hover:bg-blue-500 transition"
          >
            <FaGithub /> GitHub Repo
          </a>
        </div>

        {/* Screenshots */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Screenshot ${i + 1}`}
                className="w-full rounded-lg shadow-lg hover:shadow-lg transition cursor-pointer"
                onClick={() => openModal(i)}
              />
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <button
              className="absolute top-5 right-5 text-white text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <button
              className="absolute left-5 text-white text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <FaArrowLeft />
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-5 text-white text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Project2;
