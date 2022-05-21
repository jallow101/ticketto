import React from "react";
import "./css/ferry.css";
import { Link } from "react-router-dom";
import ferry from "../assets/ferry.jpg";

const FerryBanner = () => {
  return (
    <div className="ferry_section">
      <div className="ferry_title">
        <h1>Ferry Corssing Tickets</h1>
      </div>
      <div className="ferry_details">
        <h3>Going for a trek or road trip with your friends, family or co-workers</h3>
        <h3>
          Worry no more of purchasing tickets and  long queues
        </h3>
        <div className="btn">
          <Link to="search">
          <h4>Buy Ferry Ticket</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FerryBanner;
