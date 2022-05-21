import React, { useState } from "react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import Ticket from "./Ticket";
import ".././css/filter.css";

const Filter = () => {
  const [min, setMin] = useState(100);
  const [max, setMax] = useState(500);

  const updateMin = (e) => {
    setMin(e.target.value);
  };

  const updateMax = (e) => {
    setMax(e.target.value);
  };

  const show = (value) => {
    console.log("here are the values", value);

    setMin(value[0]);
    setMax(value[1]);
  };

  return (
    <div className="sides">
      {/* <div className="filter_side">
        <div className="filter_title">
          <h4>Filter By</h4>
        </div>

        <div>
          <h4>Category</h4>
        </div>
        <div className="center">
          <div className="category_types">
            <div className="types">
              <input type="checkbox" />
              <h5>Ferry Crossing</h5>
            </div>
            <div className="types">
              <input type="checkbox" />
              <h5>Event</h5>
            </div>
            <div className="types">
              <input type="checkbox" />
              <h5>Bridge Crossing</h5>
            </div>
          </div>
          <hr />
        </div>

        <div>
          <label>Min: </label>
          <input type="number" value={min} onChange={updateMin} />
          <br />

          <Range
            min={0}
            max={1000}
            defaultValue={[min, max]}
            onAfterChange={show}
          />

          <label>Max: </label>
          <input type="number" value={max} onChange={updateMax} />
          <br />
          <br />
        </div>
      </div> */}
      <Ticket />
    </div>
  );
};

export default Filter;
