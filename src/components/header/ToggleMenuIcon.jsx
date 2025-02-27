import React from "react";

const ToggleMenuIcon = ({ handleNavOnSmallDevice, src, toggleMenu }) => {
  return (
    <>
      <img
        className={`${
          handleNavOnSmallDevice ? "hidden" : "block"
        } cursor-pointer lg:hidden`}
        width="25"
        height="25"
        src={src}
        alt="Hamburger menu"
        onClick={toggleMenu}
      />
    </>
  );
};

export default ToggleMenuIcon;
