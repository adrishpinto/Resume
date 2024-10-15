import React from "react";
import { motion } from "framer-motion";

function About({ isActive }) {
  return (
    <motion.div
      className={`text-white transition-opacity text-left}`}
      initial="opacity-0"
      animate="opacity-100"
    >
      <div className="mx-4 sm:mx-0 ">
        <h1 class="text-4xl mb-4 font-semibold bg-gradient-to-r from-blue-500  via-purple-500 to-purple-600 inline-block text-transparent bg-clip-text ">
          About me
        </h1>
        <p className="block text-left">
          I completed my BCA at St. Joseph's University, Bangalore, and have a
          strong interest for problem-solving and creativity. I find that these
          two interest are strongly present in web development and I feel thats
          what makes me passionate about this field. The backend has majority of
          data and logic while frontend and has more creativty and design
          involved, although they both in the end require both logic and
          creativity. I am fluent in english and work well with teams.
        </p>
        <h1 class="text-4xl sm:mb-4 mb-4  mt-10 text-center sm:m-0  mx-auto font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 w-fit sm:mt-14 text-transparent bg-clip-text ">
          About Website
        </h1>
        <p className="text-left">
          The reason for this website is to make it easy to read, and access my
          projects. This website will include the live and github versions of my
          projects. Please note that ChatGPT and similar tools have not been
          used directly. All code in the projects and github can be recreated
          and explained by me.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
