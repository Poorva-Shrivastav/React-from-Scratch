import { useEffect, useState } from "react";
import { ALL_REST_URL } from "../constants";

const useRestaurantData = () => {
  const [list, setList] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(ALL_REST_URL);
    const json = await res.json();
    // const newJson = JSON.parse(json?.contents);
    // setList(
    //   newJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    // ?.restaurants
    // );

    setList(json?.data?.cards);
  };
  if (list && list.length > 0) return list;
};

export default useRestaurantData;
