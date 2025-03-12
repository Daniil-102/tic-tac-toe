import React, { useState } from 'react';
import './styles.scss';
import { Board } from './Board.tsx';
import { BigBoard, createBigBoard, Player } from '../types.ts';
import {
  checkBigBoardWinner,
  checkSmallBoardWinner,
  PLAYER_X,
} from '../utils/checkWinner.ts';
import { BackButton } from './BackButton.tsx';

export const MegaTicTacToe = () => {
  const [bigBoard, setBigBoard] = useState<BigBoard>(createBigBoard());
  const [currentPlayer, setCurrentPlayer] = useState<Player>(PLAYER_X);

  const handleMove = (boardIndex: number, tileIndex: number) => {
    if (bigBoard.overallWinner) return;
    const board = bigBoard.boards[boardIndex];

    if (board.winner || board.tiles[tileIndex]) return;
    if (
      bigBoard.nextBoardIndex !== null &&
      bigBoard.nextBoardIndex !== boardIndex
    )
      return;

    const newBoards = [...bigBoard.boards];
    const newTiles = [...board.tiles];
    newTiles[tileIndex] = currentPlayer;

    const newWinner = checkSmallBoardWinner(newTiles);
    newBoards[boardIndex] = { tiles: newTiles, winner: newWinner };

    let nextBoardIndex = newWinner ? null : tileIndex;
    if (newBoards[nextBoardIndex || -1]?.winner) nextBoardIndex = null;

    const overallWinner = checkBigBoardWinner(newBoards);

    setBigBoard({
      boards: newBoards,
      overallWinner,
      nextBoardIndex,
    });

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  return (
    <div className='background'>
      <BackButton />
      <h1 className='title'>(Tic Tac Toe)²</h1>
      {!bigBoard.winner && (
        <div className='current-player'>{`Current Player: ${currentPlayer}`}</div>
      )}
      <Board
        bigBoard={bigBoard}
        handleMove={handleMove}
        currentPlayer={currentPlayer}
      />
    </div>
  );
};
