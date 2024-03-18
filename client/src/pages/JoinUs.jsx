import React from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

const JoinUs = () => {
  return (
    <div className=" w-full min-h-screen">
      <form className=" shadow-lg rounded w-[90%] md:max-w-md mx-auto p-4 mt-10 bg-sky-50">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-md font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
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
            <Link to="/sign-up">
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
