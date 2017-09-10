import { expect } from 'chai';
import game from './game';
import { chooseTile } from './creators';

describe('game reducer', () => {
  let state;

  describe('CHOOSE_TILE', () => {
    it('should update the board with the x mark when it is x\'s turn', () => {
      state = {
        turn: 'x',
        board: ['', '', '', '', '', '', '', '', '']
      };

      expect(
        game(state, chooseTile(1))
      ).to.deep.equal({
        turn: 'o',
        board: ['', 'x', '', '', '', '', '', '', '']
      });
    });
  });
});
