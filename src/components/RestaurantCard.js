import  {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const { cloudinaryImageId,
      name,
      cuisines,
      area,
      lastMileTravelString,
      costForTwoString,
      avgRating } = props
    return (
      <div className="res-card">
       <img
          className="res-logo"
          src={CDN_URL+cloudinaryImageId}
          alt={`${name} logo`}
        />
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
  
  export default RestaurantCard