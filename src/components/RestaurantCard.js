import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, area, lastMileTravelString, costForTwoString, avgRating }) => {
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt={`${name} logo`} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <h4>
        {avgRating} <span>⭐</span>
      </h4>
      <h4>{lastMileTravelString}</h4>
      <h4>{costForTwoString}</h4>
    </div>
  );
};

// Higher Order Component (HOC)
// This HOC wraps RestaurantCard and adds a "Promoted" label
export const withPromotedLabel = (RestaurantCard) => {
  return ({ isPromoted, ...props }) => {
    return (
      <div className="promoted-card">
        <label className="promoted-label">Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
