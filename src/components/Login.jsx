import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEnrollment } from "../context/EnrollmentContext";

const Login = () => {
    const { setLogin } = useEnrollment();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLogin(false);
  };


  return (
    <div className="fixed inset-0 z-[99] flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white text-black rounded-xl shadow-lg z-50 w-[320px] max-h-[90vh] overflow-y-auto px-7 pt-5 pb-10">
        <div className="pr-1 pt-1 flex justify-end items-center">
          <FontAwesomeIcon
            icon={faXmark}
            className="h-4 w-4 hover:bg-gray-200 bg-gray-100 text-blue-950 rounded-full cursor-pointer p-1"
            onClick={() => setLogin(false)}
          />
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          <h3 className="text-2xl text-center font-semibold bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] bg-clip-text text-transparent">Login Form</h3>
          <div className="flex justify-center items-center">
            <img
              src="/src/assets/logo.png"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-5 py-2 border w-full rounded-full"
            required
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="px-5 py-2 border w-full rounded-full"
            required
          />
          <button
            type="submit"
            className="bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] rounded-full shadow-lg hover:bg-brightness-110 text-center transition duration-300 ease-in-out cursor-pointer text-white px-4 py-2 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;