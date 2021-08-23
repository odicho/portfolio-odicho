import React, { createContext, useState } from "react";
import "./App.css";
import hamburgerMenu from "./assets/images/menu.svg";
import MobileNav from "./mobile-navbar/MobileNavbar";

export const MobileNavContext = createContext();

const App = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <MobileNavContext.Provider value={{ showMobileNav, toggleMobileNav }}>
      <div className="imge">
        <img
          onClick={() => toggleMobileNav()}
          className="hamburger"
          src={hamburgerMenu}
          alt=""
        />
      </div>
      <div className="showMobileNav">{showMobileNav && <MobileNav />}</div>
    </MobileNavContext.Provider>
  );
};

export default App;
