"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MobileHeader from "./mobileHeader";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`p-4 transition-transform duration-700 w-full ${
        isScrolled || isMobile
          ? "animate-header-slide-down bg-frikiYellow text-frikiBlue fixed top-0 z-50"
          : "bg-transparent text-frikiWhite top-0 z-50 absolute"
      }`}
    >
      {isMobile ? (
        <div className="">
          <MobileHeader />
        </div>
      ) : (
        <li className="flex items-center gap-10 justify-center">
          <a href="/#events">
            <ul
              className={`relative cursor-pointer font-bold px-2 group ${
                isScrolled ? "hover:text-frikiWhite" : "hover:text-frikiBlue"
              }`}
            >
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-frikiWhite transition-all ease-in-out group-hover:w-full`}
              ></span>
              EVENTOS
            </ul>
          </a>
          <a href="/#games">
            <ul
              className={`relative cursor-pointer font-bold px-2 group ${
                isScrolled ? "hover:text-frikiWhite" : "hover:text-frikiBlue"
              }`}
            >
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-frikiWhite transition-all ease-in-out group-hover:w-full`}
              ></span>
              LUDOTECA
            </ul>
          </a>

          <ul>
            <a href="/">
              <Image
                src="/images/FKTlogo.svg"
                alt="Logo"
                width={60}
                height={60}
                priority
              />
            </a>
          </ul>
          <a href="/#us">
            <ul
              className={`relative cursor-pointer font-bold px-2 group ${
                isScrolled ? "hover:text-frikiWhite" : "hover:text-frikiBlue"
              }`}
            >
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-frikiWhite transition-all ease-in-out group-hover:w-full`}
              ></span>
              NOSOTROS
            </ul>
          </a>
          <a href="/#contact">
            <ul
              className={`relative cursor-pointer font-bold px-2 group ${
                isScrolled ? "hover:text-frikiWhite" : "hover:text-frikiBlue"
              }`}
            >
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-frikiWhite transition-all ease-in-out group-hover:w-full`}
              ></span>
              CONTACTO
            </ul>
          </a>
        </li>
      )}
    </div>
  );
}

export default Header;
