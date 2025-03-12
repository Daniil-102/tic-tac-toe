import React from 'react';
import './styles.scss';
import x from './../images/x.svg';
import o from './../images/o.svg';
import { Tile } from './Tile.tsx';
import { BigBoard, Player } from '../types.ts';
import { Strike } from './Strike.tsx';
import { Modal } from './Modal.tsx';

interface Props {
  bigBoard: BigBoard;
  handleMove: (boardIndex: number, tileIndex: number) => void;
  currentPlayer: Player;
}

export const Board: React.FC<Props> = ({
  bigBoard,
  handleMove,
  currentPlayer,
}) => {
  return (
    <div className='board_container'>
      <div className='big-board'>
        {bigBoard.boards.map((smallBoard, boardIndex) => {
          const isBottomBorder = [0, 1, 2, 3, 4, 5].includes(boardIndex);
          const isRightBorder = [0, 1, 3, 4, 6, 7].includes(boardIndex);

          return (
            <div
              key={boardIndex}
              className={`small-board 
                ${
                  smallBoard.winner
                    ? 'disabled'
                    : bigBoard.nextBoardIndex === boardIndex
                    ? 'active'
                    : ''
                } 
                 
                ${isBottomBorder ? 'big-border-bottom' : ''} 
                ${isRightBorder ? 'big-border-right' : ''}`}
            >
              {!!smallBoard.winner && smallBoard.winner !== 'draw' && (
                <img
                  className='winnerBoardImg'
                  src={smallBoard.winner === 'X' ? x : o}
                  alt='icon'
                />
              )}
              {smallBoard.winner === 'draw' && <div className='draw'></div>}

              {smallBoard.tiles.map((tile, tileIndex) => {
                const isSmallBottomBorder = [0, 1, 2, 3, 4, 5].includes(
                  tileIndex
                );
                const isSmallRightBorder = [0, 1, 3, 4, 6, 7].includes(
                  tileIndex
                );

                return (
                  <Tile
                    key={tileIndex}
                    value={tile}
                    onClick={() => handleMove(boardIndex, tileIndex)}
                    isDisabled={!!smallBoard.winner || bigBoard.overallWinner}
                    className={`${isSmallBottomBorder ? 'border-bottom' : ''} 
                                ${isSmallRightBorder ? 'border-right' : ''}`}
                  />
                );
              })}
            </div>
          );
        })}
      </div>

      {bigBoard.overallWinner === 'draw' ? (
        <Modal text={"It's a draw!"} />
      ) : bigBoard.overallWinner ? (
        <>
          <Strike />
          <Modal text={`Winner: ${bigBoard.overallWinner}`} />
        </>
      ) : null}
    </div>
  );
};
