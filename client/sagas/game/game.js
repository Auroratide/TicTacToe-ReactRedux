import * as Actions from './actions';
import { chooseTile } from '../../reducers/game';
import { call, put, takeEvery, select } from 'redux-saga/effects';
import { getTile } from '../../api/tictactoe';

const getGame = state => state.game;

export function* playerChooseTile(action) {
  yield put(chooseTile(action.tile));
  const game = yield select(getGame);
  const tile = yield call(getTile, game.turn, game.board);
  yield put(chooseTile(tile));
}

export default function* game() {
  yield takeEvery(Actions.PLAYER_CHOOSE_TILE, playerChooseTile);
}
