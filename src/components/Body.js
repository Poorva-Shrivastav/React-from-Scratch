import { useEffect, useState } from "react";
import { resArr } from "../utils/mockData";
import RestaurantCard, { withPromoted } from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHook/useOnlineStatus";
import useRestaurantData from "../utils/customHook/useRestaurantData";

export const Body = () => {
  const list = useRestaurantData();
  const [filteredData, setFilteredData] = useState(list);
  const onlineStatus = useOnlineStatus();

  console.log(list);

  //hoc
  const promotedComponent = withPromoted(RestaurantCard);

  useEffect(() => {
    setFilteredData(list);
  }, [list]);

  if (!onlineStatus)
    return (
      <h1>Looks like you are offline. Please check your internet connection</h1>
    );

  if (list?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="m-50">
      <h1 className="font-bold text-3xl p-4 mx-14 my-4">
        Restaurants with online food delivery in Bangalore
      </h1>
      <div>
        <button
          className="p-2 mx-16 bg-gray-100 rounded-lg cursor-pointer"
          onClick={() => {
            let newList = list.filter((item) => item.info.avgRating > 4);
            setFilteredData(newList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-center ">
        {filteredData &&
          filteredData.map((rest) => (
            <Link key={rest.info.id} to={`/restaurants/${rest.info.id}`}>
              <div>
                <RestaurantCard resData={rest} />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
