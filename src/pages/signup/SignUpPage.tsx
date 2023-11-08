import React from "react";
import { Button, Typography, Box, TextField } from "@mui/material";
import useInput from "../../hooks/use-input";

const SignUpPage = () => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid) {
    formIsValid = true;
  }

  const submitHandler = () => {};
  return (
    <Box sx={{ marginLeft: 30, marginTop: 16, width: "343px" }}>
      <Typography sx={{ marginBottom: 1.25 }} variant="h3">
        Chama
      </Typography>
      <Typography sx={{ marginBottom: 5 }} color="grey.700" variant="h5">
        Tell us about yourself
      </Typography>
      <Typography variant="h4">First name</Typography>
      <TextField
        value={firstName || ""}
        onChange={firstNameChangeHandler}
        onBlur={firstNameBlurHandler}
        error={firstNameHasError}
        helperText={firstNameHasError && "Enter first name"}
        sx={{ marginBottom: 5, marginTop: 1 }}
        placeholder="Enter your first name"
        variant="outlined"
        fullWidth
      />
      <Typography variant="h4">Last name</Typography>
      <TextField
        value={lastName || ""}
        onChange={lastNameChangeHandler}
        onBlur={lastNameBlurHandler}
        error={lastNameHasError}
        helperText={lastNameHasError && "Enter last name"}
        sx={{ marginBottom: 5, marginTop: 1 }}
        placeholder="Enter your last name"
        variant="outlined"
        fullWidth
      />
      <Button
        onClick={submitHandler}
        disabled={!formIsValid}
        sx={{ marginBottom: 3 }}
        color="primary"
        variant="contained"
      >
        Continue
      </Button>
      <hr />
      <Typography sx={{ marginTop: 3 }} color="grey.700" variant="h5">
        Already have an account?{" "}
        <span style={{ color: "#186EDB" }}>Sign in</span>
      </Typography>
    </Box>
  );
};

export default SignUpPage;
