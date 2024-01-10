import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, VStack } from "@chakra-ui/react";
import axios from "axios";

const EmailPage = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const navigate = useNavigate();

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSendCode = async () => {
    if (isValidMobileNumber(mobileNumber)) {
      const randomCode = generateRandomCode();
      setVerificationCode(randomCode);
      setCodeSent(true);

      try {
        // Make a POST request to your register API endpoint
        const response = await axios.post(
          "https://staging.fastor.in/v1/pwa/user/register",
          {
            phone: mobileNumber,
          }
        );

        if (response.data.success) {
          navigate("/otp");
        } else {
          setTimeout(() => {
            navigate("/otp");
          }, 1000);
          console.log("Registration failed.");
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    } else {
      console.log("Invalid mobile number");
    }
  };

  const isValidMobileNumber = (mobileNumber) => {
    // Basic mobile number validation, you may want to use a more robust validation method
    return /^[0-9]{10}$/.test(mobileNumber);
  };

  const generateRandomCode = () => {
    // Generate a random 4-digit code
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  return (
    <VStack spacing="4">
      <h1
        style={{
          fontFamily: "Urbanist",
          fontSize: "26px",
          fontWeight: 700,
          lineHeight: "34px",
          letterSpacing: "-0.01em",
        }}
      >
        Enter Your Mobile Number
      </h1>
      <p>We will send you the 4-digit verification code</p>

      <VStack spacing="4">
        <Input
          type="tel"
          placeholder="Enter your Email"
          style={{
            width: "330px",
            height: "56px",
            borderRadius: "8px",
            border: "1px solid",
          }}
          value={mobileNumber}
          onChange={handleMobileNumberChange}
        />
        <Button
          size="lg"
          width="330px"
          height="56px"
          borderRadius="8px"
          backgroundColor="tomato"
          color="white"
          onClick={handleSendCode}
          disabled={codeSent}
        >
          {codeSent ? "Code Sent" : "Send Code"}
        </Button>
      </VStack>
      {codeSent && <p>Verification Code: {verificationCode}</p>}
    </VStack>
  );
};

export default EmailPage;

// code with api but api is not working properlly

// import { Button, Input, VStack } from "@chakra-ui/react";

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const EmailPage = () => {
//   const [phone, setPhone] = useState("");
//   const [dialCode, setDialCode] = useState("");
//   const navigate = useNavigate();
//   const handleRegistration = async () => {
//     try {
//       const response = await axios.post(
//         "https://staging.fastor.in/v1/pwa/user/register",
//         {
//           phone,
//           dial_code: dialCode,
//         }
//       );

//       console.log(response.data);
//       if (response.data.status === "Success") {
//         navigate("/otp");
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//     }
//   };

//   return (
//     <div>
//       <p>Enter Your Mobile Number</p>

//       <input
//         type="text"
//         value={phone}
//         placeholder="Enter Mobile"
//         onChange={(e) => setPhone(e.target.value)}
//         style={{
//           width: "330px",
//           height: "56px",
//           borderRadius: "8px",
//           border: "1px solid",
//         }}
//       />

//       <br />
//       <label>
//         Dial Code:
//         <input
//           type="text"
//           value={dialCode}
//           onChange={(e) => setDialCode(e.target.value)}
//         />
//       </label>
//       <br />
//       <Button
//         size="lg"
//         width="330px"
//         height="56px"
//         borderRadius="8px"
//         backgroundColor="tomato"
//         color="white"
//         onClick={handleRegistration}
//       >
//         Send Code
//       </Button>
//     </div>
//   );
// };

// export default EmailPage;
