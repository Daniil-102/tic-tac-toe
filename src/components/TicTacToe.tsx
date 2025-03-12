import React, { useState } from 'react';
import './styles.scss';
import { Player } from '../types.ts';
import { checkSmallBoardWinner, PLAYER_X } from '../utils/checkWinner.ts';
import { BoardThree } from './BoardThree.tsx';
import { BackButton } from './BackButton.tsx';

export const TicTacToe = () => {
  const [board, setBoard] = useState<(Player | null)[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>(PLAYER_X);
  const [winner, setWinner] = useState<Player | 'draw' | null>(null);

  const handleMove = (tileIndex: number) => {
    if (winner || board[tileIndex]) return;

    const newBoard = [...board];
    newBoard[tileIndex] = currentPlayer;

    const newWinner = checkSmallBoardWinner(newBoard);

    if (newWinner) {
      setWinner(newWinner);
    } else if (newBoard.every((cell) => cell !== null)) {
      setWinner('draw');
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }

    setBoard(newBoard);
  };

  return (
    <div className='background'>
      <BackButton />
      <h1 className='title'>Tic-Tac-Toe</h1>
      {!winner && (
        <div className='current-player'>{`Current Player: ${currentPlayer}`}</div>
      )}
      <BoardThree board={board} handleMove={handleMove} winner={winner} />
    </div>
  );
};
