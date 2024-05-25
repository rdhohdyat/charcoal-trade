import React from 'react'

export const Footer = () => {
  return (
    <div id="contact" className="py-24 bg-gradient-to-b from-white to-gray-300">
      <div className="container flex justify-center">
        <div className="sm:flex justify-between w-full max-w-6xl ">
          <div className="flex flex-col gap-2">
            <div className='flex items-center gap-2'>
              <img src="./logo.png" alt="" className='w-[60px]' />
            <h1 className="logo  text-2xl py-5 font-semibold">CharcoalTrade</h1>

            </div>
            <p>
              We are a leading manufacturer and exporter of charcoal briquettes
            </p>
            <p>Pekanbaru, Riau , Indoneesia</p>
            <p>+6282287498239</p>
            <p>charcoaltrade@gmail.com</p>
          </div>

          <div className="flex flex-col items-end">
            <h1 className="text-2xl py-5 font-semibold">Follow Us</h1>
            <p className="sm:w-[400px] text-end">
              Follow us on social media, and some updates about company
              information
            </p>
            <div className="flex gap-3 mt-3">
              <a href="">
                <div className="h-16 w-16 border rounded-full flex items-center justify-center">
                  <i className="bx bxl-youtube text-4xl"></i>
                </div>
              </a>
              <a href="">
                <div className="h-16 w-16 border rounded-full flex items-center justify-center">
                  <i className="bx bxl-facebook text-4xl"></i>
                </div>
              </a>
              <a href="">
                <div className="h-16 w-16 border rounded-full flex items-center justify-center">
                  <i className="bx bxl-twitter text-4xl"></i>
                </div>
              </a>
              <a href="">
                <div className="h-16 w-16 border rounded-full flex items-center justify-center">
                  <i className="bx bxl-instagram text-4xl"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
