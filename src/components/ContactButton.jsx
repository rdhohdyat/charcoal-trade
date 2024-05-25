import React from "react";

export const ContactButton = () => {
  return (
    <div className="fixed right-5 bottom-6 z-50">
      <a
        href="https://api.whatsapp.com/send?phone=+6282287498239"
        className="flex items-center gap-2"
      >
        <div className="px-5 py-1 bg-white border  border-white shadow-md rounded-xl">
          Contact Us
        </div>
        <img src="./wa.png" className="w-[60px]" alt="" />
      </a>
    </div>
  );
};
