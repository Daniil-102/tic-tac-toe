import React from 'react';
import './styles.scss';
import { Tile } from './Tile.tsx';
import { Player } from '../types.ts';
import { Modal } from './Modal.tsx';

interface Props {
  board: (Player | null)[];
  handleMove: (tileIndex: number) => void;
  currentPlayer: Player;
  winner: Player | 'draw' | null;
  tileToClear: number | null;
}

export const BoardFour: React.FC<Props> = ({
  board,
  handleMove,
  winner,
  tileToClear,
}) => {
  return (
    <div className='board_container'>
      <div className='board board-4x4'>
        {board.map((tile, tileIndex) => {
          const isBottomBorder = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
          ].includes(tileIndex);
          const isRightBorder = [
            0, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14,
          ].includes(tileIndex);

          const isClearing = tileToClear === tileIndex;

          return (
            <Tile
              key={tileIndex}
              value={tile}
              onClick={() => handleMove(tileIndex)}
              isDisabled={!!winner}
              className={`${isBottomBorder ? 'border-bottom' : ''} 
                          ${isRightBorder ? 'border-right' : ''}
                          ${isClearing ? 'clearing-tile' : ''}
                          four`}
            />
          );
        })}
      </div>

      {winner ? <Modal text={`Winner: ${winner}`} /> : null}
    </div>
  );
};
