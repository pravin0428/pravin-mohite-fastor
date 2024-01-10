import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const SinglePage = () => {
  const data = JSON.parse(localStorage.getItem("fastor-single"));
  console.log(data);

  return (
    <Box padding={"20px"} position="relative">
     
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="1"
      ></Box>

      <Image width="90%" src={data.images[0].url} alt="Image" />

      {/* Restaurant Name */}
      <Text fontSize="2xl" as="b">
        {data.restaurant_name}
      </Text>
      <Text fontSize="20px" color="grey">
        {data?.location?.location_address}
      </Text>
      <Text fontSize="20px" color="grey">
        {data.rating.restaurant_avg_rating} Rating
      </Text>
    </Box>
  );
};

export default SinglePage;
