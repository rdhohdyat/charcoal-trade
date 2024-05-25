import React from "react";
import { ProductCard } from "../components/ProductCard";

import { motion } from "framer-motion";
import { fadeIn } from "../variant";

const products = [
  {
    id: "product1",
    name: "Wood Charcoal",
    image: "wood_charcoal.png",
    description:
      "High-quality wood charcoal, perfect for grilling and smoking meats. Made from natural hardwood, it burns evenly and imparts a delicious smoky flavor to your food.",
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
    image: "coconut_charcoal.png",
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
    image: "sawdust.png",
    description:
      "Sawdust briquettes, crafted from compressed sawdust, offer a convenient and eco-friendly option for barbecues. They ignite quickly and provide a steady heat output, making them perfect for long grilling sessions.",
    specification: {
      grade: "AB, ABC, CD, DE",
      shape: "Hexagonal",
      material: "Compressed sawdust",
      burningTime: "1.5 hours",
    },
  },

  {
    id: "product4",
    name: "BBQ Briquette",
    image: "BBQ.png",
    description:
      "Designed specifically for barbecue enthusiasts, ensure consistent heat for extended cooking periods. Made from a blend of natural ingredients, they deliver an authentic BBQ flavor to your favorite dishes.",
    specification: {
      grade: "Premium",
      shape: "Hexagonal shape",
      material: "Coconut shell charcoal/wood charcoal",
      burningTime: "2 hours",
    },
  },

  {
    id: "product5",
    name: "Coconut Charcoal Briquette",
    image: "coconut_briket.png",
    description:
      "Coconut Charcoal Briquettes are charcoal briquettes made from coconut shells. One of the main functions of Coconut Charcoal Briquettes is to burn shisha or hookah.",
    specification: {
      grade: "Premium",
      shape: "Cube shape",
      material: "Coconut shell charcoal",
      burningTime: "2 hours",
    },
  },
  {
    id: "product6",
    name: "Binchotan Coffe Wood",
    image: "binchotan.png",
    description:
      "Binchotan Coffee Wood is high quality charcoal from coffee wood, often used for cooking, water purification, deodorizing and absorbing moisture because of its clean, long-lasting, and stable burning.",
    specification: {
      grade: "Premium",
      shape: "Hexagonal shape",
      material: "Coffe Wood",
      burningTime: "2.5 hours",
    },
  },
  {
    id: "product7",
    name: "Fingers Briquettes",
    image: "finger.png",
    description:
      "Fingres briquettes are fuel made from compressed coconut charcoal. They are efficient, environmentally friendly, produce high heat, and are easy to use.",
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
    image: "pillow.png",
    description:
      "Premium coconut charcoal briquettes, designed specifically for barbecue enthusiasts, ensure consistent heat for extended cooking ",
    specification: {
      grade: "Premium",
      shape: "Pillow Shaped",
      material: "Charcoal coconut shell",
      burningTime: "2 hours",
    },
  },
];

export default function Product() {
  return (
    <section id="product" className="pt-24">
      <div className="container mx-auto">
        <h1 className="text-center font-semibold text-2xl mb-3">
          Our Products
        </h1>
        <div id="product-container" className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
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
}
