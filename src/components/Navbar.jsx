import React, { useState } from "react";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <div id="home"></div>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white border-b shadow">
        <div className="flex items-center justify-between px-5 py-4 md:justify-around">
          <div className="flex items-center gap-2">
            <img src="./logo.avif" alt="logo" width={40} />
            <h1 className="font-semibold ">CharcoalTrade</h1>
          </div>

          <div className="items-center hidden gap-10 font-medium text-gray-700 uppercase md:flex">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#product">Products</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>

          <div id="menu-box" className={`${isOpenMenu ? "" : "hidden"}`}>
            <div className="absolute flex flex-col gap-3 px-10 py-5 bg-white border rounded shadow right-5 top-20">
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
            <i className="bx bxl-facebook"></i>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="transition-all ease-in-out active:scale-95"
              aria-label="button-menu"
              id="button-menu"
            >
              <i className="text-3xl bx bx-menu"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
