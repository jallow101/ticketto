import React from "react";
import "./css/category.css";

const Category = () => {
  return (
    <div>
      <div className="category_title">
        <h1>Ticket Type</h1>
      </div>

      <div className="categories">
        <div className="category_item">
          <h4>Concert</h4>
        </div>
        <div className="category_item">
          <h4>Trade Fair</h4>
        </div>
        <div className="category_item">
          <h4>Ferry</h4>
        </div>

        <div className="category_item">
          <h4>Fuel Coupon</h4>
        </div>

        <div className="category_item">
          <h4>Wedding</h4>
        </div>

        <div className="category_item">
          <h4>Gala Dinner</h4>
        </div>
      </div>
    </div>
  );
};

export default Category;
