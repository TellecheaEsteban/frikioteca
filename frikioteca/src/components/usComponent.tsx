import React from "react";
import CardComponent from "./card";

function UsComponent() {
  return (
    <div
      id="us"
      className="flex flex-col justify-around py-10 w-11/12 scroll-mt-header"
    >
      <div className="text-frikiBlue w-full text-center text-2xl my-10 bg-frikiWhite bg-opacity-65 font-impact">
        Abierto de Martes a domingos / 16 a 00 HS.
      </div>
      <div className="flex xl:justify-evenly flex-col xl:flex-row items-center">
        <CardComponent />
        <div className="w-1/2 text-frikiBlue bg-frikiWhite bg-opacity-65 flex flex-col justify-center">
          <h2 className="text-2xl py-5">¡Bienvenidos a La Frikioteca!</h2>
          <p className="font-impact">
            Un espacio de frikis para frikis, pensado de forma única para que
            disfrutes de lo que más te gusta con tus amigos y conocidos. Más que
            un espacio, más que una casa de juegos... Un lugar para que te
            sientas parte y disfrutes desde un café, una cerveza con amigos,
            hasta las hojas de un libro en tus manos... La frikioteca, mucho más
            que un espacio, un lugar de encuentro para fans.
          </p>
          <h2 className="text-2xl py-5">✨ Conoce a Nuestro Equipo:</h2>
          <p>
            En La Frikioteca, cada miembro de nuestro equipo es un experto en
            juegos y un entusiasta de la cultura friki. Desde los conocedores de
            juegos de mesa hasta los amantes de los videojuegos, estamos aquí
            para guiarte y ayudarte a encontrar el juego perfecto para ti. ¡No
            dudes en preguntarles sobre sus favoritos o pedir recomendaciones!
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-frikiBlue w-full text-center text-2xl my-10 bg-frikiWhite bg-opacity-65 font-impact">
          Nuestro Menu !
        </h2>
        <a
          className="text-frikiBlue text-center"
          href="https://drive.google.com/file/d/1fCaDO-HrZt6titUhtunUgEZqC_AkIe9K/view?usp=drive_link"
        >
          <img className="w-52" src="/images/qr-code.png" alt="QR menu" />
        </a>
        <p className="text-frikiBlue w-full text-center text-2xl my-10 bg-frikiWhite bg-opacity-65 font-impact">
          Haz click en el QR para descargarlo o escanéalo!
        </p>
      </div>
    </div>
  );
}

export default UsComponent;
