"use client";
import { getGameInfo } from "@/lib/get-global-info";
import React, { useEffect, useState } from "react";
import CircularIndeterminate from "./loading";

function GameDetailCard({ id }: { id: string }) {
  const [game, setGame] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const [isFetching, setIsFetching] = useState(false);

  const fetchGame = async () => {
    if (isFetching) return;
    setIsFetching(true);
    setLoading(true);
    try {
      if (!game) {
        const gameInfo = await getGameInfo(id);
        setGame(gameInfo);
      }
    } catch (error) {
      console.error("Error fetching game:", error);
    } finally {
      setLoading(false);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchGame();
  }, [id]);

  return (
    <div>
      {loading ? (
        <CircularIndeterminate />
      ) : game ? (
        <div className="flex flex-col content-center justify-center gap-5 m-auto custom-background pt-10">
          <div className="flex flex-row justify-center gap-5 ">
            <img
              className=" content-center w-[350px] h-[350px]"
              src={game.image}
              alt={game.alt}
            />
            <div className="flex flex-col">
              <h1 className="text-2xl text-center text-frikiBlue bg-frikiWhite bg-opacity-65">
                {game.name}
              </h1>
              <p className="flex justify-end text-frikiBlue bg-frikiWhite bg-opacity-65">
                Para {game.people} personas
              </p>
            </div>
          </div>
          <div className="py-10 mx-10 text-frikiBlue bg-frikiWhite bg-opacity-65">
            <p>{game.description}</p>
          </div>
        </div>
      ) : (
        <CircularIndeterminate />
      )}
    </div>
  );
}

export default GameDetailCard;
