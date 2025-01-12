const VideoComponent = () => {
  return (
    <div>
      <video loop autoPlay muted className="w-full">
        <source src="/videos/frikivideo.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
  );
};

export default VideoComponent;
