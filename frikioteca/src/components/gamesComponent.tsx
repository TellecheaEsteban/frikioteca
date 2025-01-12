import React from "react";
import GamesPage from "./getGamesInfo";

function GamesComponent() {
  return (
    <div
      id="games"
      className="w-11/12 scroll-mt-header my-10 bg-frikiWhite bg-opacity-65 my-10 bg-frikiWhite bg-opacity-65"
    >
      <h2 className="text-frikiBlue text-center text-2xl font-impact my-10">
        Que esperar al venir a la Frikioteca
      </h2>
      <p className="text-frikiBlue text-center  font-impact my-10">
        En la Frikioteca contamos con enormes bibliotecas de juegos de mesa para
        que elijas y juegues. Tenemos todo tipo de juegos: juegos infantiles
        aptos para niños desde los 3 años, juegos de estrategia que van desde
        partidas cortas hasta juegos más largos. También ofrecemos juegos de
        fiesta, juegos para dos jugadores y juegos cooperativos. Si todo esto te
        resulta abrumador, no te preocupes, ¡nuestros Gurús de Juegos están aquí
        para ayudarte! Mientras disfrutas jugando en la Frikioteca, también
        ofrecemos servicio a la mesa desde nuestra cafetería, donde servimos
        delicioso café italiano tostado, tés de hojas sueltas, chocolate
        caliente premium, paninis frescos hechos al momento, una selección de
        acompañamientos y mucho más. Si quieres consultar nuestro menú con más
        detalle, puedes visitar nuestra página de Comida y Bebidas. Además de
        nuestra gran biblioteca de juegos, también contamos con una tienda de
        juegos de mesa. ¡Así es! Puedes llevarte a casa la increíble experiencia
        de jugar con nosotros. Reabastecemos nuestra tienda constantemente, así
        que si buscas un juego en particular, avísanos y veremos cómo podemos
        ayudarte.
      </p>
      <GamesPage />
    </div>
  );
}

export default GamesComponent;
