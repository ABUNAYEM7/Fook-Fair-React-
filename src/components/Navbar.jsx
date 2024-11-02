import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg'

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink className={'border border-blue-400'} to={'/'}>Home</NavLink>
      </li>
      <li>
      <NavLink className={'border border-blue-400'} to={'/ReadList'}>Listed Book</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-1" 
            >
              {links}
            </ul>
          </div>
          <div>
            <Link><img className="w-26 h-20 md:w-32 md:h-20" src={logo} alt="log" /></Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-1 md:gap-3">
          <a className="btn md:px-5 bg-[#23BE0A] text-white hover:text-[#23BE0A]">Sing in</a>
          <a className="btn md:px-5 bg-[#59C6D2] text-white hover:text-[#59C6D2]">Sing up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
