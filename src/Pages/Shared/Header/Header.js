import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };

  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/home">Home</a>
              </li>

              <li>
                <Link as={Link} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link as={Link} to="/makeappointment">
                  Appointment
                </Link>
              </li>
              <li>
                <Link as={Link} to="/about">
                  Reviews
                </Link>
              </li>
              <li>
                <Link as={Link} to="/about">
                  Contact us
                </Link>
              </li>
              <li>
                <Link as={Link} to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link as={Link} to="/about">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <Link as={Link} to="/home" class="btn btn-ghost normal-case text-xl">
            Dcotr portal
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link as={Link} to="/home">
                Home
              </Link>
            </li>

            <li>
              <Link as={Link} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link as={Link} to="/makeappointment">
                Appointment
              </Link>
            </li>
            <li>
              <Link as={Link} to="/reviews">
                Reviews
              </Link>
            </li>
            <li>
              <Link as={Link} to="/contact">
                Contact us
              </Link>
            </li>
            <li>
              <Link as={Link} to="/dashboard">
                Dashboard
              </Link>
            </li>
            {/* <li>
              <Link as={Link} to="/about">
                Login
              </Link>
            </li> */}
          </ul>
        </div>
        <div class="navbar-end">

          <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
          <label tabindex="1" for="dashboard-sidebar" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
