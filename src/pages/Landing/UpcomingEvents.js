import React from "react";
import { Link } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import attack from "../../assets/estade.jpg";

const UpcomingEvents = ({ topEvents }) => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row p-10">
      {
        <div className="left flex flex-col md:flex-row w-full md:w-2/3">
          <div className="group w-full md:w-1/2 h-[80vh] relative text-center">
            <Link to={"/checkout/" + topEvents[0].id}>
              <img
                className="group-hover:scale-90 group-hover:object-contain  shadow-lg w-full h-full rounded-l-md object-cover cursor-pointer group-hover:"
                src={topEvents[0].image}
                alt=""
              />

              <div
                className="bottom_overlay h-10 leading-8 absolute bottom-0 left-0 w-full 
          rounded text-white  bg-gray-900 opacity-0 cursor-pointer
          group-hover:bg-gray-900 group-hover:opacity-75 "
              >
                <h4>View Details {topEvents[0].name}</h4>
              </div>
            </Link>
          </div>

          <div className="flex flex-col w-full md:w-1/2 h-[80vh] md:ml-2  text-center ">
            <div className="group relative hover:h-full h-64  text-center">
              <Link to={"/checkout/" + topEvents[1].id}>
                <img
                  className="group-hover:scale-100 group-hover:object-contain  shadow-lg w-full h-full rounded-tr-md object-cover"
                  src={topEvents[1].image}
                  alt=""
                />
                <div
                  className="flex justify-center items-center bottom_overlay h-full leading-8 absolute bottom-0 left-0 w-full 
                rounded-r-md bg-gray-900 opacity-0 cursor-pointer
                group-hover:bg-gray-900 group-hover:opacity-50 "
                >
                  <h2 className="text-white text-xl italic font-sans hover:text-blue-500">View Details</h2>
                </div>
              </Link>
            </div>

            <div className="border-separate h-5"></div>

            <div className="group relative hover:h-full h-full object-cover text-center">
              <Link to={"/checkout/" + topEvents[2].id}>
                <img
                  className="group-hover:scale-90 group-hover:object-contain absolute shadow-lg w-full h-full rounded-tr-md object-cover"
                  src={topEvents[2].image}
                  alt=""
                />
                <div
                  className="bottom_overlay h-10 leading-8 absolute bottom-0 left-0 w-full 
                rounded-r-md text-white  bg-gray-900 opacity-0 cursor-pointer
                group-hover:bg-gray-900 group-hover:opacity-75 "
                >
                  <h4>View Details</h4>
                </div>
              </Link>
            </div>
            
            {/* <div className="group relative h-1/2 text-center">
              <Link to={"/checkout/" + topEvents[2].id}>
                <img
                  className="shadow-lg w-full h-full rounded-br-md object-cover"
                  src={flyer}
                  alt=""
                />
                <div
                  className="bottom_overlay h-10 leading-8 absolute bottom-0 left-0 w-full 
                rounded-r-md text-white  bg-gray-900 opacity-0 cursor-pointer
                group-hover:bg-gray-900 group-hover:opacity-75 "
                >
                  <h4>View Details</h4>
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      }

      <div className="right_side_events  w-full md:w-1/3 flex flex-col items-center">
        <p className="text-sky-500 text-xl text-center font-mono underline">
          Upcoming Events
        </p>
        <div className="flex mt-2">
          <div className=" hover:scale-110 h-full duration-1000 hover:border-white hover:transition-all delay-250 cursor-pointer">
            <img
              width={140}
              className="rounded object-cover h-full"
              src="https://firebasestorage.googleapis.com/v0/b/ticketoo-adf4c.appspot.com/o/ST-Brikama-Boyo.jpeg?alt=media&token=8fe82e70-ae26-4ec9-931d-e58cd13fca9e"
              alt=""
            />
          </div>
          <div className="w-3/5 text m-2 ">
            <h2 className="text-indigo-600 text-center  font-serif text-md ">
              ST Brikama Boyo
            </h2>
            <h5 className="text-yellow-600 text-center text-sm font-serif mt-2">
              Independence
            </h5>
            <h6 className="text-center">15 January, 2022</h6>
            <h6 className="rounded py-2 px-1 bg-gray-700 text-white text-center cursor-pointer hover:bg-indigo-700">
              More Info
            </h6>
          </div>
        </div>

        <div className="flex mt-2">
          <div className=" hover:scale-110 duration-1000 hover:border-white hover:transition-all delay-250 cursor-pointer">
            <img
              width={140}
              className="rounded object-cover h-full"
              src="https://m.media-amazon.com/images/I/81iJGSob05L._SS500_.jpg"
              alt=""
            />
          </div>
          <div className="w-3/5 text m-2 ">
            <h2 className="text-indigo-600 text-center  font-serif text-md ">
              Bm Jaay
            </h2>
            <h5 className="text-yellow-600 text-center text-sm font-serif mt-2">
              Grand Theatre
            </h5>
            <h6 className="text-center">15 January, 2022</h6>
            <h6 className="rounded py-2 px-1 bg-gray-700 text-white text-center cursor-pointer hover:bg-indigo-700">
              More Info
            </h6>
          </div>
        </div>

        <div className="flex mt-2">
          <div className=" hover:scale-110 duration-1000 hover:border-white hover:transition-all delay-250 cursor-pointer">
            <img
              width={140}
              className="rounded object-cover h-full"
              src={attack}
              alt=""
            />
          </div>
          <div className="w-3/5 text m-2 ">
            <h2 className="text-indigo-600 text-center  font-serif text-md ">
              Attack
            </h2>
            <h5 className="text-yellow-600 text-center text-sm font-serif mt-2">
              QCity
            </h5>
            <h6 className="text-center">15 January, 2022</h6>
            <h6 className="rounded py-2 px-1 bg-gray-700 text-white text-center cursor-pointer hover:bg-indigo-700">
              More Info
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
