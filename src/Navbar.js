import React from "react";

function Navbar() {
  return (
    <div>
      <div className="overflow-hidden ">
        <img
          src="/hero2.gif"
          className="w-[40vw] lg:h-[90vh] absolute top-[93px] object-cover rounded-r-full border-4 border-black hidden lg:block font-exo"
        ></img>
      </div>
      <nav className="font-bold bg-rose-200 sm:block text-black w-full">
        <div className="flex justify-end line">
          <ul className="flex">
            <li className="cursor-pointer hover:text-sky-500 m-4">
              <a>Our Work</a>
            </li>
            <li className="cursor-pointer hover:text-sky-500 m-4">
              <a>Our Story</a>
            </li>
            <li className="cursor-pointer hover:text-sky-500 m-4">
              <a>Services</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
