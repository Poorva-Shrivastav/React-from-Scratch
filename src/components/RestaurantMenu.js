import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_IMG_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/customHook/useRestaurantMenu";
import RestaurantMenuItem from "./RestaurantMenuItem";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
  const { restId } = useParams();
  const restInfo = useRestaurantMenu(restId);

  if (restInfo === null) return <Shimmer />;

  const cardCaterogyTitle =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="res-menu-container">
      <div className="res-menu-outer-div">
        <div>
          <h4>{restInfo?.cards[0]?.card?.card?.info?.name}</h4>
          <p>{restInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</p>
          <p>
            {restInfo?.cards[0]?.card?.card?.info?.areaName},{" "}
            <span>
              {restInfo?.cards[0]?.card?.card?.info?.sla?.lastMileTravelString}
            </span>
          </p>
          <p>{restInfo?.cards[0]?.card?.card?.info?.feeDetails?.message}</p>
        </div>
        <div>
          <h4>⭐️{restInfo?.cards[0]?.card?.card?.info?.avgRating}</h4>
          <p>{restInfo?.cards[0]?.card?.card?.info?.totalRatingsString}</p>
        </div>
      </div>
      <div>
        {<RestaurantMenuCategory cardCaterogyTitle={cardCaterogyTitle} />}
      </div>
    </div>
  );
};

export default RestaurantMenu;
