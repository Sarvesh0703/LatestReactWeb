import React, { useState, useEffect } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";
import logo from "../assets/logo_dark.png";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        flex justify-between items-center
        px-4 sm:px-12 lg:px-24 xl:px-40
        fixed w-full top-0 z-50
        transition-all duration-500 ease-in-out
        ${
          scrolled
            ? "bg-[#070625] shadow-lg py-1 sm:py-2"
            : "bg-transparent py-2"
        }
      `}
    >
      <a href="#">
        <img
          src={logo}
          alt="Logo"
          className="w-32 sm:w-44"
        />
      </a>

      <div
        className={`${
          !sidebarOpen
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"
        } 
        max-sm:fixed top-0 bottom-0 right-0
        max-sm:min-h-screen max-sm:h-full
        max-sm:flex-col max-sm:bg-[#070625]
        max-sm:pt-20 flex sm:items-center
        transition-all`}
      >
        <img
          src={assets.close_icon}
          alt=""
          onClick={() => setSidebarOpen(false)}
          className="w-5 absolute right-4 top-4 sm:hidden"
        />

        <a
          onClick={() => setSidebarOpen(false)}
          href="#"
          className="text-white text-sm px-4 py-4 hover:text-blue-400"
        >
          Home
        </a>

        <a
          onClick={() => setSidebarOpen(false)}
          href="#our-teams"
          className="text-white text-sm px-4 py-4 hover:text-blue-400"
        >
          Our Teams
        </a>

        <a
          onClick={() => setSidebarOpen(false)}
          href="#services"
          className="text-white text-sm px-4 py-4 hover:text-blue-400"
        >
          Services
        </a>

        <a
          onClick={() => setSidebarOpen(false)}
          href="#our-work"
          className="text-white text-sm px-4 py-4 hover:text-blue-400"
        >
          Our Work
        </a>

        <a
          onClick={() => setSidebarOpen(false)}
          href="#contact-us"
          className="text-white text-sm px-4 py-4 hover:text-blue-400"
        >
          Contact Us
        </a>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img
          src={
            theme === "dark"
              ? assets.menu_icon_dark
              : assets.menu_icon
          }
          alt=""
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden"
        />

        <a
          href="#contact-us"
          className="max-sm:hidden flex items-center gap-2
          bg-blue-600 hover:bg-blue-700
          text-white px-6 py-2 rounded-full
          transition-all duration-300"
        >
          Contact Us
          <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;