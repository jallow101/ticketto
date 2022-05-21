import React from "react";
import photo from "../../assets/you.jpg";
import tic from "../../assets/tic.webp";

const Header = () => {
  return (
    <div className="flex justify-around items-center drop-shadow-xl bg-white rounded">
      <div className="w-10 ">
        <img className="object-contain " src={tic} alt="" />
      </div>

      <div className=" font-bold text-black cursor-pointer m-4">
        <input
          className="rounded px-3 p-0.5 bg-gray-300"
          type="text"
          placeholder="Search for events"
        />
      </div>

      <div
        className=" flex  cursor-pointer"
      >
        <div className="notification w-10 h-10">
        <img className="rounded-full" src={photo} alt="profile" />.</div>
        <div className="profile ml-5 w-10 h-10">
          <img className="rounded-full" src={photo} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
