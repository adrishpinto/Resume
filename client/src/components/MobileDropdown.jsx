import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const MobileDropdown = ({ nav, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    { value: "About", label: "About" },
    { value: "Technical", label: "Technical" },
    { value: "Education", label: "Education" },
    { value: "Contacts", label: "Contacts" },
  ];
  const foundOption = options.find((option) => option.value == nav);

  return (
    <div className="text-left sm:hidden relative mt-5">
      <div
        className="bg-black text-2xl  text-cyan-500 rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          {
            <div className="py-2 px-4 text-center flex items-center active:text-cyan-500 hover:text-cyan-500  ">
              {foundOption ? foundOption.label : "Select"}
            </div>
          }
          <span>
            <MdKeyboardArrowDown />
          </span>
        </div>

        {isOpen && (
          <div className="absolute bg-black border border-white text-cyan-500 rounded-md w-full mt-1 z-10">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  handleChange(option.value);
                  setIsOpen(false);
                  setNav(option.value);
                }}
                className="py-2 px-4 text-sm cursor-pointer hover:bg-gray-700"
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileDropdown;
