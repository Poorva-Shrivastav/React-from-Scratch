import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, id, areaName } =
    resData?.info;
  return (
    <div className="res-card">
      <div className="res-img-container">
        <img
          className="res-logo"
          src={`${CDN_URL}${resData.info.cloudinaryImageId}`}
          alt="img-logo"
        />
      </div>
      <div className="res-desc-container">
        <h4>{name}</h4>
        <h5>
          ⭐️ {avgRating} · {sla.slaString}
        </h5>
        <p>{cuisines.join(", ")}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
