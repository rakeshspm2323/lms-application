"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
// import { useEnrollment } from "../context/EnrollmentContext";
import Login from "./Login";
import logo from "/src/assets/logo.png"

const Header = () => {
  // const { login, setLogin } = useEnrollment();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

   const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    {/* {login && <Login />} */}
    <div className={`w-full h-14 ${
          isScrolled ? "bg-transparent" : "bg-gray-100"
        } transition-all duration-300 shadow-md text-black flex justify-between items-center px-4 sticky top-0 z-[50] backdrop-blur-md`}>
      <div className="hidden lg:block w-[1%]"></div>
      {/* Logo Section */}
      <div className="lg:w-[35%] w-full flex items-center gap-3">
        <img src={logo} alt="" className="w-10 h-9 "/>
        <h2 className="text-xl font-bold bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] bg-clip-text text-transparent">LMS Application</h2>
      </div>
      {/* Hamburger Icon */}
      <div className="lg:hidden" onClick={handleToggle}>
        {isOpen ? (
          <p className="font-bold text-2xl cursor-pointer hover:text-gray-700">X</p>
        ) : (
          <div className="space-y-1.5 cursor-pointer">
            <div className="bg-black w-5 h-1"></div>
            <div className="bg-black w-5 h-1"></div>
            <div className="bg-black w-5 h-1"></div>
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-end items-center w-[60%] font-medium">
        <div className="flex justify-center items-center gap-2 border px-3 py-1 rounded-md cursor-pointer">
          <FaUser  className="text-md" />
          <Link to="/">Login</Link>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"} w-full h-auto  absolute left-0 top-14 z-50 bg-gray-100 text-black px-7 pt-3 pb-7 flex flex-col gap-3 font-medium overflow-hidden`}
      >
        <Link to="/" className="hover:underline underline-offset-3 hover:text-gray-600">Home</Link>
        <Link to="/about-us" className="hover:underline underline-offset-3 hover:text-gray-600">About</Link>
        <Link to="/contact-us" className="hover:underline underline-offset-3 hover:text-gray-600">Contact</Link>
        <Link to="/courses" className="hover:underline underline-offset-3 hover:text-gray-600">Courses</Link>
        <Link to="/support" className="hover:underline underline-offset-3 hover:text-gray-600">Support</Link>
        <div>
          <a href="tel:+918084863546" target="_blank" rel="noreferrer">
            <button className="bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] transition-all duration-1000  hover:brightness-110 ease-in-out text-white px-5 py-2 w-full rounded-md mt-4 cursor-pointer">
              Call Us
            </button>
          </a>
          <a href="https://wa.me/8084863546" target="_blank" rel="noreferrer">
            <button className="bg-gradient-to-r from-[#3b8dc0] to-[#91873a] hover:brightness-110  transition-all ease-in-out text-white px-5 py-2 w-full rounded-md my-5 cursor-pointer">
              Whatsapp
            </button>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
