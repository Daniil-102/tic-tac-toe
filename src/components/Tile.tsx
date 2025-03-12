import React from 'react';
import x from './../images/x.svg';
import o from './../images/o.svg';
import { Player } from '../types.ts';

interface Props {
  value: Player;
  onClick: () => void;
  isDisabled: boolean;
  className?: string;
}

export const Tile: React.FC<Props> = ({
  value,
  onClick,
  isDisabled,
  className,
}) => {
  return (
    <div
      className={`tile ${isDisabled ? 'disabled' : ''} ${className}`}
      onClick={isDisabled ? undefined : onClick}
    >
      {value && (
        <img className='tile_img' src={value === 'X' ? x : o} alt='icon' />
      )}
    </div>
  );
};
