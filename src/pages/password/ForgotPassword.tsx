import React from "react";
import { Typography, Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/use-input";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate("/verify-email");
  };

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    // reset: resetEmail,
  } = useInput((value) => value.match("@"));

  let formIsValid = false;
  if (emailIsValid) {
    formIsValid = true;
  }

  return (
    <Box sx={{ marginLeft: 30, marginTop: 16, width: "343px" }}>
      <Typography sx={{ marginBottom: 1.25 }} variant="h3">
        Chama
      </Typography>
      <Typography sx={{ marginBottom: 5 }} color="grey.700" variant="h5">
        Don’t worry! It happens. Please enter the email associated with your
        account.
      </Typography>
      <TextField
        value={email || ""}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        error={emailHasError}
        helperText={emailHasError && "Enter your email"}
        sx={{ marginBottom: 5, marginTop: 1 }}
        placeholder="Email address"
        variant="outlined"
        fullWidth
      />
      <Button
        onClick={submitHandler}
        sx={{ marginBottom: 3 }}
        disabled={!formIsValid}
        color="primary"
        size="large"
        variant="contained"
      >
        Send
      </Button>
      <hr />
      <Typography sx={{ marginTop: 3 }} color="grey.700" variant="h5">
        Already have an account?{" "}
        <span style={{ color: "#186EDB" }}>Sign in</span>
      </Typography>
    </Box>
  );
};

export default ForgotPassword;
