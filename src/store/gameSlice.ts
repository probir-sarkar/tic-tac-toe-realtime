import { StateCreator } from "zustand";
import { PersistState } from "./index";

enum PlayerSymbol {
  X = "X",
  O = "O",
  Empty = "-",
}

export interface GameSliceState {
  username: string;
  setUsername: (newUsername: string) => void;
  board: PlayerSymbol[];
  currentPlayer: PlayerSymbol;
  makeMove: (cellIndex: number) => void;
  reset: () => void;
}
const initialState = {
  board: Array(9).fill(PlayerSymbol.Empty),
  currentPlayer: PlayerSymbol.X,
};

type GameSliceStateCreator = StateCreator<PersistState, [], [], GameSliceState>;

export const createGameSlice: GameSliceStateCreator = (set, get) => ({
  username: self.crypto.randomUUID(),
  setUsername: (newUsername: string) => set({ username: newUsername }),
  board: Array(9).fill(PlayerSymbol.Empty),
  currentPlayer: PlayerSymbol.X,
  makeMove: (cellIndex: number) => {
    const { board, currentPlayer } = get();
    const newBoard = [...board];
    if (newBoard[cellIndex] === PlayerSymbol.Empty) {
      newBoard[cellIndex] = currentPlayer;
      set({ board: newBoard, currentPlayer: currentPlayer === PlayerSymbol.X ? PlayerSymbol.O : PlayerSymbol.X });
    }
  },
  reset: () => set({ ...initialState }),
});
