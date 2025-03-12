import React from 'react';

interface Props {
  strikeClass: string;
}

export const Strike: React.FC<Props> = ({ strikeClass }) => {
  return <div className={`strike ${strikeClass}`}></div>;
};
