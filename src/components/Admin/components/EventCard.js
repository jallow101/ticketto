import React from "react";
import { Link } from "react-router-dom";
import {BsThreeDotsVertical} from "react-icons/bs";

const Card = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-1  w-full">
      
      <div className="flex flex-col w-[20%] mx-5">
        <Link to="admin/editevent">
          <div className="bg-gray-300  bg-you bg-cover shadow-md h-40 hover:scale-105 "></div>
          <div className="btn flex justify-center items-center">
            <div className="text-center flex-1 text-white italic font-sans bg-gray-700 opacity-75 hover:opacity-100 cursor-pointer">
              View Event
            </div>
            <div className="option">
              <BsThreeDotsVertical />
            </div>
          </div>
        </Link>
      </div>

      <div className="flex flex-col w-[20%]  mx-5">
        <Link to="admin/editevent">
          <div className="bg-gray-300 h-40 bg-popcaan bg-cover shadow-md hover:scale-105 "></div>
          <div className="text-center text-white italic font-sans bg-gray-700 opacity-75 hover:opacity-100 cursor-pointer">
            View Event
          </div>
        </Link>
      </div>

      <div className="flex flex-col w-[20%]  mx-5">
        <Link to="admin/editevent">
          <div className="bg-gray-300 h-40  bg-you bg-cover shadow-md hover:scale-105 "></div>
          <div className="text-center text-white italic font-sans bg-gray-700 opacity-75 hover:opacity-100 cursor-pointer">
            View Event
          </div>
        </Link>
      </div>

      <div className="flex flex-col w-[20%]  mx-5">
        <Link to="admin/editevent">
          <div className="bg-gray-300 h-40 bg-you bg-cover shadow-md hover:scale-105 "></div>
          <div className="text-center text-white italic font-sans bg-gray-700 opacity-75 hover:opacity-100 cursor-pointer">
            View Event
          </div>
        </Link>
      </div>

      <div className="flex flex-col w-[20%]  mx-5">
        <Link to="admin/editevent">
          <div className="bg-gray-300 h-40 bg-popcaan bg-cover shadow-md hover:scale-105 "></div>
          <div className="text-center text-white italic font-sans bg-gray-700 opacity-75 hover:opacity-100 cursor-pointer">
            View Event
          </div>
        </Link>
      </div>

      <div className="flex flex-col w-[20%]  mx-5">
        <Link to="admin/editevent">
          <div className="bg-gray-300 h-40 bg-you bg-cover shadow-md hover:scale-105 "></div>
          <div className="text-center text-white italic font-sans bg-gray-700 opacity-75 hover:opacity-100 cursor-pointer">
            View Event
          </div>
        </Link>
      </div>

      
      <div className="flex flex-col w-[20%]  mx-5">
        <Link to="admin/editevent">
          <div className="bg-gray-300 h-40  bg-you bg-cover shadow-md hover:scale-105 "></div>
          <div className="text-center text-white italic font-sans bg-gray-700 opacity-75 hover:opacity-100 cursor-pointer">
            View Event
          </div>
        </Link>
      </div>

      <div className="flex flex-col w-[20%]  mx-5">
        <Link to="admin/editevent">
          <div className="bg-gray-300 h-40 bg-you bg-cover shadow-md hover:scale-105 "></div>
          <div className="text-center text-white italic font-sans bg-gray-700 opacity-75 hover:opacity-100 cursor-pointer">
            View Event
          </div>
        </Link>
      </div>
      


    </div>
  );
};

export default Card;
