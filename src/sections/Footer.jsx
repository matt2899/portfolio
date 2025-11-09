import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-primary text-white text-center py-14 mt-14 relative">
        <div className="flex justify-center gap-6 mb-3">
          <a
            href="https://github.com/matt2899"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-base-200 transition-colors"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://ph.linkedin.com/in/matt-marquez-bb039729b?trk=people-guest_people_search-card"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-base-200 transition-colors"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="mailto:mattjovan.marquez28@gmail.com"
            className="hover:text-base-200 transition-colors"
          >
            <FaEnvelope className="text-2xl" />
          </a>
        </div>

        <p className="text-sm opacity-90">
          © {new Date().getFullYear()} Matt Jovan Marquez. All rights reserved.
        </p>
      </footer>

      {/* Scroll to top button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition border-2 border-color-white"
          title="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;
