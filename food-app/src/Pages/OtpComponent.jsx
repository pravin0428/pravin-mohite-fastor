import {
  Box,
  Button,
  HStack,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const OtpComponent = () => {
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [pin5, setPin5] = useState("");
  const [pin6, setPin6] = useState("");

  const toast = useToast();
  const nav = useNavigate();

  const handleVerify = async () => {
    if (pin1 + pin2 + pin3 + pin4 + pin5 + pin6 !== "123456") {
      toast({
        title: "Invalid OTP",
        description: "Please Enter Correct OTP",
        status: "error",
        duration: 4000,
      });
    } else {
      nav("/home");
    }

    const payload = {
      phone: "9818979450",
      otp: pin1 + pin2 + pin3 + pin4 + pin5 + pin6,
      dial_code: "+91",
    };

    try {
      const response = await axios.post(
        "https://staging.fastor.in/v1/pwa/user/login",
        payload
      );
      if (response && response.data) {
        console.log("Success", response.data.data.token);
        localStorage.setItem("FastorToken", response.data.data.token);
      } else {
        // Handle the case where the token is missing in the response
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box padding={"30px"}>
      <Box paddingTop={"10%"} textAlign="left">
        <Text fontSize="2xl" as="b">
          OTP Verification
        </Text>
        <Text color="grey">
          Enter the verification code we just sent on your Mobile Number.
        </Text>
      </Box>

      <Box textAlign="center" paddingTop={"30px"}>
        <HStack>
          <PinInput>
            <PinInputField
              width="15%"
              onChange={(e) => setPin1(e.target.value)}
            />
            <PinInputField
              width="15%"
              onChange={(e) => setPin2(e.target.value)}
            />
            <PinInputField
              width="15%"
              onChange={(e) => setPin3(e.target.value)}
            />
            <PinInputField
              width="15%"
              onChange={(e) => setPin4(e.target.value)}
            />
            <PinInputField
              width="15%"
              onChange={(e) => setPin5(e.target.value)}
            />
            <PinInputField
              width="15%"
              onChange={(e) => setPin6(e.target.value)}
            />
          </PinInput>
        </HStack>
      </Box>

      <Box textAlign="left" marginTop={"30px"}>
        <Button
          size="lg"
          width="90%"
          height="40px"
          borderRadius="8px"
          backgroundColor="tomato"
          color="white"
          onClick={handleVerify}
        >
          Verify
        </Button>
      </Box>

      <Text marginTop={"40px"}>Didn't receive the code?</Text>
      <Text color={"blue"}>
        <Link to="/">Resend</Link>
      </Text>
    </Box>
  );
};

export default OtpComponent;
