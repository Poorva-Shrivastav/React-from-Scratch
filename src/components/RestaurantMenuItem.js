import React from "react";
import { MENU_IMG_URL } from "../utils/constants";
import veg from "../assets/images/veg.png";
import nonveg from "../assets/images/non-veg.png";

const RestaurantMenuItem = ({ items }) => {
  return (
    <div key={items?.card?.info?.id} className="rest-food-details-inner">
      <div className="rest-food-details">
        {" "}
        <div className="rest-food-items">
          <div className="veg-img-container">
            {items?.card?.info?.isVeg === 1 ? (
              <img src={veg} alt="🟢" className="veg-img" />
            ) : (
              <img src={nonveg} alt="🔺" className="non-veg-img" />
            )}
            {items?.card?.info?.isBestseller ? (
              <span className="bestseller">⭐️ Bestseller</span>
            ) : (
              ""
            )}
          </div>
          <h5>{items?.card?.info?.name}</h5>
          <p>₹{items?.card?.info?.price / 100}</p>
          <p>{items?.card?.info?.description}</p>
        </div>
        <div className="rest-food-item-img">
          <img src={MENU_IMG_URL + items?.card?.info?.imageId} alt="food-img" />
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuItem;
