import { useEffect, useState } from "react";
import { resArr } from "../utils/mockData";
import RestaurantCard, { withPromoted } from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHook/useOnlineStatus";
import useRestaurantData from "../utils/customHook/useRestaurantData";

export const Body = () => {
  const list = useRestaurantData();

  const [filteredData, setFilteredData] = useState([]);
  const [carouselData, setCarouselData] = useState([]);

  const onlineStatus = useOnlineStatus();

  //hoc
  const promotedComponent = withPromoted(RestaurantCard);

  useEffect(() => {
    list && list.length > 0
      ? setFilteredData(
          list[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )
      : setFilteredData([]);

    list && list.length > 0
      ? setCarouselData(
          list[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )
      : setCarouselData([]);
  }, [list]);

  if (!onlineStatus)
    return (
      <h1>Looks like you are offline. Please check your internet connection</h1>
    );

  if (list?.length === 0) {
    return <Shimmer />;
  }

  console.log(list);

  return (
    <div className="m-36">
      <div>
        <h1 className="font-bold text-3xl p-4 mx-8 my-4">
          Top restaurant chains in Bangalore
        </h1>
      </div>
      <div className="mx-14 ">
        <div className="overflow-x-scroll">
          <div className="flex">
            {carouselData ? (
              carouselData.map((rest) => (
                <Link key={rest.info.id} to={`/restaurants/${rest.info.id}`}>
                  <div>
                    <RestaurantCard resData={rest} />
                  </div>
                </Link>
              ))
            ) : (
              <Shimmer />
            )}
          </div>
        </div>
      </div>
      <h1 className="font-bold text-3xl p-4 mx-8 my-4">
        Restaurants with online food delivery in Bangalore
      </h1>
      <div>
        <button
          className="p-2 mx-12 bg-gray-100 rounded-lg cursor-pointer"
          onClick={() => {
            let newList = list.filter((item) => item.info.avgRating > 4);
            setFilteredData(newList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-center ">
        {filteredData ? (
          filteredData.map((rest) => (
            <Link key={rest.info.id} to={`/restaurants/${rest.info.id}`}>
              <div>
                <RestaurantCard resData={rest} />
              </div>
            </Link>
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;
