import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/Footer";
import HostingPlan from "./components/hostingPlan/HostingPlan";
import Help from "./components/help/Help";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mainApp">
      <Header />
      <Hero />
      <HostingPlan />
      <Help />
      <Footer />
    </div>
  );
}
