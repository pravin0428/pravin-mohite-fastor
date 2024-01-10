// // import React from 'react'
// // import { Card,   CardBody, CardFooter, Image , Stack , Heading , Text , Button } from '@chakra-ui/react'
// // function CardComp() {
// //   return (
// //     <>
// //      <Card
// //   direction={{ base: 'column', sm: 'row' }}
// //   overflow='hidden'
// //   variant='outline'
// // >
// //   <Image
// //     objectFit='cover'
// //     maxW={{ base: '100%', sm: '200px' }}
// //     src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
// //     alt='Caffe Latte'
// //   />

// //   <Stack>
// //     <CardBody>
// //       <Heading size='md'>The perfect latte</Heading>

// //       <Text py='2'>
// //         Caffè latte is a coffee beverage of Italian origin made with espresso
// //         and steamed milk.
// //       </Text>
// //     </CardBody>

// //     <CardFooter>
// //       <Button variant='solid' colorScheme='blue'>
// //         Buy Latte
// //       </Button>
// //     </CardFooter>
// //   </Stack>
// // </Card>
// //     </>
// //   )
// // }

// // export default CardComp


// import React from "react";
// import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
// import { useNavigate } from "react-router-dom";

// const CardCompToDis = (props) => {

//   console.log(props , "debo")
//   const nav = useNavigate();

//   // console.log(props)
//   const handleClick = () => {
//     localStorage.setItem("fastor-single", JSON.stringify(props))
//     nav('/single')

//   }
//   return (
//     <Card
//       direction={{ base: "column", sm: "row" }}
//       overflow="hidden"
//       variant="outline"
//       padding={"20px"}
//       margin="10px"
//       onClick={handleClick}
//     >
//       <Image
//         objectFit="cover"
//         maxW={{ base: "100%", sm: "200px" }}
//         src={props.images[0].url}
//         alt="Caffe Latte"
//       />

//       <Stack>
//         <CardBody>
//           <Heading size="md">{props.restaurant_name}</Heading>

//           <Text py="2">
//             {
//               `Rating : ${props.rating.restaurant_avg_rating}`
//             }
//           </Text>
//           <Text py="2">
//             {
//               `Cost for Two : $ ${props.avg_cost_for_two}`
//             }
//           </Text>
//           <Text py="2">
//             {
//               `Opens at : ${props.opens_at},Closed at : ${props.closes_at}`
//             }
//           </Text>
//         </CardBody>

//         <CardFooter>

//         </CardFooter>
//       </Stack>
//     </Card>
//   );
// };

// export default CardCompToDis;


import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Badge,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CardCompToDis = (props) => {
  const nav = useNavigate();

  const handleClick = () => {
    localStorage.setItem("fastor-single", JSON.stringify(props));
    nav("/single");
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      width = "98%"
      height="118px"
      border="2px solid grey"
      overflow="hidden"
      variant="outline"
      borderRadius="10px"
      mb="10"
      onClick={handleClick}
      _hover={{
        cursor: "pointer",
        shadow: "md",
      }}
    >
      <Image
        objectFit="cover"
        // maxW={{ base: "100%", sm: "200px" }}
        width="112px"
        height="118px"
        
       
        src={props.images[0].url}
        alt={props.restaurant_name}
      />

      <Stack  spacing={2} align={{ base: "center", sm: "flex-start" }}>
        <Text size="12px" fontWeight="bold" mt="-3">
          {props.restaurant_name}
        </Text>

        <Text fontSize="10px" color="grey" mt="-15" >{props?.location?.location_address}</Text>

        <Box>
          <Badge colorScheme="blue" mr={2} >
            {props.rating.restaurant_avg_rating} Rating
          </Badge>
          {props.offer_trending && (
            <Badge colorScheme="green">Trending</Badge>
          )}
        </Box>

        <Text fontSize="sm" color="gray.600">
          {props.cuisines.map((cuisine) => cuisine.name).join(", ")}
        </Text>

        <Text fontSize="lg" fontWeight="bold" color="green.500">
          {props.offer_text}
        </Text>
      </Stack>
    </Card>
  );
};

export default CardCompToDis;

