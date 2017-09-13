export const CHOOSE_TILE = 'GAME:CHOOSE_TILE';
export function chooseTile(tileNumber) {
  return {
    type: CHOOSE_TILE,
    tile: tileNumber
  };
}

export const PLAYER_CHOOSE_TILE = 'GAME:PLAYER_CHOOSE_TILE';
export function playerChooseTile(tileNumber) {
  return {
    type: PLAYER_CHOOSE_TILE,
    tile: tileNumber
  };
}
