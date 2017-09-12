import * as Actions from './actions';
import { chooseTile } from '../../reducers/game';
import { call, put, takeEvery } from 'redux-saga/effects';

function* playerChooseTile(action) {
  yield put(chooseTile(action.tile));
}

export default function* game() {
  yield takeEvery(Actions.PLAYER_CHOOSE_TILE, playerChooseTile);
}
