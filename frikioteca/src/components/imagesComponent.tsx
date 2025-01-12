import Carousel from "./carrouselComponent";

export default function ImagesComponent() {
  const imagesWithLink = [
    {
      image: "/images/Imagen1.png",
      link: "https://www.instagram.com/el.umbral_/p/DCWrRJeR5hl/",
    },
    {
      image: "/images/Imagen2.png",
      link: "https://www.instagram.com/lafrikioteca/p/DCpGeIxvxR1/",
    },
    {
      image: "/images/Imagen3.png",
      link: "https://www.instagram.com/lafrikioteca/p/DBeuZhZPImr/?img_index=1",
    },
    {
      image: "/images/Imagen4.png",
      link: "https://www.instagram.com/replaytcg/p/C-51-QCx-H1/",
    },
    {
      image: "/images/Imagen5.png",
      link: "https://www.instagram.com/lafrikioteca/p/C_lzACQvNss/",
    },
  ];

  return (
    <div className="flex items-center justify-center bg-frikiWhite h-[600px]">
      <Carousel images={imagesWithLink} />
    </div>
  );
}
