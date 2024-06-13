import { motion } from "framer-motion";
import { fadeIn } from "../variant";

export const Gallery = () => {
  const images = [
    {
      src: "1.avif",
      alt: "Charcoal production process",
      description: "Our charcoal production process in action",
    },
    {
      src: "2.avif",
      alt: "High-quality charcoal products",
      description: "High-quality charcoal products ready for shipment",
    },
    {
      src: "3.avif",
      alt: "Charcoal briquettes packaging",
      description: "Packaging our premium charcoal briquettes",
    },
    {
      src: "4.avif",
      alt: "Sawdust briquettes production",
      description: "Producing eco-friendly sawdust briquettes",
    },
    {
      src: "5.avif",
      alt: "Coconut shell charcoal",
      description: "Sustainably sourced coconut shell charcoal",
    },
    {
      src: "6.avif",
      alt: "Loading charcoal for export",
      description: "Loading charcoal products for export",
    },
  ];

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
            Explore our gallery to see our daily activities and high-quality
            charcoal products.
          </p>
        </motion.div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", index * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="overflow-hidden rounded-lg"
              >
                <img
                  src={`./gallery/${image.src}`}
                  width={400}
                  height={250}
                  className="object-cover w-full h-full transition-transform duration-200 hover:scale-105"
                  alt={image.alt}
                />
                <p className="mt-2 text-center">{image.description}</p>
                <script type="application/ld+json">
                  {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ImageObject",
                    contentUrl: `./gallery/${image.src}`,
                    description: image.description,
                    name: image.alt,
                  })}
                </script>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
