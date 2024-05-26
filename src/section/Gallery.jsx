import { motion } from "framer-motion";
import { fadeIn } from "../variant";

export const Gallery = () => {
  return (
    <section id="gallery" className="pt-24 pb-10">
      <div className="container">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h1 className="mb-3 text-2xl font-semibold text-center">Gallery</h1>
          <p className="mx-auto mb-3 text-center">
            You can see our gallery here, you can see our daily activities and
            our products.
          </p>
        </motion.div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", index * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="overflow-hidden rounded-lg"
              >
                <img
                  src={`./gallery/${index + 1}.avif`}
                  width={400}
                  height={250}
                  className="object-cover w-full h-full transition-transform duration-200 hover:scale-105"
                  alt={`Gallery image ${index + 1}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
