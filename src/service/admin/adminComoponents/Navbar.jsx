import React, { useState } from "react";

const Navbar = ({ onNavigate }) => {
  const [activeButton, setActiveButton] = useState(""); // State to track the active button

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName); // Set the active button
    onNavigate(buttonName); // Call the onNavigate function
  };

  return (
    <div className="nav flex bg-gray-600 p-2 flex-col text-center" style={{ boxShadow: "0 1px 30px 2px rgb(37, 99, 235)" }}>
      {/* Admin Panel Heading */}
      <div
        style={{
          fontFamily: '"Dancing Script", cursive',
          fontWeight: "bold",
          fontSize: "3rem",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
          letterSpacing: "3px",
        }}
        className="heading mt-4 text-white text-center"
      >
        ADMIN PANEL
      </div>

      {/* Navbar Options */}
      <div className="options list-none">
        <ul className="flex justify-around m-8 p-2 font-semibold text-xl text-white">
          {["Campus", "Faculty", "Course", "Subject", "Student"].map((item) => (
            <li
              key={item}
              className={`p-2 border rounded-md border-b-2 border-black shadow-[2px_2px_3px_black] transition-all transform active:scale-95 active:translate-y-0.5 ${
                activeButton === item
                  ? "bg-slate-300 text-blue-900 font-bold" // Styles for active button
                  : "bg-gray-600 hover:bg-gray-500 hover:scale-110 hover:translate-y-1" // Styles for non-active button
              }`}
              onClick={() => handleButtonClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
