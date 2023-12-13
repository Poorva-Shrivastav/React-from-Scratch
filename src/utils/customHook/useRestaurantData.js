import { useEffect, useState } from "react";
import { ALL_REST_URL } from "../constants";

const useRestaurantData = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(ALL_REST_URL);
    const json = await res.json();
    setList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return list;
};

export default useRestaurantData;
