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
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search books..."
              className="input input-bordered w-40 md:w-60 rounded-r-none"
            />
            <button className="btn btn-primary rounded-l-none">
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

          {/* Login button */}
          <button className="btn btn-secondary">Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
