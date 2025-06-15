import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";        // assuming it's login.jsx (lowercase)
import Dashboard from "./pages/Dashboard"; 
import SignupPage from "./pages/SignupPage";// ✅ correct path

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<SignupPage/>} />
    </Routes>
  );
}

export default App;
