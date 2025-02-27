import React from "react";

const Logo = ({ logo }) => {
  return (
    <a className="block w-36" href="#">
      <img
        className="block w-full h-full object-cover object-center"
        src={logo}
        alt="Logo"
      />
    </a>
  );
};

export default Logo;
