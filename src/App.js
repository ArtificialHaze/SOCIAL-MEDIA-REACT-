import "./App.css";
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

const App = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
