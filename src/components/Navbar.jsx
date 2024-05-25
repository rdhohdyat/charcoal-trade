import React, { useState } from "react";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <div id="home"></div>
      <nav className="shadow border-b fixed z-40 top-0 left-0 right-0 bg-white">
        <div className="flex md:justify-around justify-between items-center px-5 py-4">
          <div className="flex items-center  gap-2">
            <img src="./logo.png" alt="" className="w-[40px]" />
          <h1 className="font-semibold ">CharcoalTrade</h1>
          </div>

          <div className="hidden md:flex items-center gap-10 font-medium uppercase  text-gray-700">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#product">Products</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>

          <div id="menu-box" className={`${isOpenMenu ? '' : 'hidden'}`}>
            <div className="flex flex-col absolute right-5 top-20 bg-white px-10 py-5 shadow gap-3 border rounded">
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#product">Products</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div
            id="social-media"
            className="hidden lg:flex items-center text-[24px] gap-5 text-gray-700"
          >
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-facebook-circle"></i>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="active:scale-95 transition-all ease-in-out"
              id="button-menu"
            >
              <i className="bx bx-menu text-[32px]"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
