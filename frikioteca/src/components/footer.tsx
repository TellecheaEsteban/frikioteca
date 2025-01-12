import React from "react";
import GoogleMapComponent from "./googleMapsComponent";
import ContactComponent from "./contactComponent";

function Footer() {
  return (
    <div
      id="contact"
      className="bg-frikiWhite text-frikiBlue p-4 flex gap-4 flex-col"
    >
      <div className="flex justify-around">
        <ContactComponent />
        {/* <GoogleMapComponent /> */}
      </div>
      <p className="flex justify-center py-2 border-t border-frikiBlue">
        © 2024 Frikioteca | All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
