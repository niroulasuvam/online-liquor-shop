import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
