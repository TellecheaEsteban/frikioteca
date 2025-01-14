import React from "react";
import CardComponent from "./card";

function MainEventComponent() {
  return (
    <div className="flex h-[500px] text-frikiWhite">
      <div className="w-1/2 p-8 flex flex-col items-center justify-around">
        <h2 className="text-xl leading-relaxed font-impact text-frikiBlue">
          ¡Gente! Mañana tenemos noche especial de la mano de nuestros amigos de
          @fandango.periodismo
        </h2>
        <p className="text-lg leading-relaxed text-frikiBlue">
          🔥 Torneo + Gaming libre 🔥 Comida y bebida 🔥 10 de Octubre - 19 hs
          🔥 ¡Sumate a Noche Geek! ¡Vení a disfrutar de una buena tarde gamer!
          😉👌
        </p>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <CardComponent />
      </div>
    </div>
  );
}

export default MainEventComponent;
