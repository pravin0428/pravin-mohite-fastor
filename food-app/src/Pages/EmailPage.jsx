import { Box, Button,   Text  } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailPage = () => {
  const [mobile, setMobile] = useState("");
  const nav = useNavigate();
 

  const handleSubmit = () => {
  
     alert("Opt is 123456")
    nav("/otp");
  };

  return (
    <Box>
      <Box paddingTop={"10%"}>
        <Text fontSize="2xl" as="b">
          Enter Your Mobile Number
        </Text>
        <Text color="grey">
          We will send you the 6 digits verification code{" "}
        </Text>
      </Box>
      <Box textAlign="center" paddingTop={"30px"}>
        <input
          type={"number"}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter Mobile"
          style={{
            width: "90%",
            height: "40px",
            borderRadius: "8px",
            border: "1px solid",
          }}
        />

        <Box paddingTop="20px">
          <Button
            size="lg"
            width="90%"
            height="40px"
            borderRadius="8px"
            backgroundColor="tomato"
            color="white"
            onClick={handleSubmit}
          >
            Send Code
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EmailPage;
