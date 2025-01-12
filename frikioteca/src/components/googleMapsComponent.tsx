const GoogleMapComponent = () => {
  return (
    <div className="flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204.46013348465073!2d-57.94662018422394!3d-34.92245371210511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7718ff4260b%3A0x692a152690f520a0!2sLa%20Frikioteca!5e0!3m2!1ses-419!2sar!4v1729319048204!5m2!1ses-419!2sar"
        width="300"
        height="150"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMapComponent;
