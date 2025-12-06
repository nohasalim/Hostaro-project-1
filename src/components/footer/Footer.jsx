import React from "react";

import "./footer.css";
import logo from "../../assets/images/footer-logo.png";
import ContactSection from "./ContactSection";
import AllFooterLinks from "./AllFooterLinks";

export default function Footer() {
  return (
    <div className="footer py-5">
      <ContactSection />
      <hr className="container border-white opacity-100" />
      <div className="container d-flex flex-wrap justify-content-between">
        <div className="container col-xl-4 text-white pt-5">
          <img src={logo} alt="logo" height="60" />
          <h2 className="pt-3">
            Reliable web hosting services tailored for your needs. Powered by
            expert support and trusted infrastructure.
          </h2>
        </div>
        <AllFooterLinks />
      </div>
    </div>
  );
}
