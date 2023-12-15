import { useEffect, useState } from "react";
import { MENU_API_URL } from "../constants";

const useRestaurantMenu = (restId) => {
  const [restInfo, setRestInfo] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    {
      try {
        const res = await fetch(`${MENU_API_URL}${restId}`);
        const json = await res.json();
        setRestInfo(json.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return restInfo;
};

export default useRestaurantMenu;
