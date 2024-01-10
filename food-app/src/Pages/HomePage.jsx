import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CardCompToDis from "../Components/Home/CardCompToDis";
import Slider from "../Components/Home/Slider";

const HomePage = () => {
  const nav = useNavigate();
  const token = localStorage.getItem("FastorToken");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await axios.get(
            "https://staging.fastor.in/v1/m/restaurant?city_id=118&&",
            config
          );
          setData(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  return (
    <>
      <Slider />

      <Text size="12px" fontWeight="bold" textAlign="start" marginLeft="5px">
        Popular Ones
      </Text>

      {loading ? (
        <Box padding="20px" textAlign="center">
          Loading...
        </Box>
      ) : (
        <Box padding="20px">
          {data?.map((item) => (
            <div key={item.restaurant_id}>
              <CardCompToDis {...item} />
            </div>
          ))}
        </Box>
      )}
    </>
  );
};

export default HomePage;
