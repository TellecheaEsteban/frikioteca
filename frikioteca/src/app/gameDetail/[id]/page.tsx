"use client";
import React from "react";
import { useParams } from "next/navigation";
import GameDetailCard from "@/components/gameDetailCard";

export default async function GameDetailPage() {
  const { id } = useParams();
  return (
    <div className="bg-frikiYellow pt-24">
      <GameDetailCard id={String(id)} />
    </div>
  );
}
