import React, { useState, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Category from "./Category";
import UpcomingEvents from "./UpcomingEvents"
import { collection, query, limit, getDocs, orderBy } from "firebase/firestore";
import db  from "../../firebase";
import HomeLoader from "./HomeLoader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [topEvents, setTopEvents] = useState([]);
  
  useEffect(() => {
    const q = query(collection(db, "events"),orderBy("start_time", "desc"), limit(3));

    const getEvents = async () => {
      const querySnapshot = await getDocs(q);
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      //   setTopEvents(() => ({...topEvents,doc.data()}));
      //   me.push(doc.data());
      // });
      setTopEvents(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log("Top Events -> inside ->", topEvents);
      setLoading(false);
    };

    getEvents();
  }, []);

  return (
    <div className="w-full">
      <div className="background bg-gradient-to-r h-48 from-sky-500 to-indigo-500">
        <div className="flex justify-center mt-15 pt-5">
          <div className="w-2/4 shadow-lg text-white font-medium text-center bg-white rounded:md">
            {/* <h1 className="bg-indigo-600 h-10 text-center items-center">
            Welcome to the event universe
          </h1> */}
            <h1 className="text-sky-600 hover:text-indigo-500 text-3xl italic font-semibold font-mono p-5">
              Let's Make An Event Universe
            </h1>
            <p className="text-gray-500 font medium py-1">
              Shop tickes from anywhere on the globe, don't miss out on live
              concerts, games, theater and more.
            </p>
            <div className="flex justify-center items-center bg-white rounder-md py-10">
              {/* <div>
              {showDate ? (
                <Calendar date={new Date()} />
              ) : (
                ""
                // <h6 className="text-red-400">Date Range </h6>
              )}
            </div> */}

              <div className="Search w-96 rounded-md p-1 border-2 border-slate-300 flex">
                <input
                  className="w-11/12 p-2 border-2 border-none focus:outline-none text-gray-700"
                  type="search"
                  placeholder="Search for artist, events, venues, crossing etc."
                />
                <div
                  className="w-1/12 flex items-center font-bold bg-cyan-500 hover:shadow-lg hover:shadow-gray-500
            focus:border-none
          rounded-md p-2 cursor-pointer "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6  text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Category />

      {/* show top 3 events when loading is done */}
      {!loading ?   <UpcomingEvents topEvents={topEvents}/> : <HomeLoader/>}
     
    </div>
  );
};

export default Home;
