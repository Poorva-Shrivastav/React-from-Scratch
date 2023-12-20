import React, { useContext } from "react";
import { MENU_IMG_URL } from "../utils/constants";
import veg from "../assets/images/veg.png";
import nonveg from "../assets/images/non-veg.png";
import UserContext from "../utils/context/userContext";
import AddButton from "./AddButton";

const RestaurantMenuItem = ({ items }) => {
  return (
    <div key={items}>
      {items.map((item) => (
        <div key={item?.card?.info?.id}>
          <div className="w-full flex py-4 justify-between border-b border-x-gray-50">
            <div className="w-3/4 py-4 ">
              <div className="flex items-center ">
                {item?.card?.info?.isVeg === 1 ? (
                  <img src={veg} alt="🟢" className="w-5 h-5 inline-block" />
                ) : (
                  <img src={nonveg} alt="🔺" className="w-7 h-7" />
                )}
                {item?.card?.info?.isBestseller && (
                  <span className="pl-1 text-sm text-[#ee9c00] font-semibold">
                    ⭐️ Bestseller
                  </span>
                )}
              </div>
              <h5 className="text-md font-semibold">
                {item?.card?.info?.name}
              </h5>
              <p className="text-sm font-light">
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.variantsV2?.variantGroups[0]
                      ?.variations[0]?.price}
              </p>
              <p className="py-4 text-gray-400 font-light text-sm">
                {item?.card?.info?.description}
              </p>
            </div>
            <div>
              <div className="relative py-8">
                {item?.card?.info?.imageId ? (
                  <img
                    className="rounded-lg w-32 h-24 object-cover"
                    src={MENU_IMG_URL + item?.card?.info?.imageId}
                    alt="food-img"
                  />
                ) : (
                  <div className="rounded-lg w-32 object-cover"></div>
                )}
                <AddButton item={item} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuItem;
