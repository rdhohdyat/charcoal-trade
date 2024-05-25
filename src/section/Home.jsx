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
            <h1 className="font-semibold text-2xl sm:text-4xl mb-4">
              CHARCOAL MANUFACTURER <br />
              <span className="font-normal">FROM INDONESIA</span>
            </h1>
            <p className="text-justify leading-relaxed">
              Welcome to <span className="font-semibold">CharcoalTrade</span>,
              the best place to explore and purchase various types of quality
              charcoal. From wood charcoal to coconut shell charcoal, we offer
              the finest selection for your needs. Discover the beauty and
              utility of charcoal all in one convenient and reliable place.
              Let's start exploring the world of charcoal with{" "}
              <span className="font-semibold">CharcoalTrade</span> today!
            </p>
            <button className="bg-gray-950 px-4 py-3 rounded active:scale-95 transition-all ease-in-out text-white mt-5 flex items-center gap-2">
              <h1>More information</h1>
              <i className="bx bx-info-circle text-[24px]"></i>
            </button>
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
