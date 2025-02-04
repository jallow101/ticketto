import React from "react";
import { Link } from "react-router-dom";

const Listitem = ({ movie }) => {
  return (
    <article className="flex items-start space-x-6 p-6">
      <img
        src={movie.image}
        width={300}
        height={40}
        alt=""
        className="flex-none rounded-md h-40 w-300 bg-gray-100"
      />
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-gray-900 truncate pr-20">
          {movie.title}
        </h2>
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div className="absolute top-0 right-0 flex items-center space-x-1">
            <dt className="text-sky-500">
              <span className="sr-only text-primary-400">Star rating</span>
              <svg width="16" height="20" fill="currentColor">
                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
              </svg>
            </dt>
            <dd>{movie.date}</dd>
          </div>
          <div>
            <dt className="sr-only">Rating</dt>
            <dd className="px-1.5 ring-1 ring-gray-200 rounded">{movie.age}</dd>
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
          
          
            <div className="flex-none w-full mt-1 font-normal">
              <dt className="sr-only">Cast</dt>
              <dd className="text-gray-400">Starts {movie.start}</dd>
            </div>

            {/* <div className="flex-none w-full mt-1 font-bold">
              <dt className="sr-only">Cast</dt>
              <dd className="text-gray-400">To {movie.end}</dd>
            </div> */}
          

          <div className="flex-none w-full mt-1 font-medium">
            <dt className="sr-only">Cast</dt>
            <dd className="text-gray-400">{movie.cast}</dd>
          </div>

          <div className="w-full">
            <Link to="/buy">
              <button className="px-1 py-2 mt-2 w-full text-sm font-bold rounded shadow bg-violet-100 hover:bg-violet-300 hover:text-white text-violet-500">
                Buy Ticket
              </button>
            </Link>
          </div>
        </dl>
      </div>
    </article>
  );
};

export default Listitem;
