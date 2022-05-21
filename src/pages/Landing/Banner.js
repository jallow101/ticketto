import React from "react";
import Category from "../../components/Categorys";
import "./css/banner.css";

const Banner = () => {
  return (
    <>
    <div className="banner">
      <div className="banner_title">
        <h2>Organize Your Events</h2>
      </div>
      <div className="banner_title">
        <h4>Attend Your Dream Events & Meet Your Idols</h4>
      </div>
      <div className="search">
        <input type="text" placeholder="Search Event, Artist, Venue etc.."/>
      </div>
    </div>
    {/* <Category/> */}
    </>
  );
};

export default Banner;
