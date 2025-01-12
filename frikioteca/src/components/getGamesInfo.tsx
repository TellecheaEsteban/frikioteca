"use client";

import React, { useState, useEffect } from "react";
import { getGamesInfo } from "@/lib/get-global-info";
import TablePaginationGames from "./pagination";
import Pagination from "@mui/material/Pagination";

const GamesPage = () => {
  const [page, setPage] = useState(1);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGames = async (pageNumber: number) => {
    setLoading(true);
    try {
      const data = await getGamesInfo({ page: pageNumber });
      setGames(data);
    } catch (error) {
      console.error("Error fetching games:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames(page);
  }, [page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      {loading ? (
        <div className="h-screen">
          <p className="text-center text-frikiBlue ">Cargando juegos...</p>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <TablePaginationGames games={games} />
          {games.length > 0 && (
            <Pagination
              count={2}
              page={page}
              onChange={handleChange}
              className="flex justify-end"
            />
          )}
        </div>
      )}
    </>
  );
};

export default GamesPage;
