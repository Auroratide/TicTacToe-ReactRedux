import * as Actions from './actions';

export function playerChooseTile(tileNumber) {
  return {
    type: Actions.PLAYER_CHOOSE_TILE,
    tile: tileNumber
  };
}
