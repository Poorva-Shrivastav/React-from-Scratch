import React from "react";
import { MENU_IMG_URL } from "../utils/constants";
import veg from "../assets/images/veg.png";
import nonveg from "../assets/images/non-veg.png";

const RestaurantMenuItem = ({ items }) => {
  return (
    <div key={items?.card?.info?.id}>
      <div className="w-full flex py-4 justify-between border-b border-x-gray-50">
        {" "}
        <div className="rest-food-items">
          <div>
            {items?.card?.info?.isVeg === 1 ? (
              <img src={veg} alt="🟢" className="w-4" />
            ) : (
              <img src={nonveg} alt="🔺" className="w-6" />
            )}
            {items?.card?.info?.isBestseller ? (
              <span className="bestseller">⭐️ Bestseller</span>
            ) : (
              ""
            )}
          </div>

          <h5 className="text-md font-semibold">{items?.card?.info?.name}</h5>
          <p className="text-sm font-light">
            ₹{items?.card?.info?.price / 100}
          </p>
          <p className="py-4 text-gray-400 font-light text-sm">
            {items?.card?.info?.description}
          </p>
        </div>
        <div className="">
          <img
            className="rounded-lg w-28"
            src={MENU_IMG_URL + items?.card?.info?.imageId}
            alt="food-img"
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuItem;
