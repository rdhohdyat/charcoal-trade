import React from "react";

export const ContactButton = () => {
  return (
    <div className="fixed z-50 right-5 bottom-6">
      <a
        href="https://api.whatsapp.com/send?phone=+6289669917030"
        className="flex items-center gap-2"
      >
        <div className="px-5 py-1 bg-white border border-white shadow-md rounded-xl">
          Contact Us
        </div>
        <img src="./wa.avif" width={60} alt="" />
      </a>
    </div>
  );
};
