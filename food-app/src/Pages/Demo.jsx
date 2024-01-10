import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RestaurantComponent = ({ jwtToken }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('https://staging.fastor.in/v1/m/restaurant?city_id=118', {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });

        // Handle the response (e.g., update state with restaurant data)
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };

    fetchRestaurants();
  }, [jwtToken]);

  return (
    <div>
      <h1>Restaurant List</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>
            {/* Include other details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantComponent;