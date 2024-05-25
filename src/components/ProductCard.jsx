import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

export const ProductCard = ({
  id,
  name,
  description,
  image,
  specification,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
    >
      <div className="border p-5 bg-white shadow rounded-lg mt-2 max-w-[400px] ">
        <img
          src={`./products/${image}`}
          className="w-[300px] sm:h-[300px] mx-auto"
          alt=""
        />
        <h1 className="font-semibold text-xl">{name}</h1>
        <p className="text-light text-justify leading-relaxed h-[200px] sm:h-[150px]">
          {description}
        </p>
        <button
          onClick={() => document.getElementById(id).showModal()}
          className="bg-gray-950 px-4 py-3 rounded active:scale-95 transition-all ease-in-out text-white mt-5 flex items-center gap-2"
        >
          <h1>Detail product</h1>
          <i className="bx bx-show text-[24px]"></i>
        </button>
      </div>
      <dialog id={id} className="modal">
        <div className="modal-box w-10/12 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="sm:flex ">
            <div>
              <h3 className="font-semibold text-2xl">{name}</h3>
              <img src={`./products/${image}`} className="w-[300px]" alt="" />
              <p className="py-4 text-justify sm:w-[500px]">{description}</p>
            </div>
            <div className="sm:mt-10">
              <h1 className="font-semibold text-xl mb-2">Specification</h1>
              <div className="grid grid-cols-1">
                <div className="grid grid-cols-2">
                  <div className="border w-full p-2">Grade</div>
                  <div className="border w-full p-2">{specification.grade}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="border w-full p-2">Shape</div>
                  <div className="border w-full p-2">{specification.shape}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="border w-full p-2">Material</div>
                  <div className="border w-full p-2">
                    {specification.material}
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="border w-full p-2">Burning Time</div>
                  <div className="border w-full p-2 flex flex-wrap">
                    {specification.burningTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </motion.div>
  );
};
