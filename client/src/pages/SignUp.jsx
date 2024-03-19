import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import OAuth from "../components/OAuth";
import { Link, useNavigate } from "react-router-dom";

import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);

    const userData = {
      fullname: formData.firstName + " " + formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch("/api/auth/register", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        console.log("error recieved");
        return;
      }
      const data = await response.json();
      if (data.success == false) {
        console.log("error while registering user");
        return;
      }

      console.log(data);
      toast.success("User Registered Successfully.");
      toast.done("Please Login using your email and password");

      navigate("/login");
    } catch (error) {
      console.log("error while registering user ", error);
    }
  };

  return (
    <div className="min-h-screen">
      <form
        className="w-[90%] mx-auto max-w-lg border p-4 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="firstName"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="firstName"
              type="text"
              placeholder="Jane"
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="lastName"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lastName"
              type="text"
              placeholder="Doe"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="email"
            >
              Email
              <span className="text-gray-600 text-xs font-normal italic mb-2 lowercase tracking-normal">
                {" "}
                (This will be your future username)
              </span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="abc@example.com"
              onChange={handleChange}
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="password"
            >
              Password
              <span className="text-gray-600 text-xs font-normal italic mb-2 lowercase tracking-normal">
                {" "}
                (Make it as long and as crazy as you'd like)
              </span>
            </label>
            <div className="flex flex-row relative">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                onChange={handleChange}
              />
              <div
                className="absolute top-0 text-2xl p-4 right-0 cursor-pointer"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <VscEyeClosed /> : <VscEye />}
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white text-md sm:text-lg font-semibold px-4 py-3 rounded-md w-full mb-3"
          onSubmit={handleSubmit}
        >
          Register Now!
        </button>
        <OAuth />
        <div className="py-4 text-sm mb-4">
          <p>
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-blue-500"> Login Here!</span>
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
