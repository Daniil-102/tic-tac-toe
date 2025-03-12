export type Player = 'X' | 'O' | null;

export interface SmallBoard {
  tiles: Player[];
  winner: Player;
}

export interface BigBoard {
  boards: SmallBoard[];
  overallWinner: Player;
  nextBoardIndex: number | null;
}

export const createSmallBoard = (): SmallBoard => ({
  tiles: Array(9).fill(null),
  winner: null,
});

export const createBigBoard = (): BigBoard => ({
  boards: Array(9).fill(null).map(createSmallBoard),
  overallWinner: null,
  nextBoardIndex: null,
});
