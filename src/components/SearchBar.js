import React, { useState } from "react";
import useRestaurantData from "../utils/customHook/useRestaurantData";

const SearchBar = () => {
  const list = useRestaurantData();
  const [searchVal, setSearchVal] = useState("");
  const [filteredData, setFilteredData] = useState(list);

  return (
    <div className="">
      <input
        className="border border-solid border-gray-300 rounded-md "
        type="text"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <button
        className="px-4 py-2 m-2 rounded-lg cursor-pointer hover:text-orange"
        onClick={() => {
          const searchedData =
            list &&
            list.filter((rest) =>
              rest.info.name.toLowerCase().includes(searchVal.toLowerCase())
            );
          setFilteredData(searchedData);
        }}
      >
        🔍 Search
      </button>
    </div>
  );
};

export default SearchBar;
