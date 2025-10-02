import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import logo from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // change at 20px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Sermons", path: "/sermons" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  const aboutLinks = [
    { name: "Who we Are", path: "/about" },
    { name: "Ministries", path: "/about-us/ministries" },
    { name: "Connect Group", path: "/about-us/connect-group" },
    { name: "Leadership", path: "/about-us/leaders" },
  ];

  const isAboutActive = location.pathname.startsWith("/about");

  return (
    <header
  className={`z-50 ${
    isScrolled
      ? "sticky top-0 w-full"
      : "absolute top-6 left-1/2 transform -translate-x-1/2 w-full max-w-6xl"
  }`}
>
  <div
    className={`px-6 py-3 flex items-center justify-between shadow-lg 
    transition-colors duration-300 ease-in-out
    ${
      isScrolled
        ? "bg-primary-50 rounded-none" 
        : "bg-primary-50 rounded-full" 
    }`}
  >
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-14 rounded-full bg-white p-1 shadow-md"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-10 font-medium relative">
          {navLinks.map((link, idx) => {
            if (link.name === "About Us") {
              return (
                <div key={idx} className="relative group">
                  <NavLink
                    to={link.path}
                    className={`transition ${
                      isAboutActive
                        ? "text-primary-500 border-b-2 border-primary-500 pb-1"
                        : "hover:text-primary-500"
                    }`}
                  >
                    {link.name}
                  </NavLink>

                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                    {aboutLinks.map((sublink, subIdx) => (
                      <NavLink
                        key={subIdx}
                        to={sublink.path}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500 ${
                            isActive ? "bg-primary-50 text-primary-500" : ""
                          }`
                        }
                      >
                        {sublink.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={idx}
                to={link.path}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-primary-500 border-b-2 border-primary-500 pb-1"
                      : "hover:text-primary-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Login */}
        <div>
          <button className="flex items-center gap-2 bg-primary-500 text-white px-5 py-2 rounded-full hover:bg-[#bc6304] transition">
            Login
            <FiLogIn size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
