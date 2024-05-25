import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

export default function Gallery() {
  return (
    <section id="gallery" className="pt-24 pb-10">
      <div className="container">
        <h1 className="text-center font-semibold text-2xl mb-3">Gallery</h1>
        <p className="mx-auto md:w-[600px] text-center mb-3">
          You can see our gallery here, click to check out our collections. You
          can see our daily activity and products that are exported to many
          countries and regions all over the world.
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
            {[...Array(6)].map((_, index) => (
              <img
                key={index}
                src={`./gallery/${++index}.jpg`}
                className="w-[400px] h-[250px] hover:scale-105 transition-all ease-in-out"
                alt=""
              ></img>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
