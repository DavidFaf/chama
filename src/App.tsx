import React from "react";
import SignUpHomePage from "./pages/signup/SignUpHomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/signup/SignUpPage";
import VerifyEmail from "./pages/signup/VerifyEmail";
import ForgotPassword from "./pages/password/ForgotPassword";
import LoginHomePage from "./pages/signin/LoginHomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpHomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<LoginHomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
