import { useState } from "react";
import "./index.css";

function App() {
  const navItem = (
    <>
      <li><a>Home</a></li>
      <li>
        <details>
          <summary>Courses</summary>
          <ul className="p-2">
            <li><a>Delta 2.0</a></li>
            <li><a>Sigma</a></li>
          </ul>
        </details>
      </li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
    </>
  );

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="navbar bg-base-100 shadow-sm">
        {/* Left Section */}
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
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItem}
            </ul>
          </div>
          <a className="text-2xl font-bold cursor-pointer">Book Store</a>
        </div>

        {/* Center Section */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end gap-2">
          {/* Search box */}
          <div className="flex items-center hidden md:block">
            <input
              type="text"
              placeholder="Search books..."
              className="input input-bordered w-40 md:w-60 rounded-r-none"
            />
            <button className="btn btn-primary rounded-l-none hover:bg-pink-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </button>
          </div>

          {/* Theme Controler */}
          <label className="toggle text-base-content">
            <input type="checkbox" value="synthwave" className="theme-controller" />

            <svg 
             aria-label="sun" 
             xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 24 24">
            <g 
             strokeLinejoin="round" 
             strokeLinecap="round" 
             strokeWidth="2" 
             fill="none" 
             stroke="currentColor">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
            </svg>

            <svg 
             aria-label="moon" 
             xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 24 24">
              <g 
               strokeLinejoin="round" 
               strokeLinecap="round" 
               strokeWidth="2" 
               fill="none" 
               stroke="currentColor">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>

          {/* Login button */}
          <button className="btn bg-black text-white hover:bg-slate-800 duratioin-300">Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
