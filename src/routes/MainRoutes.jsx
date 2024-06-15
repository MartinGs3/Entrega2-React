import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Item from "../pages/Item";
import Category from "../pages/Category";
import NavBar from "../components/NavBarComponent/NavBar";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/category/:id" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;