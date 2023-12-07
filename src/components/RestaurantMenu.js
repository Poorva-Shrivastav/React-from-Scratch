import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_IMG_URL } from "../utils/constants";
import { useRestaurantMenu } from "../utils/customHook/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restId } = useParams();
  const { restInfo } = useRestaurantMenu;

  console.log(restInfo);
  if (restInfo === null) return <Shimmer />;

  // const { name, cuisines, avgRating } = restInfo?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

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
        <h4 className="rest-menu-category-title">
          {
            restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
              ?.card?.card?.title
          }
        </h4>

        <div>
          {restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.itemCards &&
            restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
              (item) => (
                <>
                  <div
                    key={item?.card?.info?.id}
                    className="rest-food-details-inner"
                  >
                    <div className="rest-food-details">
                      <div className="rest-food-items">
                        <h5>{item?.card?.info?.name}</h5>
                        <p>₹{item?.card?.info?.price / 100}</p>
                        <p>{item?.card?.info?.description}</p>
                      </div>
                      <div className="rest-food-item-img">
                        <img
                          src={MENU_IMG_URL + item?.card?.info?.imageId}
                          alt="food-img"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
