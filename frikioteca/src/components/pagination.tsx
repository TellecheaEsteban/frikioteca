"use client";

import React from "react";
import Stack from "@mui/material/Stack";
import GameCard from "./gameCard";
import EmptyState from "./emptyState";

const TablePaginationGames = ({ games }: { games: any[] }) => {
  return (
    <Stack spacing={2}>
      {games.length > 0 ? (
        <div className="flex justify-evenly grid grid-cols-4 gap-4">
          {games.map((game) => (
            <GameCard
              key={game.id}
              id={game.documentId}
              name={game.name}
              description={game.description}
              people={game.people}
              image={game.image}
              alt={game.alt}
            />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </Stack>
  );
};

export default TablePaginationGames;
