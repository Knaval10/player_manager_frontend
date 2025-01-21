import React, { useState } from "react";
import logo from "../../../assets/FutsalMgmt.png";
import { navData } from "../../../constants/navData";
import { Link } from "react-router-dom";
const Heda = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const menuItems = [
    { icon: "🏠", label: "Home" },
    { icon: "👤", label: "Profile" },
    { icon: "✉️", label: "Messages" },
    { icon: "⚙️", label: "Settings" },
  ];

  return (
    <div className="relative flex justify-end">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <button
          onClick={toggleMenu}
          className={`w-16 h-16 border-4 border-teal-500 rounded-full text-white flex flex-col items-center justify-center shadow-lg text-3xl absolute z-20 ${
            isOpen ? " top-[105px]" : "top-10"
          }`}
        >
          <span
            className={`block w-8 h-1 bg-teal-500 rounded transition-transform duration-500 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-teal-500 rounded my-1 transition-opacity duration-500 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-teal-500 rounded transition-transform duration-500 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
          {/* <img src={logo} alt="" className="rounded-full h-full w-full" /> */}
        </button>

        <ul
          className={`absolute w-full h-full flex justify-center items-center z-10 ${
            isOpen ? "top-20" : "top-0"
          }`}
        >
          {navData.map((item, index) => {
            const angle = (-180 / (navData.length - 1)) * index - 90;
            // const angle = (360 / navData?.length) * index;
            const radius = 90;

            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <li
                key={index}
                className={`absolute transition-all duration-500 ease-out`}
                style={{
                  transform: isOpen
                    ? `translate(${x}px, ${y}px)`
                    : `translate(0, 0)`,
                  opacity: isOpen ? 1 : 0,
                  transitionDelay: `${index * 10}ms`,
                }}
              >
                <Link
                  to={item.link}
                  className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg text-xl"
                >
                  {item.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Heda;
