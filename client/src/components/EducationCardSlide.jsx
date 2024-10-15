import { motion } from "framer-motion";
import { useState } from "react";

function EducationCardSlide({ name, course, marks, year, bg }) {
  const [isVisible, setVisible] = useState(false); // State for back side visibility

  const handleToggle = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="relative w-64 h-40 cursor-pointer" onClick={handleToggle}>
      {/* Front side */}
      <motion.div
        className={`absolute w-full h-full flex flex-col items-center justify-center text-white text-xl rounded-xl ${bg} transition-all duration-300`}
        initial={{ opacity: 1 }}
        animate={{ x: isVisible ? "0%" : "0%", opacity: isVisible ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        style={{ backfaceVisibility: "hidden" }}
      >
        <div>{name}</div>
        <div className="font-thin text-lg">{year}</div>
      </motion.div>

      {/* Back side */}
      <motion.div
        className="absolute w-full h-full rounded-xl bg-black border flex flex-col items-center justify-center text-white text-xl"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: isVisible ? "0%" : "-100%", opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ backfaceVisibility: "hidden" }}
      >
        <div>{course}</div>
        <div>{marks}</div>
      </motion.div>
    </div>
  );
}

export default EducationCardSlide;
