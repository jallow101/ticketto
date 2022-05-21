import React from "react";
import "./css/bridge.css";
import bridge from "../assets/bridge.jpg";
import { Link } from "react-router-dom";

const BridgeBanner = () => {
  return (
    <div className="bridge_section">
      <div className="bridge_title">
        <h1>BRIDGE TICKETS</h1>
      </div>
      <div className="bridge_details">
        <h3>Crossing bridges at the speed of light</h3>
        <h3>Purchase online and avoid long queues or delays</h3>
        <div className="btn_bridge">
          <Link to="search">
          <h4>Buy Bridge Ticket</h4>
          </Link>
        </div>
      </div>
      <div>
        <ul>
          <li>Farafenni - Soma </li>
          <li>Basse - Fatoto </li>
        </ul>
      </div>
    </div>
  );
};

export default BridgeBanner;
