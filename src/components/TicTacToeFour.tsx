import React, { useState } from 'react';
import './styles.scss';
import { Player } from '../types.ts';
import { checkWinnerFour, PLAYER_X } from '../utils/checkWinner.ts';
import { BoardFour } from './BoardFour.tsx';
import { BackButton } from './BackButton.tsx';

export const TicTacToeFour = () => {
  const [board, setBoard] = useState<(Player | null)[]>(Array(16).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>(PLAYER_X);
  const [winner, setWinner] = useState<Player | 'draw' | null>(null);
  const [moves, setMoves] = useState<number[]>([]);
  const [tileToClear, setTileToClear] = useState<number | null>(null);

  const handleMove = (tileIndex: number) => {
    if (winner || board[tileIndex]) return;

    const newBoard = [...board];
    const newMoves = [...moves];

    newBoard[tileIndex] = currentPlayer;
    newMoves.push(tileIndex);

    if (newMoves.length > 8) {
      const oldestMove = newMoves[0];
      if (oldestMove !== undefined) newBoard[oldestMove] = null;
      newMoves.shift();
    }

    if (newMoves.length > 7) {
      setTileToClear(newMoves[0]);
      console.log(newMoves[newMoves.length - 7]);
    }

    setMoves(newMoves);
    setWinner(checkWinnerFour(newBoard));
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  return (
    <div className='background'>
      <BackButton />
      <h1 className='title'>4x4 Tic-Tac-Toe</h1>
      {!winner && (
        <div className='current-player'>{`Current Player: ${currentPlayer}`}</div>
      )}
      <BoardFour
        board={board}
        handleMove={handleMove}
        winner={winner}
        tileToClear={tileToClear}
      />
    </div>
  );
};
