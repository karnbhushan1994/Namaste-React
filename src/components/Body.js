import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  const [searchText, setSearchText] = useState("");

  // Function to filter top-rated restaurants
  const filterTopRated = () => {
    const filteredRestaurants = resList.filter(
      (restaurant) => restaurant.data.avgRating >= 4
    );
    setRestaurantList(filteredRestaurants);
  };

  // Function to handle search
  const handleSearch = () => {
    const filteredRestaurants = resList.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurantList(filteredRestaurants);
  };

  return (
    <div className="body">
      <h1>Welcome to the Restaurant</h1>
      <p>Explore amazing dishes and enjoy your meals.</p>

      {/* Search Bar */}
      <div className="search">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Filter Button */}
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurant
        </button>
      </div>

      {/* Restaurant List */}
      <div className="res-container">
        {restaurantList.length > 0 ? (
          restaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Body;
