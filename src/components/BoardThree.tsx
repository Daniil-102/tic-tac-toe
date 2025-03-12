import React from 'react';
import './styles.scss';
import x from './../images/x.svg';
import o from './../images/o.svg';
import { Tile } from './Tile.tsx';
import { Player } from '../types.ts';
import { Modal } from './Modal.tsx';

interface Props {
  board: (Player | null)[];
  handleMove: (tileIndex: number) => void;
  currentPlayer: Player;
  winner: Player | 'draw' | null;
}

export const BoardThree: React.FC<Props> = ({ board, handleMove, winner }) => {
  return (
    <div className='board_container'>
      <div className='board'>
        {board.map((tile, tileIndex) => {
          const isBottomBorder = [0, 1, 2, 3, 4, 5].includes(tileIndex);
          const isRightBorder = [0, 1, 3, 4, 6, 7].includes(tileIndex);

          return (
            <Tile
              key={tileIndex}
              value={tile}
              onClick={() => handleMove(tileIndex)}
              isDisabled={!!winner}
              className={`${isBottomBorder ? 'border-bottom-three' : ''} 
                          ${isRightBorder ? 'border-right-three' : ''}
                          three`}
            />
          );
        })}
      </div>

      {winner === 'draw' ? (
        <Modal text={"It's a draw!"} />
      ) : winner ? (
        <Modal text={`Winner: ${winner}`} />
      ) : null}
    </div>
  );
};
