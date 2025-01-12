import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import { TextField } from "@mui/material";
import ButtonComponent from "./material/buttonComponent";
import TextFieldComponent from "./material/textFieldComponent";

function ContactComponent() {
  return (
    <div className="flex items-center justify-around w-1/2 ">
      <ul className="flex flex-col gap-2">
        <li>
          <p>Suscríbete para recibir nuestras noticias !</p>
        </li>
        <li>
          <TextFieldComponent />
        </li>
        <li>
          <ButtonComponent content="Suscribirme" />
        </li>
      </ul>
      <ul className="flex flex-col gap-2 items-center">
        <li className="text-xl">Contactenos</li>
        <li className="">Telefono: 123456789</li>
        <li className="">e-mail: 0i8QG@example.com</li>
        <li className="">
          <InstagramIcon /> @frikioteca
        </li>
      </ul>
      <ul className="flex flex-col gap-2 items-center">
        <li className="text-xl">La Plata</li>
        <li>Calle 10 e/58 y 59</li>
        <li>N° 1267</li>
      </ul>
    </div>
  );
}

export default ContactComponent;
