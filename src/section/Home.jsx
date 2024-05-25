import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../variant";

export default function Home() {
  return (
    <section className="pt-32 ">
      <div className="container">
        <div className="flex flex-wrap  justify-center gap-2 items-center">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            className="md:w-[600px]"
          >
            <h1 className="font-semibold uppercase text-2xl sm:text-4xl mb-2">
              Welcome to CharcoalTrade
            </h1>
            <h3 className="sm:text-2xl uppercase mb-4">
              The best destination for charcoal quality from{" "}
              <span className="font-semibold">Indonesia.</span>
            </h3>
            <p className="text-justify text-sm sm:text-base leading-relaxed">
              Find various types of high quality charcoal for your cooking and
              industrial needs. Start exploring the world of charcoal with
              <span className="font-semibold"> CharcoalTrade</span> today!
            </p>
            <a href="#about" className="bg-gray-950 w-[210px] px-4 py-3 rounded active:scale-95 transition-all ease-in-out text-white mt-5 flex items-center gap-2">
              <h1>More information</h1>
              <i className="bx bx-info-circle text-[24px]"></i>
            </a>
          </motion.div>
          <motion.img
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            src="./hero.png"
            className="sm:w-[600px] w-[400px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
