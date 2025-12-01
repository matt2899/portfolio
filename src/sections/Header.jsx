import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < 0) return;

      if (currentScroll < lastScroll) {
        setShowHeader(true); // scrolling up
      } else {
        setShowHeader(false); // scrolling down
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Closes mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative navbar bg-base-100 shadow-sm px-6 md:px-12 h-16">
        {/* Left: Logo */}
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold text-primary">
            Matt <span className="text-slate-700">Marquez</span>
          </a>
        </div>

        {/* Center: Menu (hidden on small screens) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#home" className="font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="font-medium">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="font-medium">
                Projects
              </a>
            </li>
            <li>
              <a href="#background" className="font-medium">
                Background
              </a>
            </li>
            <li>
              <a href="#contact" className="font-medium">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Social buttons + Hamburger */}
        <div className="flex-none flex items-center gap-3">
          <a
            href="https://github.com/matt2899"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-circle"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/matt-marquez-bb039729b/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-circle"
          >
            <FaLinkedin size={20} />
          </a>

          {/* Hamburger button (mobile only) */}
          <button
            className="md:hidden btn btn-ghost btn-circle"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-base-100 shadow-md md:hidden">
            <ul className="menu menu-vertical p-4">
              <li>
                <a href="#home" onClick={handleLinkClick}>
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" onClick={handleLinkClick}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={handleLinkClick}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#background" onClick={handleLinkClick}>
                  Background
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleLinkClick}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
