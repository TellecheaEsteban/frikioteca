"use client";
import { getGameInfo } from "@/lib/get-global-info";
import React, { useEffect, useState } from "react";
import CircularIndeterminate from "./loading";
import { GameInfo } from "@/types/types";
import Image from "next/image";

function GameDetailCard({ id }: { id: string }) {
  const [game, setGame] = useState<GameInfo | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGame = async () => {
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
      }
    };

    fetchGame();
  }, [id, game]);

  return (
    <div>
      {loading ? (
        <CircularIndeterminate />
      ) : game ? (
        <div className="flex flex-col content-center justify-center gap-5 m-auto custom-background pt-10">
          <div className="flex flex-row justify-center gap-5 ">
            <Image
              className=" content-center w-[350px] h-[350px]"
              src={game.image}
              alt={game.alt}
              width={500}
              height={500}
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
