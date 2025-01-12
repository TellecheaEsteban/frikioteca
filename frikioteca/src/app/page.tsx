import GamesComponent from "@/components/gamesComponent";
import ImagesComponent from "@/components/imagesComponent";
import UsComponent from "@/components/usComponent";
import VideoComponent from "@/components/videoComponent";
export default function Home() {
  return (
    <div className="w-full flex flex-col items-center custom-background">
      <VideoComponent />
      <UsComponent />
      <ImagesComponent />
      <GamesComponent />
    </div>
  );
}
