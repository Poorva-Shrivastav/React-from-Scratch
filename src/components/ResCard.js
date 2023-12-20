import { Fragment } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    id,
    areaName,
    aggregatedDiscountInfoV3,
  } = resData?.info;
  return (
    <div className="my-4 mx-0 p-4  cursor-pointer transform w-[270px]  transition duration-500 hover:scale-90">
      <div className="relative">
        <img
          className="rounded-xl w-96 h-40 object-cover shadow-md"
          src={`${CDN_URL}${resData.info.cloudinaryImageId}`}
          alt="img-logo"
        />
        <h1 className="absolute text-lg top-32 pl-2 text-white font-bold flex justify-left bg-gray-800 opacity-80 w-full rounded-lg hover:text-md">
          {resData?.info?.aggregatedDiscountInfoV3 &&
            resData?.info?.aggregatedDiscountInfoV3?.header +
              " " +
              resData?.info?.aggregatedDiscountInfoV3?.subHeader}
        </h1>
      </div>
      <h4 className="font-bold py-2 text-md overflow-hidden text-ellipsis whitespace-nowrap">
        {name}
      </h4>
      <h5>
        ⭐️ {avgRating} · {sla.slaString}
      </h5>
      <p className="overflow-hidden text-ellipsis whitespace-nowrap">
        {cuisines.join(", ")}
      </p>
      <p>{areaName}</p>
    </div>
  );
};

//hoc

export const withPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <Fragment className="bg-pink-200">
        <RestaurantCard {...props} />
      </Fragment>
    );
  };
};

export default RestaurantCard;
