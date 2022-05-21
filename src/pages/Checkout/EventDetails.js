import React from "react";
import Map from "./Map";

const EventDetails = ({ event }) => {
  // let left = " bg-indigo-500 shadow-lg shadow-indigo-500/50";
  // let right = "bg-gradient-to-r  bg-cyan-500  to-indigo-600";
  let right = "bg-white";
  let left = "bg-white";
  return (
    <div className="md:w-1/2 h-full bg-white shadow-lg p-5  m-5">
      {/* <div className="title h-5 text-center  font-semibold m-2">
        <h1>Event Details</h1>
      </div> */}
      <div className="flyer h-3/5 bg-blue-300">
        <img
          className="h-60 w-full rounded object-cover"
          src={event.image}
          alt=""
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center h-full">
        <div className="artist md:w-3/5  bg-blue-300 shadow-md shadow-blue-400 ">
          <div className="flex flex-wrap justify-start space-x-2 my-2 ml-2">
            <span className="px-4 py-2 mt-2 rounded-full text-gray-500 bg-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              Gee
            </span>
            <span className="px-4 py-2 mt-2 rounded-full text-gray-500 bg-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              Attack
            </span>
            <span className="px-4 py-2 mt-2 rounded-full text-gray-500 bg-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              Jizzle
            </span>
            <span className="px-4 py-2 mt-2 rounded-full text-gray-500 bg-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              ST
            </span>
            <span className="px-4 py-2 mt-2 rounded-full text-gray-500 bg-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              Tee
            </span>
            <span className="px-4 py-2 mt-2 rounded-full text-gray-500 bg-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              Royal Messenger
            </span>
            <span className="px-4 py-2 mt-2 rounded-full text-gray-500 bg-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              ENC
            </span>
            
            <span className="px-4 py-2 mt-2 rounded-full text-gray-500 bg-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              Big Faa
            </span>
            <span className="px-4 py-2 mt-2 rounded-full text-gray-500 bg-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              Sophia
            </span>
            <span className="px-4 py-2 mt-2 rounded-full text-gray-500 bg-white font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              Nobles
            </span>
          </div>
        </div>
        <div className="information flex flex-col md:w-2/5  h-2/5 shadow-lg">
          <div className="date">
            <h2 className="font-bold text-xl text-center w-full">
              {event.start_time.toDate().toDateString()}
            </h2>
            <blockquote className="text-2xl font-bold italic text-center text-slate-900">
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                <span className="relative text-white">{event.location}</span>
              </span>
            </blockquote>
          </div>
          <div className="ticket font-semibold text-center">
            <h5 className="text-base font-bold italic m-1 tracking-tight  ">
              Ticket prices{" "}
            </h5>
            {event.ticket_types.map((ticket, index) => (
              <label
                className={
                  index % 2 != 1
                    ? "inline-flex items-center m-0.5 rounded p-1 " + left
                    : "inline-flex items-center m-0.5 rounded p-1 " + right
                }
              >
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
                  <span className="relative text-white">{ticket.name}</span>
                </span>
                {/* <h6
                  className={
                    index % 2 == 1
                      ? "font-bold text-xs text-white"
                      : "font-semibold text-xs text-black-500"
                  }
                >
                  {ticket.name} :{" "}
                </h6> */}
                <h5 className="font-bold text-grey-300 ml-2">
                  {" "}
                  D {ticket.price}{" "}
                </h5>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="map shadow-xl rounded-xl bg-blue-300 mt-5">
        <h5 className="font-bold text-white text-xl text-center font-mono">
          Map of event location
        </h5>
        <Map location={event.location_coordinates} name={event.location}/>
        <h5 className="font-mono underline text-center text-white">
          <a
            href={
              "https://www.google.com/maps/dir/?api=1&destination=" +
              event.location_coordinates._lat +
              "," +
              event.location_coordinates._long
            }
          >
            Click here for Directions
          </a>
        </h5>
      </div>
    </div>
  );
};

export default EventDetails;
