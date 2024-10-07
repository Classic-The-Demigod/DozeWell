import { NavLink } from "react-router-dom";

import MenuIcon from "../assets/menu_icon.png"

const Header = () => {
  return (
    <div className="container mx-auto mt-5 px-3 sm:px-0">
      <div className="flex items-center justify-between bg-bg-primary px-5  py-5 sm:py-3 rounded-3xl">
        <h1 className="text-purple-dozewell font-bold sm:text-md text-xl">DozeWell</h1>
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

        <button className="sm:hidden">
          <img src={MenuIcon} className="w-10" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
