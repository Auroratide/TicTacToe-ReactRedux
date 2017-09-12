import { fork } from 'redux-saga/effects';
import game from './game';

export default function* sagas() {
  yield [
    fork(game)
  ];
}
