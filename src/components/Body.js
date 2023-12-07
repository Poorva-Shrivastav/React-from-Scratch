import { useEffect, useState } from "react";
import { resArr } from "../utils/mockData";
import RestaurantCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHook/useOnlineStatus";

export const Body = () => {
  const [list, setList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining
    setList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!onlineStatus)
    return (
      <h1>Looks like you are offline. Please check your internet connection</h1>
    );

  if (list?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <div className="search-container">
          <input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button
            onClick={() => {
              const searchedData = list.filter((rest) =>
                rest.info.name.toLowerCase().includes(searchVal.toLowerCase())
              );
              setFilteredData(searchedData);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            let newList = list.filter((item) => item.info.avgRating > 4);
            setFilteredData(newList);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="rest-container">
        {filteredData.map((rest) => (
          <Link key={rest.info.id} to={`/restaurants/${rest.info.id}`}>
            <RestaurantCard resData={rest} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
