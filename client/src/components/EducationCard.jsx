import { motion } from "framer-motion";
import { useState } from "react";
function EducationCard({ name, course, marks, year, bg }) {
  const [isFlipped, setFlipped] = useState("false");
  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };
  return (
    <motion.div
      onClick={handleFlip}
      className="relative w-64 h-40 cursor-pointer perspective-1000"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      initial={{ rotateY: 0 }}
      animate={{ rotateY: isFlipped ? 0 : 180 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Front side */}
      <motion.div
        className={`absolute w-full h-40  flex flex-col items-center justify-center text-white text-xl rounded-xl ${bg} `}
        style={{ backfaceVisibility: 0 }}
      >
        <div className="">{name}</div>
        <div className="font-thin text-lg">{year}</div>
      </motion.div>

      {/* Back side */}
      <motion.div
        className="absolute w-full h-40 rounded-xl bg-black border flex flex-col items-center justify-center text-white text-xl"
        style={{
          transform: "rotateY(180deg)",
          backfaceVisibility: "hidden",
        }}
      >
        <div>{course}</div>
        <div>{marks}</div>
      </motion.div>
    </motion.div>
  );
}

export default EducationCard;
