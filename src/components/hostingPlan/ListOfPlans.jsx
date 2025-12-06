import React from "react";
import PlanCard from "./PlanCard";

export default function ListOfPlans() {
  const plans = [
    {
      planName: "Starter",
      price: "$2.99/month",
      description:
        "For a 1-year term. Pay $35.88 today, then $107.88 on renewal.",
      diskSpace: "30GB",
      emailAcounts: "10",
    },
    {
      planName: "Pro",
      price: "$4.99/month",
      description: "Perfect for get started on their nutrition journey",
      diskSpace: "50GB",
      emailAcounts: "20",
    },
    {
      planName: "Max",
      price: "$6.99/month",
      description: "Perfect for get started on their nutrition journey",
      diskSpace: "100GB",
      emailAcounts: "40",
    },
  ];
  return (
    <div className="d-md-flex mt-3 flex-wrap align-items-center justify-content-center">
      {plans.map((plan) => {
        return <PlanCard plan={plan} />;
      })}
    </div>
  );
}
