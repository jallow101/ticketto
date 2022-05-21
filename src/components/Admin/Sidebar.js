import React, { useState } from "react";
import icon from "../../assets/wallet.svg";
// import { Link } from "react-router-dom";
import { BsCalendar4Event, BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import { MdPointOfSale, MdAnalytics, MdAirplaneTicket } from "react-icons/md";

import {ImUsers} from "react-icons/im"

const Sidebar = () => {
  const [sideBar, SetSidebar] = useState(true);

  // const datas = [
  //   {
  //     name: "Events",
  //     path: "/admin",
  //     icon: <BsCalendar4Event />,
  //     submenu: {
  //       items: [{ name: "Active Events" }, { name: "Inactive Events" }],
  //     },
  //   },
  //   { name: "Vendors", path: "/admin/vendors", icon: <MdPointOfSale /> },
  //   { name: "Analytics", path: "/analytics", icon: <MdAnalytics /> },
  //   { name: "Report", path: "/report", icon: <BsFillFileEarmarkMedicalFill /> },
  // ];

  return (
    <div
      className={`left-sidebar ${
        sideBar ? "scale-100" : "scale-0 "
      } w-1/6 h-screen bg-white`}
    >
      <div className="text-center font-bold text-gray-500 text-xl">Menu</div>
      <div className="menu-items m-10">
        

        <div className="sidebar-container flex flex-col items-start">
          <div className="group side-item- cursor-pointer ">
            <div className="group group-hover:bg-gray-400 bg-white py-2 px-5 rounded-md items flex justify-center items-center gap-3 mt-3">
              <div className="group group-hover:text-white text-gray-600">
                <BsCalendar4Event />
              </div>
              <div className="group">
                <h4 className="group-hover:font-mono font-semibold group-hover:text-white text-gray-500">
                  Events
                </h4>
              </div>
            </div>
          </div>

          <div className="group side-item- cursor-pointer ">
            <div className="group group-hover:bg-gray-400 bg-white py-2 px-5 rounded-md items flex justify-center items-center gap-3 mt-3">
              <div className="group group-hover:text-white text-gray-600">
                <ImUsers />
              </div>
              <div className="group">
                <h4 className="font-mono group-hover:text-white text-gray-500">
                  Vendors
                </h4>
              </div>
            </div>
          </div>

          <div className="group side-item- cursor-pointer ">
            <div className="group group-hover:bg-gray-400 bg-white py-2 px-5 rounded-md items flex justify-center items-center gap-3 mt-3">
              <div className="group group-hover:text-white text-gray-600">
                <MdAnalytics />
              </div>
              <div className="group">
                <h4 className="font-mono group-hover:text-white text-gray-500">
                  Settings
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="report m-10">
        <h4 className="font-extrabold text-gray-500">Report</h4>

        <div className="sidebar-container flex flex-col items-start">
          <div className="group side-item- cursor-pointer ">
            <div className="group group-hover:bg-gray-400 bg-white py-2 px-5 rounded-md items flex justify-center items-center gap-3 mt-3">
              <div className="group group-hover:text-white text-gray-600">
                <MdPointOfSale />
              </div>
              <div className="group">
                <h4 className="group-hover:font-mono font-bold group-hover:text-white text-gray-500">
                  Sales
                </h4>
              </div>
            </div>
          </div>

          <div className="group side-item- cursor-pointer ">
            <div className="group group-hover:bg-gray-400 bg-white py-2 px-5 rounded-md items flex justify-center items-center gap-3 mt-3">
              <div className="group group-hover:text-white text-gray-600">
                <MdAirplaneTicket />
              </div>
              <div className="group">
                <h4 className="font-mono group-hover:text-white text-gray-500">
                  Tickets
                </h4>
              </div>
            </div>
          </div>

          <div className="group side-item- cursor-pointer ">
            <div className="group group-hover:bg-gray-400 bg-white py-2 px-5 rounded-md items flex justify-center items-center gap-3 mt-3">
              <div className="group group-hover:text-white text-gray-600">
                <MdAnalytics />
              </div>
              <div className="group">
                <h4 className="font-mono group-hover:text-white text-gray-500">
                  Analytics
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="menu m-4 cursor-pointer">
        {datas.map((item) => (
          <Link to={item.path}>
            <div className="group py-1">
              <div className="flex items-center justify-start group group-hover:bg-white  group-hover:text-red-600 rounded-t-md rounded-l-md">
                <div className="group flex-none  w-1 left-0 h-8 transition-all duration-150 delay-200 group-hover:bg-red-700 group-hover:visible invisible bg-red-700"></div>
                <div className="group icon_menu w-full flex justify-between items-center gap-2 ml-2 pr-0">
                  <div className="icon  text-md text-gray-500 group-hover:text-gray-800 font-bold">
                    {item.icon}
                  </div>
                  <div className="group text-gray-500 group-hover:text-black text-center font-sans text-md italic ml-2 event">
                    {item.name}
                  </div>
                  <div className="expand text-gray-500 right-0">
                    <BsChevronDown/>
                  </div>
                </div>
              </div>

             
                <div className="group hidden group-hover:block bg-black opacity-75 pb-2 rounded-b-lg  rounded-br-none">
                  <div className="group  submenu items  flex flex-col justify-center items-center">
                    <div className="two_cols flex ">
                      <div className="col_one my-1">
                        <div className="group line h-full  border-l-2 border-white  font-light"></div>
                      </div>
                      <div className="col_two flex flex-col">
                        <div className="group sub text-gray-500 hover:text-red-600 font-serif text-sm  px-2 rounded">
                          Acrive
                        </div>
                        <div className="group sub text-gray-500 hover:text-red-600 font-serif text-sm  px-2 rounded">
                          In-active
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            
            </div>
          </Link>
        ))}
      </div> */}

      <div className="left-sidebar bottom-1 absolute">
        <img className="h-20" src={icon} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
