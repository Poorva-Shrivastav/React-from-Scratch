import { useState } from "react";
import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenuCategory = ({ item }) => {
  const [showItems, setShowItems] = useState(true);

  const handleClick = () => {
    setShowItems(!showItems);
    // setCatergoryIndex();
  };

  return (
    <div>
      <div className=" bg-gray-50 shadow-lg p-4 mb-5 border-b-gray-300 cursor-pointer">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {item?.card?.card?.title}
            {item?.card?.card?.itemCards?.length > 0 ? (
              <span>({item?.card?.card?.itemCards?.length})</span>
            ) : null}
          </span>
          <span>{showItems ? "⬆️" : "⬇"}</span>
        </div>
        {showItems && (
          <RestaurantMenuItem items={item?.card?.card?.itemCards} />
        )}
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;
