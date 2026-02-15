import { useContext } from "react";
import { AppContext } from "../../App.jsx";
import ToggleTheme from "../../components/ToggleTheme.jsx";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { switchTheme } = useContext(AppContext);

  return (
    <>
      <nav className="bg-white text-black shadow-md fixed w-full z-[9999] top-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-black">
              <span className="text-red-800">Jayesh </span>Patidar
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-lg">
              <a
                href="#hero"
                className="hover:text-red-800 transition duration-300"
              >
                Home
              </a>
              <a
                href="#education-and-experience"
                className="hover:text-red-800 transition duration-300"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="hover:text-red-800 transition duration-300"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="hover:text-red-800 transition duration-300"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="hover:text-red-800 transition duration-300"
              >
                Contact
              </a>
              <a
                href="JAYESH PATIDAR-SDE-CV.pdf"
                target="_blank"
                className="px-3 border text-red-800 border-red-800 rounded-3xl hover:bg-red-100 hover:text-red-800 hover:border-red-800 dark:border-white font-medium transition-all duration-300"
              >
                Resume
                <MdOutlineFileDownload
                  size={25}
                  className="inline-block ml-1"
                />
              </a>
            </div>
            <div className="hidden md:block">
              <ToggleTheme switchTheme={switchTheme} />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden text-2xl cursor-pointer">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <FaTimes className="text-red-800" />
                ) : (
                  <FaBars className="text-red-800" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white px-4 overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-60 py-4" : "max-h-0"
          }`}
        >
          <a
            href="#hero"
            className="block py-2 hover:text-red-800 transition duration-300"
          >
            Home
          </a>
          <a
            href="#education-and-experience"
            className="block py-2 hover:text-red-800 transition duration-300"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="block py-2 hover:text-red-800 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 hover:text-red-800 transition duration-300"
          >
            Contact
          </a>
          <a
            href="JAYESH PATIDAR-SDE-CV.pdf"
            target="_blank"
            className="px-3 py-[3px] border text-red-800 border-red-800 rounded-3xl hover:bg-red-100 hover:text-red-800 hover:border-red-800 dark:border-white font-medium transition-all duration-300"
          >
            Resume
            <MdOutlineFileDownload size={25} className="inline-block ml-1" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
