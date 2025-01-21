import { useState } from "react";
import { Link } from "react-router-dom";
import { navData } from "../../../constants/navData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-md sticky top-0 z-10 ">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            FootballManager
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {/* <Menu /> */}
              <div className="flex flex-col gap-0.5">
                <div className="w-3 h-0.5 bg-black"></div>
                <div className="w-3 h-0.5 bg-black"></div>
                <div className="w-3 h-0.5 bg-black"></div>
              </div>
            </button>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            {navData.map((item, index) => (
              <Link
                to={item.link}
                className="text-gray-700 hover:text-blue-600"
                key={index}
              >
                {item.title}
              </Link>
            ))}

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Log In
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <div className="flex flex-col space-y-2">
              {navData.map((item, index) => (
                <Link
                  to={item.link}
                  className="text-gray-700 hover:text-blue-600"
                  key={index}
                >
                  {item.title}
                </Link>
              ))}
              <button className="w-full">Sign Up</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
