import React from "react";

const Navigation = () => {
  return (
    <div className="navbar">
      <ul classname="navbarContent">
        <li>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Home
          </button>
        </li>
        <li><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            About
          </button></li>
        <li><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Services
          </button></li>
        <li><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contacts
          </button></li>
      </ul>
    </div>
  );
};

export default Navigation;
