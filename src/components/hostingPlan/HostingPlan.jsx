import React from "react";
import "./hostingPlan.css";
import ListOfPlans from "./ListOfPlans";
export default function HostingPlan() {
  return (
    <div className="plans container d-flex flex-column align-items-center py-5">
      <div className="text-center">
        <h2 className="mb-3">Choose the right hosting plan for you</h2>
        <p>
          Each of our web hosting solutions are fine-tuned, blazing fast and are
          ready for you! Choose the high speed package tailored for your needs.
        </p>
      </div>

      <ListOfPlans />
    </div>
  );
}
