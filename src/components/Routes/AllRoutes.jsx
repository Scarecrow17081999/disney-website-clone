import React from "react";
import Home from "../Home/Home";
import Details from "../Details/Details";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
