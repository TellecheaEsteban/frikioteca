"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`p-4 transition-transform duration-700 w-full ${
        isScrolled
          ? "animate-header-slide-down bg-frikiYellow text-frikiBlue fixed top-0 z-50"
          : "bg-transparent text-frikiWhite top-0 z-50 absolute"
      }`}
    >
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
    </div>
  );
}

export default Header;
