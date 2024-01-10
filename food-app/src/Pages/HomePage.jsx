import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from '../Components/Home/Slider';

function HomePage() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch food data from Open Food Facts API
    axios.get('https://world.openfoodfacts.org/api/v0/product/737628064502.json')
      .then(response => {
        // Assuming the response.data is an array of food objects
        console.log(response);
        // Here, you may want to extract relevant food data from the Open Food Facts API response
        setFoods(response.data.product);
      })
      .catch(error => {
        console.error('Error fetching food data:', error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once when the component mounts

  return (
    <div>
      <Slider />
      <div>
        <h2>Food Products</h2>
        {foods && (
          <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h3>{foods.product_name}</h3>
            <p>Ingredients: {foods.ingredients_text}</p>
            <p>Brands: {foods.brands}</p>
            {/* Add more details as needed */}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;