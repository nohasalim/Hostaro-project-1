import React from "react";

export default function FooterLink({ linkName }) {
  return (
    <div className="py-2">
      <a className="text-white text-decoration-none" href="#">
        {linkName}
      </a>
    </div>
  );
}
