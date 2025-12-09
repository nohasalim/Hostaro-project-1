import React from "react";
import img from "../../assets/images/about.png";
export default function About() {
  return (
    <div className="bg-light py-5 text-center">
      <h1 className="fw-bold">About Hostaro</h1>
      <p className="p-5 fs-5">
        Our mission is to provide reliable, secure, and blazing-fast hosting to
        empower your online success. We're built on a foundation of reliability,
        customer success, and innovation.
      </p>
      <div>
        <img src={img} alt="aboutImage" className="pb-5" />
        <h2 className="fw-bold">Our Story & Values</h2>
        <div className="p-5 fs-5">
          <p>
            Founded by a team of passionate developers and system
            administrators, Hostaro was born from a simple idea: web hosting
            should be powerful, affordable, and easy to use. We were tired of
            slow servers, complex control panels, and non-existent support. So,
            we decided to build the hosting company we always wanted.
          </p>
          <p>
            Our core values are customer obsession, unwavering reliability, and
            continuous innovation. We believe in building long-term partnerships
            with our clients, providing them with the tools and support they
            need to thrive online.
          </p>
        </div>
      </div>
    </div>
  );
}
