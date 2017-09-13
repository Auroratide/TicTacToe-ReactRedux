import { expect } from 'chai';
import { call, put, takeEvery, select } from 'redux-saga/effects';
import { getTile } from '../../api/tictactoe';
import {
  chooseTile,
  playerChooseTile
} from '../../actions/game';
import { playerChooseTile as playerChooseTileSaga } from './game';

describe('game sagas', () => {
  let state;

  describe('PLAYER_CHOOSE_TILE', () => {
    it('should set the tile and then play the API\'s choice', () => {
      state = {
        game: {
          turn: 'x',
          board: ['x', '', 'o', '', '', '', '', '', '']
        }
      };

      const gen = playerChooseTileSaga(playerChooseTile(1));
      expect(gen.next().value).to.deep.equal(put(chooseTile(1)));
      gen.next();
      expect(gen.next(state.game).value).to.deep.equal(call(getTile, 'x', ['x', '', 'o', '', '', '', '', '', '']));
      expect(gen.next(3).value).to.deep.equal(put(chooseTile(3)));
      expect(gen.next().done).to.be.true;
    });
  });
});
