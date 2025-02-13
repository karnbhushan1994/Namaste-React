import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import "./menu.css";
import useRestaurantMenu from "../utils/useRestaurantMenu"; // Import custom hook
const RestaurantMenu = () => {

  const { resId } = useParams(); // Get Restaurant ID from URL

    // following thing moved from here and created in inside utlis 
  // const [resinfo, setResinfo] = useState(null);
  // console.log("Restaurant ID from URL:", resId);

  // useEffect(() => {
  //   if (resId) {
  //     fetchMenu(resId);
  //   }
  // }, [resId]); // Run useEffect when resId changes

  // const fetchMenu = async (id) => {
  //   try {
  //     const response = await fetch(
  //       `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.6244807&restaurantId=${id}`
  //     );
  //     const data = await response.json();
  //     setResinfo(data.data);
  //   } catch (error) {
  //     console.error("Error fetching menu:", error);
  //   }
  // };

  const resinfo = useRestaurantMenu(resId); // Use custom hook


  const { name, cuisines, costForTwoMessage } =
    resinfo?.cards?.[2]?.card?.card?.info || {};
  const itemCard =
    resinfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card;

  return resinfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu-container">
      <div className="restaurant-info">
        <h1>{name || "Restaurant Name Not Available"}</h1>
        <p className="cuisines">
          Cuisines: {cuisines ? cuisines.join(", ") : "N/A"}
        </p>
        <p className="cost">Cost for Two: {costForTwoMessage || "N/A"}</p>
      </div>

      <h2 className="menu-heading">Menu</h2>
      <ul className="menu-list">
        {itemCard?.itemCards?.map((item) => (
          <li key={item.card.info.name} className="menu-item">
            <h3>{item.card.info.name}</h3>
            <p className="description">
              {item.card.info.description || "No description available"}
            </p>
            <p className="price">Price: ₹{(item.card.info.price || 0) / 100}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
