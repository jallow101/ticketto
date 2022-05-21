import React from "react";
import suv from "./suv.svg";
import sedan from "./sedan.svg";
import truck from "./truck.svg";

const Bridge = ({ movie }) => {
  return (
    <article className="flex items-start space-x-6 p-6">
      <img
        src={movie.image}
        width={300}
        height={40}
        alt=""
        className="flex-none h-40 w-300 rounded-md bg-gray-100"
      />
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-blue-300 truncate pr-20 ">
          {movie.title}
        </h2>

        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium border">
          <div className="  absolute top-0 right-0 flex flex-col items-start space-x-1">
            <h2 className="font-bold text-red-400 text-center underline truncate pr-20">
              Ticket Types
            </h2>
            <dt className="flex items-center">
              <span className="sr-only text-primary-400">Star rating</span>
              {/* <dd className="px-2 ">Sedan </dd> */}
              <img src={sedan} alt="" width={40} />
              <dd className="px-2 text-indigo-400">D {movie.price.sedan}</dd>
            </dt>

            <dt className="flex items-centr text-sky-500">
              <span className="sr-only text-primary-400">Star rating</span>
              {/* <dd className="px-2 ">Suv </dd> */}
              <img src={suv} alt="" width={40} />
              <dd className="px-2 text-gray-400">D {movie.price.suv}</dd>
            </dt>

            <dt className="flex items-center text-orange-500">
              {/* <dd className="px-2 ">Truck </dd> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
              <dd className="px-2">D {movie.price.truck}</dd>
            </dt>
          </div>
          <div>
            <dt className="sr-only">Rating</dt>
            <dd className="px-1.5 ring-1 ring-gray-200 rounded bg-orange-200 text-white">
              {movie.location}
            </dd>
          </div>
          <div className="ml-2">
            <dt className="sr-only">Year</dt>
            <dd>{movie.year}</dd>
          </div>
          <div>
            <dt className="sr-only">Genre</dt>
            <dd className="flex items-center text-white">
              <svg
                width="2"
                height="2"
                fill="currentColor"
                className="mx-2 text-gray-300"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div className="bg-violet-600 rounded px-1"> {movie.genre}</div>
            </dd>
          </div>
          <div>
            <dt className="sr-only">Runtime</dt>
            <dd className="flex items-center">
              <svg
                width="2"
                height="2"
                fill="currentColor"
                className="mx-2 text-gray-300"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              {movie.runtime}
            </dd>
          </div>
          <div className="flex-none w-full mt-2 font-normal">
            <dt className="sr-only">Cast</dt>
            <dd className="text-gray-400">{movie.cast}</dd>
            <dd>{movie.year} Get Direction</dd>
          </div>
          <div className="w-full">
            <button className="px-6 py-2 mt-8 w-full text-sm font-bold rounded shadow bg-violet-100 hover:bg-violet-300 hover:text-white text-violet-500">
              Buy Ticket
            </button>
          </div>
        </dl>
      </div>
    </article>
  );
};

export default Bridge;
