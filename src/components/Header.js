import React from "react";
// import {signInWithGoogle} from "./GoogleAuth/Login";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import "./css/header.css";
import logo from "../assets/logo.png";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const [{ authUser }, dispatch] = useStateValue();

  const logout = () =>{
    signOut(auth)
    dispatch({
      type: "SIGNOUT",
    });
  }

  return (
    // bg-gradient-to-l from-indigo-600 to-cyan-600
    <div className="header sticky top-0 z-50 bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-end md:justify-between h-10 pt-1 print:hidden">
      <div className="logo">
        <img className="object-contain w-20 h-[2rem]" src={logo} alt="" />
      </div>

      <div className={`last_items flex justify-center gap-2 ${authUser.length === 0 ? 'mr-10' : ''}`}>
        <div
          className="nav_items font-bold hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 
          rounded px-2 py-1 cursor-pointer "
        >
          Explore
        </div>

        {authUser.length === 0 ? (
          <Link to="/login">
            <div
              className="nav_items font-medium bg-cyan-700 
          rounded px-2 py-1 hover:bg-red-300 cursor-pointer"
            >
              Sign In
            </div>
          </Link>
        ) : (
          <div className="profile group text-center">
            <img src={authUser.photoURL} alt="" className="group rounded-full bg-white text-3xl cursor-pointer h-8" />
            <div className="group invisible group-hover:visible dropdown text-center w-full bg-cyan-600 opacity-75 text-white  font-sans p-2 rounded mt-1 mr-3 ">
             <div className="flex flex-col justify-center items-center">
             <span className="group hover:text-white  cursor-pointer hover:bg-yellow-500 px-5 py-1 rounded">
                {authUser.displayName}
              </span>

              <span className="group hover:text-green  cursor-pointer hover:bg-yellow-500 px-5 py-1 rounded">
                Tickets
              </span>
              <br></br>
             </div>
             
              <span
                onClick={logout}
                className="text-red-600 cursor-pointer hover:text-white hover:bg-yellow-500 px-5 py-1 rounded"
              >
                Sign out
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
