import React from "react";
import headerLogo from "../assets/images/header-logo.svg";
// import { hamburger } from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";
const Nav = () => {
  return (
    <header className="padding-x py-8 w-full absolute z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img
            src={hamburger}
            alt=""
            width={25}
            height={25}
            className="lg:hidden"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
