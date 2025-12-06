import React from "react";
import FooterLink from "./FooterLink";

export default function AllFooterLinks() {
  const helpLinks = ["FAQs", "Services", "Contact Us", "News & Blog"];
  const servicesLinks = [
    "Shared Hosting",
    "Managed VPS",
    "Dedicated Services",
    "Domain Registration",
  ];
  return (
    <div className="container col-xl-8 d-flex flex-wrap justify-content-between">
      <div className="container col-xl-6  text-white pt-5">
        <h2>Help</h2>
        <hr className=" border-white opacity-100" />
        {helpLinks.map((helpLink, index) => {
          return <FooterLink key={index} linkName={helpLink} />;
        })}
      </div>
      <div className="container col-xl-6 text-white pt-5">
        <h2>Services</h2>
        <hr className=" border-white opacity-100" />
        {servicesLinks.map((serviceLink, index) => {
          return <FooterLink key={index} linkName={serviceLink} />;
        })}
      </div>
    </div>
  );
}
