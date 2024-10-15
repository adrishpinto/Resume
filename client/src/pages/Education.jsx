import React, { useState } from "react";
import { motion } from "framer-motion";
import EducationCard from "../components/EducationCard";
import EducationCardSlide from "../components/EducationCardSlide";
const Education = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <div className="block  text-center mb-8 mt-2 text-3xl font-thin w-full ">
        Click on Cards to view more information.
      </div>
      <div className="h-40 flex items-center justify-center gap-5 flex-col sm:flex-row space-y-5 mt-10 mb-10 sm:space-y-0 sm:mt-0 bg-black w-full h-full">
        <EducationCardSlide
          name="Imarticus Course"
          bg="bg-gradient-to-r from-cyan-600 to-indigo-600"
          year="2023-2024"
          course="FullStack Developer"
          marks="73%"
        />
        <EducationCard
          name="St.Josephs University"
          bg="bg-gradient-to-r from-indigo-600 to-violet-600"
          year="(2020-2023)"
          course="BCA"
          marks="70%"
        />
        <EducationCard
          name="CMR National PU College"
          bg="bg-gradient-to-r from-violet-600 to-purple-600"
          year="(2019)"
          course="PCMC"
          marks="72%"
        />
        <EducationCard
          name="Legacy School"
          bg="bg-gradient-to-r from-purple-600 to-fuchsia-600 "
          year="(2017)"
          marks="80%"
          course="IGCSE"
        />
      </div>
    </div>
  );
};

export default Education;
