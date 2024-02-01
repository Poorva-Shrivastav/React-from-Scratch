import { useEffect, useState } from "react";
import { resArr } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHook/useOnlineStatus";
import useRestaurantData from "../utils/customHook/useRestaurantData";
import InfiniteScroll from "react-infinite-scroll-component";
import { ALL_REST_URL } from "../utils/constants";
import RestaurantCard, { withPromoted } from "./RestaurantCard";
import SearchBar from "./SearchBar";

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

  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);

  const fetchMoreData = async () => {
    const res = await fetch(ALL_REST_URL);
    const json = await res.json();
    setFilteredData((prevItems) => [
      ...prevItems,
      ...list[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    ]);

    json?.data?.cards.length > 0 ? setHasMore(true) : setHasMore(false);
    setIndex((prevIndex) => prevIndex + 1);
  };

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
                  <div>{<RestaurantCard resData={rest} />}</div>
                </Link>
              ))
            ) : (
              <Shimmer />
            )}
          </div>
        </div>
      </div>
      <div className="mx-10">
        <h1 className="font-bold text-3xl p-4 my-4">
          Restaurants with online food delivery in Bangalore
        </h1>
        <div className="flex justify-start mx-4">
          <div>
            <SearchBar list={filteredData} setFilteredData={setFilteredData} />
          </div>
          <div>
            <button
              className="p-2 mx-12 bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => {
                let newList =
                  list[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter(
                    (item) => item.info.avgRating > 4.5
                  );

                setFilteredData(newList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={filteredData.length}
        next={fetchMoreData}
        hasMore={hasMore}
      >
        <div className="flex flex-wrap justify-center ">
          {filteredData ? (
            filteredData.map((rest) => (
              <Link
                key={rest.info.id + Date.now()}
                to={`/restaurants/${rest.info.id}`}
              >
                <div data-testid="resCard">
                  <RestaurantCard resData={rest} />
                </div>
              </Link>
            ))
          ) : (
            <Shimmer />
          )}
        </div>
      </InfiniteScroll>

      {/* <div className="flex flex-wrap justify-center ">
        {filteredData.map((rest) => (
          <Link key={rest.info.id} to={`/restaurants/${rest.info.id}`}>
            <div data-testid="resCard">
              <RestaurantCard resData={rest} />
            </div>
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default Body;
