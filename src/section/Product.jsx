import { ProductCard } from "../components/ProductCard";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

const products = [
  {
    id: "product1",
    name: "Wood Charcoal",
    image: "wood_charcoal.avif",
    altText: "High-quality Wood Charcoal",
    description:
      "High-quality wood charcoal, perfect for grilling and smoking meats. Made from natural hardwood, it burns evenly and imparts a delicious smoky flavor to your food. Ideal for BBQ enthusiasts.",
    specification: {
      grade: "Premium",
      shape: "Chunks",
      material: "Natural hardwood",
      burningTime: "2.5 hours",
    },
  },
  {
    id: "product2",
    name: "Coconut Shell Charcoal",
    image: "coconut_charcoal.webp",
    altText: "Premium Coconut Shell Charcoal",
    description:
      "Premium coconut shell charcoal, ideal for outdoor cooking enthusiasts. Sustainably sourced from coconut shells, it produces minimal smoke and ash, ensuring a clean and efficient grilling experience.",
    specification: {
      grade: "Premium",
      shape: "Chunks",
      material: "Coconut shell",
      burningTime: "2 hours",
    },
  },
  {
    id: "product3",
    name: "Sawdust Briquette",
    image: "sawdust.webp",
    altText: "Eco-friendly Sawdust Briquette",
    description:
      "Eco-friendly sawdust briquettes, crafted from compressed sawdust. They ignite quickly and provide a steady heat output, making them perfect for long grilling sessions.",
    specification: {
      grade: "AB, ABC, CD, DE",
      shape: "Hexagonal",
      material: "Compressed sawdust",
      burningTime: "5-6 hours",
    },
  },
  {
    id: "product4",
    name: "BBQ Briquette",
    image: "BBQ.webp",
    altText: "BBQ Briquette for Extended Cooking",
    description:
      "BBQ briquettes designed specifically for barbecue enthusiasts. Ensure consistent heat for extended cooking periods. Made from a blend of natural ingredients, they deliver an authentic BBQ flavor.",
    specification: {
      grade: "Premium",
      shape: "Hexagonal shape",
      material: "Coconut shell charcoal/wood charcoal",
      burningTime: "5-6 hours",
    },
  },
  {
    id: "product5",
    name: "Coconut Charcoal Briquette",
    image: "coconut_briket.webp",
    altText: "Coconut Charcoal Briquettes for Shisha",
    description:
      "Coconut charcoal briquettes made from coconut shells. Ideal for burning shisha or hookah. Offers a clean and efficient burn.",
    specification: {
      grade: "Premium",
      shape: "Cube shape",
      material: "Coconut shell charcoal",
      burningTime: "2-3 hours",
    },
  },
  {
    id: "product6",
    name: "Binchotan Coffee Wood",
    image: "binchotan.webp",
    altText: "High-quality Binchotan Coffee Wood",
    description:
      "High-quality Binchotan coffee wood charcoal. Often used for cooking, water purification, deodorizing, and moisture absorption due to its clean, long-lasting, and stable burning.",
    specification: {
      grade: "Premium",
      shape: "Hexagonal shape",
      material: "Coffee wood",
      burningTime: "2.5 hours",
    },
  },
  {
    id: "product7",
    name: "Fingers Briquettes",
    image: "finger.webp",
    altText: "Efficient Fingers Briquettes",
    description:
      "Efficient and environmentally friendly fingers briquettes made from compressed coconut charcoal. Produce high heat and are easy to use.",
    specification: {
      grade: "Premium",
      shape: "Cylinder shape",
      material: "Coconut shell charcoal",
      burningTime: "1.5 hours",
    },
  },
  {
    id: "product8",
    name: "Pillows Briquette",
    image: "pillow.webp",
    altText: "Pillow Shaped Coconut Charcoal Briquette",
    description:
      "Premium coconut charcoal briquettes, designed specifically for barbecue enthusiasts. Ensure consistent heat for extended cooking periods.",
    specification: {
      grade: "Premium",
      shape: "Pillow Shaped",
      material: "Charcoal coconut shell",
      burningTime: "2 hours",
    },
  },
  {
    id: "product9",
    name: "Rectangle Briquette",
    image: "rectangle.avif",
    altText: "Rectangle Charcoal Briquettes",
    description:
      "Rectangular shaped charcoal briquettes made from pure wood powder. Specially designed to ensure stable and long-lasting burning, suitable for all kinds of cooking and grilling purposes.",
    specification: {
      grade: "AB, ABC, CD, DE",
      shape: "Rectangle",
      material: "Pure sawdust",
      burningTime: "5-6 hours",
    },
  },
];

export const Product = () => {
  return (
    <section id="product" className="pt-24">
      <div className="container mx-auto">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-3 text-2xl font-semibold text-center"
        >
          Our Charcoal Products - Wood Charcoal, Briquettes, and More
        </motion.h1>
        <div id="product-container" className="flex justify-center">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                specification={product.specification}
              ></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
