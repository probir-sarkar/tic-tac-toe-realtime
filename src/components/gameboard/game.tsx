import { FC } from "react";
import { usePersistStore } from "@/store";

const Game: FC = () => {
  const { board: gameBoard } = usePersistStore();
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="max-w-2xl w-full max-h-[42rem] h-full">
        <div className="grid grid-cols-3 grid-rows-3 gap-2">
          {gameBoard.map((cellValue, cellIndex) => (
            <GameCell key={cellIndex} cellValue={cellValue} cellIndex={cellIndex} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface GameCellProps {
  cellValue: string;
  cellIndex: number;
}

const GameCell: FC<GameCellProps> = ({ cellValue, cellIndex }) => {
  const { makeMove } = usePersistStore();

  const handleClick = () => {
    makeMove(cellIndex);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gray-100 w-full h-full flex justify-center items-center aspect-square font-bold cursor-pointer"
    >
      {cellValue}
    </div>
  );
};

export default Game;
