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
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="max-w-[400px] mx-auto"
    >
      <div className="p-5 mt-2 bg-white border rounded-lg shadow">
        <img
          src={`./products/${image}`}
          className="w-[300px] h-[300px] object-cover mx-auto"
          width={300}
          height={300}
          alt={name} // Alt text for accessibility
        />
        <h2 className="mt-2 text-xl font-semibold sm:text-2xl">{name}</h2>
        <p className="text-light text-justify leading-relaxed text-sm sm:text-base h-[200px] sm:h-[150px] overflow-hidden">
          {description}
        </p>
        <button
          onClick={() => document.getElementById(id).showModal()}
          className="flex items-center gap-2 px-4 py-3 mt-5 text-white transition-all ease-in-out rounded bg-gray-950 active:scale-95"
        >
          <span>Detail product</span>
          <i className="text-xl text-white bx bx-show"></i>
        </button>
      </div>
      <dialog id={id} className="modal">
        <div className="w-10/12 max-w-4xl modal-box">
          <form method="dialog">
            <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
              ✕
            </button>
          </form>
          <div className="sm:flex">
            <div>
              <h3 className="text-xl font-semibold sm:text-2xl">{name}</h3>
              <img
                src={`./products/${image}`}
                className="w-[300px] h-[300px] object-cover mt-2"
                width={300}
                height={300}
                alt={name} // Alt text for accessibility
              />
              <p className="py-4 text-justify sm:w-[500px] text-sm sm:text-base">
                {description}
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-xl font-semibold text-center">
                Specification
              </h2>
              <div className="grid grid-cols-1 text-sm sm:text-base">
                <div className="grid grid-cols-2">
                  <div className="w-full p-2 border">Grade</div>
                  <div className="w-full p-2 border">{specification.grade}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="w-full p-2 border">Shape</div>
                  <div className="w-full p-2 border">{specification.shape}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="w-full p-2 border">Material</div>
                  <div className="w-full p-2 border">
                    {specification.material}
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="w-full p-2 border">Burning Time</div>
                  <div className="flex flex-wrap w-full p-2 border">
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
