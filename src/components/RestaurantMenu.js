import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/customHook/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { ALERT_IMG_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { restId } = useParams();
  const restInfo = useRestaurantMenu(restId);

  if (restInfo === null) return <Shimmer />;

  const cardCaterogyData =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (catergory) =>
        catergory?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="p-4 mx-auto w-7/12 my-32 ">
      <div className="flex justify-between">
        <div>
          <h3 className="py-2 font-bold text-lg">
            {restInfo?.cards[0]?.card?.card?.info?.name}
          </h3>
          <p className="text-gray-900 font-thin text-xs">
            {restInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
          </p>
          <p className="text-gray-900 font-thin text-xs">
            {restInfo?.cards[0]?.card?.card?.info?.areaName},{" "}
            <span>
              {restInfo?.cards[0]?.card?.card?.info?.sla?.lastMileTravelString}
            </span>
          </p>
        </div>
        <div className="border border-solid flex flex-col items-start justify-center border-gray-200 rounded-lg shadow-md">
          <h4 className="px-2 text-green-600 font-bold">
            ⭐️ {restInfo?.cards[0]?.card?.card?.info?.avgRating}
          </h4>
          <p className="text-gray-900 font-thin text-xs p-2">
            {restInfo?.cards[0]?.card?.card?.info?.totalRatingsString}
          </p>
        </div>
      </div>
      <p className="py-4 text-gray-950 font-thin text-sm">
        <img src={ALERT_IMG_URL} alt="" className="inline-block pr-2" />
        {restInfo?.cards[0]?.card?.card?.info?.feeDetails?.message}
      </p>
      <div className="py-4 border-y border-x-gray-100 border-dashed bg-gray-100">
        {cardCaterogyData &&
          cardCaterogyData.map((item, index) => (
            <RestaurantMenuCategory
              key={item?.card?.card?.title}
              item={item}
              // showItems={index === catergoryIndex ? true : false}
              // setCatergoryIndex={() => setCatergoryIndex(index)}
            />
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
