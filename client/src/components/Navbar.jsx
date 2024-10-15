import React from "react";
import NavItem from "./NavItem";
import MobileDropdown from "./MobileDropdown";
import { useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nav = searchParams.get("nav") || "About";

  const handleChange = (value) => {
    setSearchParams({ nav: value });
  };

  return (
    <div className="flex flex-col items-center z-50 max-w-[1000px] w-full mx-auto ">
      <div className="my-10 hidden sm:block">
        <ul className="flex flex-row space-x-6 justify-center text-3xl">
          <NavItem
            name="About"
            onClick={() => handleChange("About")}
            isActive={nav == "About"}
          />
          <NavItem
            name="Technical"
            onClick={() => handleChange("Technical")}
            isActive={nav == "Technical"}
          />
          <NavItem
            name="Education"
            onClick={() => handleChange("Education")}
            isActive={nav == "Education"}
          />
          <NavItem
            name="Contacts"
            onClick={() => handleChange("Contacts")}
            isActive={nav == "Contacts"}
          />
        </ul>
      </div>

      <MobileDropdown nav={nav} handleChange={handleChange} />
      <div className="text-left sm:hidden relative"></div>
    </div>
  );
};

export default Navbar;
