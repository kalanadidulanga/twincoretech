import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Products from "@/pages/Products";
import Services from "@/pages/Services";
import Team from "@/pages/Team";
import Investors from "@/pages/Investors";
import Contact from "@/pages/Contact";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="services" element={<Services />} />
      <Route path="team" element={<Team />} />
      <Route path="investors" element={<Investors />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
