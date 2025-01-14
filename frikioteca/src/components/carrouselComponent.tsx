"use client";
import { IoLogoInstagram } from "react-icons/io5";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import Image from "next/image";

const Carousel = ({
  images,
}: {
  images: { image: string; link?: string }[];
}) => {
  return (
    <div id="events" className="flex flex-col overflow-hidden group">
      <div className="m-auto my-5 text-frikiBlue font-impact text-2xl flex flex-col items-center">
        <p className="">
          Siguenos en Instagram para enterarte de nuestros eventos!
        </p>
        <p className=" flex flex-row justify-center items-center">
          <GoChevronRight />
          <GoChevronRight />
          <GoChevronRight />
          <a href="https://www.instagram.com/lafrikioteca/" target="_blank">
            <IoLogoInstagram
              size={64}
              className=" hover:text-[#C13584] transition-colors duration-300"
            />
          </a>

          <GoChevronLeft />
          <GoChevronLeft />
          <GoChevronLeft />
        </p>
      </div>
      <div className="flex w-screen animate-infinite-scroll hover:animation-paused">
        {[...images, ...images].map((imageSrc, i) => (
          <a
            key={i}
            href={imageSrc.link ?? "https://www.instagram.com/lafrikioteca/"}
            target="_blank"
            className="w-96 h-96 flex-shrink-0 relative"
          >
            <Image
              src={imageSrc.image}
              alt={`Image ${i}`}
              className="w-full h-full object-contain hover:brightness-75 cursor-pointer"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-lg font-bold opacity-0 hover:opacity-100 bg-black/50 transition-opacity">
              <p>Ir a Instagram </p>
              <IoLogoInstagram />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
