import { motion } from "framer-motion";
import { fadeIn } from "../variant";

const AboutCard = ({ children, position }) => {
  return (
    <motion.div
      variants={fadeIn(position, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }} // Animasi akan terjadi sekali saat 10% elemen terlihat
      className="p-3 shadow-md bg-white rounded-lg text-start border h-[150px] text-sm sm:text-base"
    >
      {children}
    </motion.div>
  );
};

export const About = () => {
  return (
    <section id="about" className="pt-24">
      <div className="container">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-3 text-2xl font-semibold text-center"
        >
          About Us
        </motion.h1>
        <div className="flex flex-wrap justify-center gap-5">
          <motion.img
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            src="./about.webp"
            alt="About Us - Charcoal Trade Indonesia"
            className="rounded-xl w-[400px] sm:w-[590px] object-cover" // Pastikan gambar memiliki ukuran dan properti object-fit untuk menghindari CLS
            width="590"
            height="400"
          />
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-3 text-justify leading-relaxed md:w-[600px] text-sm sm:text-base"
          >
            <p>
              <span className="font-semibold">
                Trusted Charcoal Manufacturer and Exporter in Indonesia,
              </span>{" "}
              We are a charcoal supplier, charcoal manufacturer, and charcoal
              exporter committed to providing high-quality natural charcoal
              products to our customers. We offer a variety of charcoal products
              including{" "}
              <strong>
                charcoal briquettes, sawdust charcoal, and coconut shell
                charcoal.
              </strong>
            </p>
            <p>
              As a well-known and credible charcoal exporter from Indonesia, we
              provide various types of charcoal products at affordable prices
              and the best quality. Our products are suitable for industrial,
              residential, and BBQ purposes.
            </p>
            <p>
              We will be happy to be your business partner and supplier,
              providing the best charcoal products you can get. We are fully
              committed to our customers' satisfaction and ensure on-time
              delivery and excellent customer service.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-[1200px]">
            <AboutCard position="right">
              <span className="font-semibold">
                High Quality Charcoal Products:
              </span>{" "}
              <p>
                All of our charcoal products are manufactured to the highest
                standards to ensure consistent quality.
              </p>
            </AboutCard>
            <AboutCard position="up">
              <span className="font-semibold">Superior Customer Service :</span>
              <p>
                We are committed to providing the best service to our customers,
                with on-time delivery and full support.
              </p>
            </AboutCard>
            <AboutCard position="left">
              <span className="font-semibold">
                Competitive Prices for Charcoal Products:
              </span>{" "}
              <p>
                We offer competitive prices without compromising product
                quality.
              </p>
            </AboutCard>
          </div>
        </div>
      </div>
    </section>
  );
};
