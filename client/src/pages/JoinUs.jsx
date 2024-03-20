import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JoinUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      toast.error("All Fields Required");
      return;
    }
    try {
      const response = await fetch("/api/auth/login", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success == false) {
        toast.error(`Error: ${data.message}`);
        return;
      }
      toast.success("User login successfully");
      console.log(data);
    } catch (error) {
      toast.error("Error While logging in User!!");
      console.log(error);
    }
  };
  return (
    <div className=" w-full min-h-screen">
      <ToastContainer />
      <form
        className=" shadow-lg rounded w-[90%] md:max-w-md mx-auto p-4 mt-10 bg-sky-50"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            for="email"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="py-4 text-sm mb-4">
          <p>
            Don&apos;t have an account?{" "}
            <Link to="/register">
              <span className="text-blue-500"> Create One!</span>
            </Link>
          </p>
        </div>
        <OAuth />
      </form>
    </div>
  );
};

export default JoinUs;
