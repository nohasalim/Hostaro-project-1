import React from "react";
import "./planCard.css";
export default function PlanCard({ plan }) {
  return (
    <div className="cardOfPlan p-4 m-3  rounded-5 col-11 col-md-5 col-xl-3">
      <h2 className="fw-bold">{plan.planName}</h2>
      <h3>{plan.price}</h3>
      <p>{plan.description}</p>
      <button>Buy Now</button>
      <ul className="planList">
        <li>1 Website</li>
        <li>{plan.diskSpace} Disk Space</li>
        <li>Free Domain Name included*</li>
        <li>{plan.emailAcounts} E-Mail Accounts</li>
        <li>WordPress Pre-installed</li>
        <li>Performance Plugins Pre-installed</li>
        <li>Powered by Turbo</li>
        <li>30 days money-back guarantee**</li>
      </ul>
    </div>
  );
}
