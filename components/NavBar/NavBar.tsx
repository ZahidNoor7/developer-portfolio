"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLUListElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target as Node)
    ) {
      setIsDrawerOpen(false);
    }
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Disable scrolling on the body
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; // Re-enable scrolling on the body
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled when component unmounts
    };
  }, [isDrawerOpen]);

  return (
    <nav className="fixed w-full z-[100] left-0 right-0 bg-transparent backdrop-blur-lg m-auto lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
      <div className="flex items-center justify-between py-4 px-4 md:px-8">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-[#16f2b3] font-bold text-2xl lg:text-3xl"
          >
            Muhammad Zahid Noor
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="text-white focus:outline-none"
          >
            {isDrawerOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row items-center space-x-4">
          <li>
            <Link
              href="/#about"
              className="text-sm text-white transition-colors duration-300 hover:text-pink-600"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/#experience"
              className="text-sm text-white transition-colors duration-300 hover:text-pink-600"
            >
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link
              href="/#skills"
              className="text-sm text-white transition-colors duration-300 hover:text-pink-600"
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              href="/#projects"
              className="text-sm text-white transition-colors duration-300 hover:text-pink-600"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              href="/#education"
              className="text-sm text-white transition-colors duration-300 hover:text-pink-600"
            >
              EDUCATION
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="text-sm text-white transition-colors duration-300 hover:text-pink-600"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      {/* Responsive Drawer Menu */}
      <ul
        ref={drawerRef}
        className={`md:hidden fixed right-0 top-0 h-screen w-64 bg-black backdrop-blur-lg z-50 p-5 space-y-2 transition-transform duration-300 ${
          isDrawerOpen
            ? "transform translate-x-0"
            : "transform translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsDrawerOpen(false)}
          className="absolute top-4 right-4 text-white focus:outline-none"
        >
          <AiOutlineClose size={24} />
        </button>
        <li>
          <Link
            href="/#about"
            className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600"
            onClick={() => setIsDrawerOpen(false)}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            href="/#experience"
            className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600"
            onClick={() => setIsDrawerOpen(false)}
          >
            EXPERIENCE
          </Link>
        </li>
        <li>
          <Link
            href="/#skills"
            className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600"
            onClick={() => setIsDrawerOpen(false)}
          >
            SKILLS
          </Link>
        </li>
        <li>
          <Link
            href="/#projects"
            className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600"
            onClick={() => setIsDrawerOpen(false)}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            href="/#education"
            className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600"
            onClick={() => setIsDrawerOpen(false)}
          >
            EDUCATION
          </Link>
        </li>
        <li>
          <Link
            href="/#contact"
            className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600"
            onClick={() => setIsDrawerOpen(false)}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
