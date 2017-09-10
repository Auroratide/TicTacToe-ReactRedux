import * as Actions from './actions';

export function chooseTile(tileNumber) {
  return {
    type: Actions.CHOOSE_TILE,
    tile: tileNumber
  };
}
