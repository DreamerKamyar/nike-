import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start ">
          <a href="/">
            <img src={footerLogo} width={150} height={46} alt="" />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium aliquam suscipit, doloribus quidem consequatur maxime ut
            iure cumque aut consequuntur!
          </p>
          <div className="flex items-center gap-5 mt-8 mb-20">
            {socialMedia.map(function (icon) {
              return (
                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                  <img src={icon.src} width={24} height={24} alt="" />
                </div>
              );
            })}
          </div>
          <div className="flex flex-1 gap-20 justify-between lg:gap-10 flex-wrap">
            {footerLinks.map(function (section) {
              return (
                <div key={section}>
                  <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                    {section.title}
                  </h4>
                  <ul>
                    {section.links.map(function (link) {
                      return (
                        <li
                          className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-coral-red cursor-pointer"
                          key={link.name}
                        >
                          <a href="">{link.name}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copey write "
            width={24}
            height={24}
            className="rounded-full"
          />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <p className="font-montserrat cursor-pointer">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
