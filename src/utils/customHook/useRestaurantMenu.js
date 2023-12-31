import { useEffect, useState } from "react";
import { MENU_API_URL } from "../constants";

const useRestaurantMenu = (restId) => {
  const [restInfo, setRestInfo] = useState();
  useEffect(() => {
    fetchData();
  }, [restId]);

  const fetchData = async () => {
    const res = await fetch(`${MENU_API_URL}${restId}`);
    const json = await res.json();
    // const newJson = JSON.parse(json?.contents);
    // setRestInfo(newJson?.data);

    setRestInfo(json?.data);
  };

  return restInfo;
};

export default useRestaurantMenu;
