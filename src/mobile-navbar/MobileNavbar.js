import React, { useContext, useEffect } from "react";
import "./MobileNavbar.css";
import hamburgerMenu from "../assets/images/menu.svg";
import { MobileNavContext } from "../App";

const MobileNav = () => {
  const { toggleMobileNav } = useContext(MobileNavContext);

  const closeOnResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      toggleMobileNav();
    }
  };

  useEffect(() => {
    console.log("use effect");
    window.addEventListener("resize", closeOnResize);

    return () => {
      window.removeEventListener("resize", closeOnResize);
    };
  }, []);

  return (
    <div className="navbar-mobile">
      <img
        onClick={() => toggleMobileNav()}
        className="hamburger"
        src={hamburgerMenu}
        alt=""
      />
      <nav>
        <ul>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#">Experience</a>
          </li>
          <li>
            <a href="/#">Work</a>
          </li>
          <li>
            <a href="/#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
