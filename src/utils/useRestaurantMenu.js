import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resinfo, setResinfo] = useState(null);

  useEffect(() => {
    if (resId) {
      fetchMenu(resId);
    }
  }, [resId]);

  const fetchMenu = async (id) => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.6244807&restaurantId=${id}`
      );
      const data = await response.json();
      setResinfo(data.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return resinfo;
};

export default useRestaurantMenu;
