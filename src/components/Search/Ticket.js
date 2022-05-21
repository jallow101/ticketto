import React from "react";
import ".././css/ticket.css";
import { BsFilterLeft } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import image from "../../assets/concert.jpg";
import flyer from "../../assets/flyer.jpg";
import flyer1 from "../../assets/flyer1.jpg";

const Ticket = () => {
  return (
    <div className="search_side">
      <h5>Right side</h5>
      <hr />
      <div className="search_container">
        <div className="search_ticket">
          <input type="text" placeholder="Search Ticket" />
          <button className="search_icon">
            <BiSearchAlt size="25px" color="green" />
          </button>
        </div>

        <div className="search_filter">
          <button className="filter_icon">
            <BsFilterLeft size="35px" color="green" />
          </button>
        </div>

        {/* closing of the top search conatiner */}
      </div>

      <div className="ticket_list">
        <div className="ticket">
          <img className="ticket_image" src={flyer} alt="ticket" />
          <div className="ticket_content">
            <h1 className="ticket_title">Trade Fair</h1>
            <h3 className="ticket_price_label">Price From</h3>
            <h3 className="ticket_price">D250</h3>
            <h5 className="ticket_venue">Bakau Independence Stadium</h5>
          </div>
          <h5 className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
            voluptatem nobis beatae animi, delectus illo repellat! Suscipit
            assumenda optio quis a animi vero. Blanditiis pariatur,
            exercitationem consectetur dolore doloribus quod.
          </h5>
          <button className="ticket_button">Buy Ticket</button>
        </div>

        <div className="ticket">
          <h1 className="ticket_title">Football</h1>
          <div className="ticket_content">
            <img className="ticket_image" src={image} alt="ticket" />
            <h3 className="ticket_price_label">Price From</h3>
            <h3 className="ticket_price">D250</h3>
            <h5 className="ticket_venue">Bakau Independence Stadium</h5>
          </div>
          <button className="ticket_button text-gray-700 bg-red-400">Buy Ticket</button>
        </div>

        <div className="ticket">
          <h1 className="ticket_title">Trade Fair</h1>
          <div className="ticket_content">
            <img className="ticket_image" src={flyer1} alt="ticket" />
            <h3 className="ticket_price_label">Price From</h3>
            <h3 className="ticket_price">D250</h3>
            <h5 className="ticket_venue">Bakau Independence Stadium</h5>
          </div>
          <button className="ticket_button">Buy Ticket</button>
        </div>

        <div className="ticket">
          <h1 className="ticket_title">Football</h1>
          <div className="ticket_content">
            <img className="ticket_image" src={image} alt="ticket" />
            <h3 className="ticket_price_label">Price From</h3>
            <h3 className="ticket_price">D250</h3>
            <h5 className="ticket_venue">Bakau Independence Stadium</h5>
          </div>
          <button className="ticket_button">Buy Ticket</button>
        </div>

        <div className="ticket">
          <h1 className="ticket_title">Trade Fair</h1>
          <img className="ticket_image" src={flyer} alt="ticket" />
          <h5 className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
            voluptatem nobis beatae animi, delectus illo repellat! Suscipit
            assumenda optio quis a animi vero. Blanditiis pariatur,
            exercitationem consectetur dolore doloribus quod.
          </h5>
          <button className="ticket_button">Buy Ticket</button>
        </div>

        <div className="ticket">
          <h1 className="ticket_title">Trade Fair</h1>
          <img className="ticket_image" src={flyer1} alt="ticket" />
          <button className="ticket_button">Buy Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
