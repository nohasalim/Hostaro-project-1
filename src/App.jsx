import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router";
import ContactUs from "./pages/contactUs/ContactUs";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mainApp">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <div>
              <p>Page Not Found || Error 404</p>
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
