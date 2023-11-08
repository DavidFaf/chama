import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");

  const handleOTPChange = (newOTPValue: string) => {
    setOtp(newOTPValue);
  };

  let formIsValid = false;
  if (otp !== "") {
    formIsValid = true;
  }

  const navigate = useNavigate();
  const submitHandler = () => {
    navigate("/create-account");
  };
  return (
    <Box sx={{ marginLeft: 30, marginTop: 16, width: "343px" }}>
      <Typography sx={{ marginBottom: 1.25 }} variant="h3">
        Chama
      </Typography>
      <Typography sx={{ marginBottom: 5 }} color="grey.700" variant="h5">
        Please enter the code sent to <b>dfaf***@gmail.com</b>
      </Typography>
      <MuiOtpInput
        sx={{ marginBottom: 5}}
        length={4}
        value={otp}
        onChange={handleOTPChange}
      />
      <Button
        onClick={submitHandler}
        sx={{marginBottom:3}}
        disabled={!formIsValid}
        color="primary"
        size="large"
        variant="contained"
      >
        Verify email
      </Button>
      <hr />
      <Typography sx={{ marginTop: 3 }} color="grey.700" variant="h5">
        Already have an account?{" "}
        <span style={{ color: "#186EDB" }}>Sign in</span>
      </Typography>
    </Box>
  );
};

export default VerifyEmail;
