import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const text = "FullStack Developer ";
  const speed = 70;
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => {
          return prev + 1;
        });
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [index, text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, [index]); //with index it will only blink once fulltyped

  return (
    <h1 className="text-4xl font-thin text-white mt-5 w-96  text-center sm:text-left">
      {displayedText}
      {showCursor && (
        <span className="border-r-2 border-white animate-blink"></span>
      )}
    </h1>
  );
};

export default TypingEffect;
