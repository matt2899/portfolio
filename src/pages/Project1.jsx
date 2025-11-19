import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiSocketdotio,
  SiCloudinary,
  SiSendgrid,
  SiRender,
} from "react-icons/si";
import Footer from "../sections/Footer";
import { useNavigate } from "react-router-dom";
import pesoLandingPage from "../assets/peso-landing-page.png";
import jobSeekerDashboard from "../assets/job-seeker-dashboard.png";
import jobFair from "../assets/job-fair.png";
import jobPost from "../assets/jobPost.png";
import languageProficiency from "../assets/language-proficiency.png";
import adminDashboard from "../assets/admin-dashboad.png";
import jobFairManagement from "../assets/job-fair-management.png";
import applicationReports from "../assets/application-reports.png";
import companyReports from "../assets/company-reports.png";

const Project1 = () => {
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const images = [
    pesoLandingPage,
    jobFair,
    jobSeekerDashboard,
    languageProficiency,
    jobFairManagement,
    jobPost,

    adminDashboard,
    applicationReports,
    companyReports,
  ];

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
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
    { name: "Socket.IO", icon: <SiSocketdotio className="text-gray-600" /> },
    { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400" /> },
    { name: "SendGrid", icon: <SiSendgrid className="text-blue-500" /> },
    { name: "Render", icon: <SiRender className="text-red-500" /> },
  ];

  const fullDescription = `
    The <strong>Public Employment Service Office (PESO) – City of Taguig Website</strong> is a comprehensive
    employment management platform developed as a capstone project. It serves as a bridge
    between job seekers and employers, streamlining the hiring and recruitment process
    through a modern <strong>MERN stack</strong> architecture. The system offers a centralized solution
    for managing job postings, applications, and employment events while maintaining
    efficiency and transparency for all users.<br /><br />

    Key features include a robust <strong>Job Posting and Company Management</strong> module
    that allows employers to create and manage listings with detailed job descriptions and
    requirements. The <strong>Application Tracking</strong> feature enables both applicants and
    employers to monitor the status of job applications in real time, improving communication
    and follow-up efficiency. Additionally, a dedicated <strong>Job Fair Management</strong> system
    supports both physical and virtual career fairs, with built-in QR-based attendance tracking
    for seamless event participation.<br /><br />

    The platform also includes <strong>Real-Time Notifications</strong> powered by Socket.IO, ensuring
    instant updates on application status changes, job fair announcements, and employer
    responses. A built-in <strong>Resume Builder</strong> helps job seekers easily craft professional
    resumes directly on the site, while the <strong>Administrator Dashboard</strong> provides oversight
    tools for managing user accounts, job postings, analytics, and system configurations.
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
              Public Employment Service Office - City of Taguig Website
              (Capstone)
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
          <div className="hidden lg:block shrink-0 w-[350px]">
            <img
              src={pesoLandingPage}
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
            href="https://github.com/matt2899/peso-city-of-taguig-website"
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
            {(showAll ? images : images.slice(0, 4)).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Screenshot ${i + 1}`}
                className="w-full rounded-lg shadow hover:shadow-lg transition cursor-pointer"
                onClick={() => openModal(i)}
              />
            ))}
          </div>

          {/* See More / See Less button */}
          {images.length > 4 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-primary font-medium underline"
              >
                {showAll ? "See less" : "See more"}
              </button>
            </div>
          )}
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

export default Project1;
