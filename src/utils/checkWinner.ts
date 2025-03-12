import { Player, SmallBoard } from '../types';

export const PLAYER_X = 'X';
export const PLAYER_O = 'O';

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkSmallBoardWinner = (
  tiles: Player[]
): Player | 'draw' | null => {
  if (
    winningCombinations.some((combo) =>
      combo.every((i) => tiles[i] === PLAYER_X)
    )
  ) {
    return PLAYER_X;
  }
  if (
    winningCombinations.some((combo) =>
      combo.every((i) => tiles[i] === PLAYER_O)
    )
  ) {
    return PLAYER_O;
  }

  return tiles.every((tile) => tile) ? 'draw' : null;
};

export const checkBigBoardWinner = (
  boards: SmallBoard[]
): Player | 'draw' | null => {
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (
      boards[a].winner &&
      boards[a].winner === boards[b].winner &&
      boards[a].winner === boards[c].winner
    ) {
      return boards[a].winner;
    }
  }

  return boards.every((board) => board.winner) ? 'draw' : null;
};

export const checkWinnerFour = (tiles: (Player | null)[]): Player | null => {
  const winningCombinations = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
  ];

  for (const combo of winningCombinations) {
    const [a, b, c, d] = combo;
    if (
      tiles[a] &&
      tiles[a] === tiles[b] &&
      tiles[a] === tiles[c] &&
      tiles[a] === tiles[d]
    ) {
      return tiles[a];
    }
  }

  return null;
};
