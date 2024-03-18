import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b pb-4 md:pb-0 pt-4 bg-gray-100 mb-2 md:mb-4 transition-all">
      <div className="flex flex-row justify-between items-center sm:px-4 w-[90%] sm:w-full mx-auto">
        <div className="text-xl font-bold">
          <Link to="/">
            Sagar<span className="text-orange-400">Estate</span>
          </Link>
        </div>
        <div className="flex space-x-2 text-lg">
          <Link
            to="/about"
            className="p-2 hover:text-blue-500 font-semibold underline"
          >
            About
          </Link>
          <Link
            to="/join-us"
            className="p-2 hover:text-blue-500 font-semibold underline"
          >
            Join-us
          </Link>
        </div>
      </div>
      <form className="bg-white flex items-center justify-between w-[80%] max-w-sm mx-auto mt-2 border rounded-lg focus-within:shadow-md hover:shadow-md md:-translate-y-[100%] transition-all md:-mb-6">
        <input type="text" className="p-2 w-full focus:outline-none" />
        <CiSearch className="text-5xl p-2 bg-cyan-400 hover:opacity-80 rounded-r-lg" />
      </form>
    </header>
  );
};

export default Header;
