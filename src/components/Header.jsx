import { NavLink } from "react-router-dom";

import MenuIcon from "../assets/menu_icon.png";
import CloseIcon from "../assets/cross_icon.png";
import { useState } from "react";

const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <section className="container mx-auto pt-5 px-3 sm:px-10">
      <nav className="container mx-auto flex items-center justify-between bg-bg-primary px-5  py-5 sm:py-3 rounded-3xl">
        <h1 className="text-purple-dozewell font-bold sm:text-md text-xl">
          DozeWell
        </h1>
        <ul className="text-white hidden sm:block space-x-4">
          <NavLink>Home</NavLink>
          <NavLink>Features</NavLink>
          <NavLink>How It Works</NavLink>
          <NavLink>Testimonials</NavLink>
        </ul>

        <div className="hidden sm:flex items-center gap-3">
          <NavLink className="text-white">Login</NavLink>
          <button className="text-purple-dozewell border border-purple-dozewell px-8 rounded-3xl py-2">
            Try for free
          </button>
        </div>

        <button className="sm:hidden" onClick={() => setVisible(true)}>
          <img src={MenuIcon} className="w-10" alt="" />
        </button>
      </nav>

      <div
        className={`absolute top-0 left-0 bottom-0 overflow-hidden bg-white transition-all duration-200 ease-linear ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 bg-bg-primary text-white h-screen text-base font-medium">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={CloseIcon} className="w-5" alt="" />
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-b-purple-dozewell"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-b-purple-dozewell"
            to="/"
          >
            Features
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-b-purple-dozewell"
            to="/"
          >
            How It Works
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-b-purple-dozewell"
            to="/"
          >
            Testimonials
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-b-purple-dozewell"
            to="/"
          >
            Login
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Header;
