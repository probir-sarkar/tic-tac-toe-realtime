import { useEffect } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { io } from "socket.io-client";
import Game from "@/components/gameboard/game";

function Index() {
  const socket = io("http://localhost:8010/tic-tac-toe");
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
  }, []);
  return <Game />;
}

export const Route = createLazyFileRoute("/multiplayer")({
  component: Index,
});
