import React from "react";
import "./help.css";
import ContactForm from "./ContactForm";
export default function Help() {
  return (
    <div className=" help py-5 ">
      <h2
        className="text-center fs-1 fw-bold mb-5"
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        Need Some Help?
      </h2>
      <div className="container d-xl-flex align-items-center justify-content-center">
        <div
          className=" col-12 col-xl-6"
          data-aos="slide-right"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div className="contactHelp">
            <h3 className="my-3">Contact Sales</h3>
            <a href="tel:0104567890">T: (010)4567890</a>
            <a href="mailto:sales@hostingdomain.com">
              E:<span> sales@hostingdomain.com</span>
            </a>
          </div>

          <div className="contactHelp">
            <h3 className="my-3">Service Hours:</h3>
            <p>Monday to Friday : 9am – 7pm</p>
          </div>

          <div className="contactHelp border-0">
            <h3 className="my-3">Office Address:</h3>
            <p>822 Fancher Drive, Texas, USA</p>
          </div>
        </div>
        <div
          className="col-12 col-xl-6 helpForm pt-5 pt-xl-0"
          data-aos="slide-left"
          data-aos-duration="1500"
          data-aos-easing="ease"
        >
          <h2 className="text-center fw-bold fs-2">Need help? Get in touch</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
