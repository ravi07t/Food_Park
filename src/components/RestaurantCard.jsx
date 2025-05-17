import { CDN_URL } from "../utils/contents";

const RestaurantCard = ({ resData }) => {

  const {
    cloudinaryImageId,
    name,
    cuisines = [],
    avgRating,
    sla
  } = resData;

  if (!cloudinaryImageId || typeof cloudinaryImageId !== "string") return null;

  const imageUrl = `${CDN_URL}${cloudinaryImageId}`;

  return (
    <div className="res-card">
      <img src={imageUrl} alt={name} className="card-image" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} rating</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
