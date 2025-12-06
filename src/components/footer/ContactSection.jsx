import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import ContactCard from "./ContactCard";

export default function ContactSection() {
  const cardsData = [
    {
      icon: <FaLocationDot className="text-white" size={40} />,
      data: " 14 E 12th St, New York",
    },
    {
      icon: <IoCall className="text-white" size={40} />,
      data: " +1 299-670-9615",
    },
    {
      icon: <IoChatbubbleEllipses className="text-white" size={40} />,
      data: "Live chat",
    },
    {
      icon: <IoIosMail className="text-white " size={40} />,

      data: " hi@company.com",
    },
  ];
  return (
    <div className="container d-flex flex-wrap align-items-center justify-content-between">
      {cardsData.map((cardData, index) => {
        return <ContactCard key={index} {...cardData} />;
      })}
    </div>
  );
}
