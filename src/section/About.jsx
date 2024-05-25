import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variant";

const AboutCard = ({ children, position }) => {
  return (
    <motion.div
      variants={fadeIn(position, 0.2)}
      initial="hidden"
      whileInView={"show"}
      className="p-3 shadow-md  rounded-lg text-start border h-[150px]"
    >
      {children}
    </motion.div>
  );
};

export default function About() {
  return (
    <section id="about" className="pt-24">
      <div className="container">
        <h1 className="text-center font-semibold text-2xl mb-3">About Us</h1>
        <div className="flex flex-wrap  justify-center gap-5 ">
          <motion.img
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            src="./about.jpg"
            alt=""
            className="rounded-xl w-[400px] sm:w-[590px]"
          />
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            className="text-justify leading-relaxed md:w-[600px]"
          >
            <p className="mt-5">
              <span className="font-semibold">
                Trusted Charcoal Manufacturer and Charcoal Exporter,{" "}
              </span>
              We are a charcoal supplier, charcoal manufacturer and charcoal
              exporter committed to providing high quality natural charcoal
              products to our customers. We offer a variety of charcoal
            </p>
            <p className="mt-5">
              We are a well-known and credible charcoal exporter from Indonesia
              that provides various types of charcoal products at affordable
              prices and the best quality.
            </p>
            <p className="mt-5">
              We will be happy to be your business partner and supplier,
              providing the best charcoal products you can get. We are fully
              committed to our customers.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-[1200px]">
            <AboutCard position="right">
              <span className="font-semibold"> High Quality Products:</span> All
              of our charcoal products are manufactured to the highest standards
              to ensure consistent quality.
            </AboutCard>
            <AboutCard position="up">
              <span className="font-semibold">Superior Customer Service:</span>
              We are committed to providing the best service to our customers,
              with on-time delivery and full support.
            </AboutCard>
            <AboutCard position="left">
              <span className="font-semibold">Competitive Prices:</span> We
              offer competitive prices without compromising product quality.
            </AboutCard>
          </div>
        </div>
      </div>
    </section>
  );
}
