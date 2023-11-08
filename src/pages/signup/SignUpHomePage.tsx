import {
  Typography,
  Box,
  Divider,
  TextField,
  IconButton,
  InputAdornment,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import GoogleButton from "../../UI/buttons/GoogleButton";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import useInput from "../../hooks/use-input";
import { useNavigate } from "react-router-dom";

// import { useSelector } from "react-redux";

const SignUpHomePage = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const email = useSelector((state: any) => state.user.user.email);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.match("@"));

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const navigate = useNavigate();
  const submitHandler = () => {
    navigate("/sign-up");
  };

  return (
    <Box sx={{ marginLeft: 30, marginTop: 16, width: "343px" }}>
      <Typography sx={{ marginBottom: 1.25 }} variant="h3">
        Chama
      </Typography>
      <Typography color="grey.700" variant="h5">
        Let's get started
      </Typography>
      <GoogleButton />
      <Divider sx={{ marginY: 5 }}>or</Divider>
      <Typography variant="h4">Email</Typography>
      <TextField
        value={email || ""}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        error={emailHasError}
        helperText={emailHasError && "Enter valid email address"}
        sx={{ marginBottom: 5, marginTop: 1 }}
        placeholder="Enter your email"
        variant="outlined"
        fullWidth
      />
      <Typography variant="h4">Password</Typography>
      <TextField
        sx={{ marginBottom: 5, marginTop: 1 }}
        value={password || ""}
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
        error={passwordHasError}
        helperText={passwordHasError && "Enter your password"}
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        placeholder="Enter password"
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

export default SignUpHomePage;
