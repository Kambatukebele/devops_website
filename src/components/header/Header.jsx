import { useState } from "react";
import close from "../../assets/icons/close.svg";
import hamburger from "../../assets/icons/hamburger.svg";
import ToggleMenuIcon from "./ToggleMenuIcon";
// import Logo from "./Logo";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  const [handleNavOnSmallDevice, setHandleNavOnSmallDevice] = useState(false);
  const toggleMenu = () => {
    setHandleNavOnSmallDevice(!handleNavOnSmallDevice);
  };
  return (
    <header className="w-full h-fit py-4 relative shadow-sm">
      <div className="container px-4 lg:flex lg:justify-between lg:items-center">
        <div className="flex justify-between items-center">
          <Logo extraClass="text-gray-950" />
          <div className="flex justify-center items-center lg:hidden">
            <ToggleMenuIcon
              handleNavOnSmallDevice={handleNavOnSmallDevice}
              src={hamburger}
              toggleMenu={toggleMenu}
            />
            <ToggleMenuIcon
              handleNavOnSmallDevice={!handleNavOnSmallDevice}
              src={close}
              toggleMenu={toggleMenu}
            />
          </div>
        </div>
        <Navigation handleNavOnSmallDevice={handleNavOnSmallDevice} />
      </div>
    </header>
  );
};

export default Header;
