import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative navbar bg-base-100 shadow-sm px-6 md:px-12 h-16">
      {/* Left: Logo */}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-bold">Mattfolio</a>
      </div>

      {/* Center: Menu (hidden on small screens) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a className="font-medium">Home</a></li>
          <li><a className="font-medium">Resume</a></li>
          <li><a className="font-medium">Contact</a></li>
        </ul>
      </div>

      {/* Right: Social buttons + Hamburger */}
      <div className="flex-none flex items-center gap-3">
        {/* Social buttons */}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-circle"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-circle"
        >
          <FaLinkedin size={20} />
        </a>

        {/* Hamburger button (shown on small screens) */}
        <button
          className="md:hidden btn btn-ghost btn-circle"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-base-100 shadow-md md:hidden">
          <ul className="menu menu-vertical p-4">
            <li><a onClick={toggleMenu}>Home</a></li>
            <li><a onClick={toggleMenu}>Resume</a></li>
            <li><a onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
