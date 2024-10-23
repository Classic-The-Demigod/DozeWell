import { NavLink } from "react-router-dom";


const Nav = () => {
  

  return (
    <section className="container mx-auto pt-5 px-3 sm:px-10 text-white">
      <nav className="container mx-auto flex items-center justify-between  py-5 sm:py-3 rounded-3xl">
        <h1 className="font-bold sm:text-md text-xl">DozeWell</h1>

        <ul className="text-white hidden sm:block space-x-[4rem] font-semibold">
          <NavLink>Sound</NavLink>
          <NavLink>Sleep Tracking</NavLink>
          <NavLink>Wake-Up Optimization</NavLink>
          <NavLink>Communnities</NavLink>

          <button className="border border-white py-3 px-11 rounded-full">Profile</button>
        </ul>
      </nav>
    </section>
  );
};

export default Nav;
