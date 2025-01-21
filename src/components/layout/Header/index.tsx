import React, { useState } from "react";

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
          className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg text-3xl absolute top-[115px] z-20"
        >
          ☰
        </button>

        <ul className="absolute top-20 w-full h-full flex justify-center items-center">
          {menuItems.map((item, index) => {
            const angle = (-180 / (menuItems.length - 1)) * index - 90;
            const radius = 100;

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
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg text-xl">
                  {item.icon}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Heda;
