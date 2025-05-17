import { CDN_URL } from "../utils/contents";
import { TiStar } from "react-icons/ti";
import { RiEBike2Fill } from "react-icons/ri";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines = [],
    avgRating,
    sla,
    locality,
    costForTwo,
  } = resData;

  if (!cloudinaryImageId || typeof cloudinaryImageId !== "string") return null;

  const imageUrl = `${CDN_URL}${cloudinaryImageId}`;

  return (
    <div className="res-card">
      <div className="img-div">
        <img src={imageUrl} alt={name} className="card-image" />
      </div>

      <h3 className="restautant-name">{name}</h3>
      <div className="rate-overall-container">
        <div className="rate-container">
        <span className="rate-circle">
          <TiStar className="rate-icon" />
        </span>
        <span className="rate-count">{avgRating} rating</span>
      </div>
      <p>{costForTwo}</p>
      </div>
      <p className="cuisine-list">{cuisines.join(", ")}</p>
      <div className="location-time">
        <p className="location-text">{locality}</p>
        <p className="delivery-icon">
          •<RiEBike2Fill style={{ color: "darkorange" }} /> {sla?.deliveryTime}{" "}
          minutes
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
