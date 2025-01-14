"use client";

import React from "react";
import { useParams } from "next/navigation";
import GameDetailCard from "@/components/gameDetailCard";

export default function GameDetailPage() {
  const { id } = useParams();
  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-frikiYellow pt-24">
      <GameDetailCard id={String(id)} />
    </div>
  );
}
