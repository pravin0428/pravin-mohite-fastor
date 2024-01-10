import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button  } from "@chakra-ui/react";


const OtpComponent = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const navigate = useNavigate()

  const handleOtpChange = (e, index) => {
    const enteredDigit = e.target.value;
    
    // Allow only single-digit input
    if (/^\d$/.test(enteredDigit)) {
      const newOtp = [...otp];
      newOtp[index] = enteredDigit;
      setOtp(newOtp);

      // Move to the next input box automatically
      if (index < 3 && enteredDigit !== '') {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleOtpSubmit = () => {
    const enteredOtp = otp.join('');

    // Check if the entered OTP is exactly 4 digits
    if (enteredOtp.length === 4) {
      navigate("/home")
    } else {
      // You can handle invalid OTP here (e.g., show an error message)
      console.log('Invalid OTP');
    }
  };

  return (
    <div>
    <text style={{
      fontFamily: 'Urbanist',
      fontSize: '26px',
      fontWeight: 700,
      lineHeight: '34px',
      letterSpacing: '-0.01em',
      textAlign: 'left',
      background: 'white',
      width: '187px',
      height: '34px',
      top: '252px',
      left: '20px',
      padding: '10px', // Adding padding for better visibility
      color: 'black' // Adding text color
    }}>
      OTP Verification
    </text>

    <p>Enter the verification code we just sent on your Mobile Number.</p>
    <div>
      {otp.map((digit, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          maxLength="1"
        
          value={digit}
          onChange={(e) => handleOtpChange(e, index)}
        />
      ))}
    </div>
    <br />
    <Button size="sm"
          width="330px"
          height="56px"
          borderRadius="8px"
          backgroundColor="tomato"
          color="white" onClick={handleOtpSubmit}>Verify</Button>
    <p>Dont recived code? <Link>Resend it</Link></p>
  </div>
  );
};

export default OtpComponent;
