import { motion } from "framer-motion";
import { fadeIn } from "../variant";

export const Home = () => {
  return (
    <section className="pt-32">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-[600px]"
          >
            <h1 className="mb-2 text-2xl font-semibold uppercase sm:text-4xl">
              Welcome to Charcoal Trade
            </h1>
            <h2 className="mb-4 uppercase">
              The best destination for charcoal quality from{" "}
              <span className="font-semibold">Indonesia.</span>
            </h2>
            <p className="text-sm leading-relaxed text-justify sm:text-base">
              Find various types of high quality charcoal for your cooking and
              industrial needs. Start exploring the world of charcoal with
              <span className="font-semibold"> CharcoalTrade</span> today!
            </p>
            <a
              href="#about"
              className="bg-gray-950 w-[210px] px-4 py-3 rounded active:scale-95 transition-all ease-in-out text-white mt-5 flex items-center gap-2"
            >
              <h1>More information</h1>
              <i className="bx bx-info-circle"></i>
            </a>
          </motion.div>
          <motion.img
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            src="./hero.avif"
            className="object-cover sm:w-[600px] sm:h-[400px] w-[500px] h-[300px] rounded-xl"
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
}
