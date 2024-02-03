import { create } from "zustand";
import { createGameSlice, GameSliceState } from "./gameSlice";
import { persist } from "zustand/middleware";

export type PersistState = GameSliceState;

export const usePersistStore = create<PersistState>()(
  persist(
    (...a) => ({
      ...createGameSlice(...a),
    }),
    { name: "game-store" }
  )
);
