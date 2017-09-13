import { CHOOSE_TILE } from '../../actions/game';

const initialState = {
  turn: 'x',
  board: ['', '', '', '', '', '', '', '', '']
};

export default function game(state = initialState, action) {
  switch(action.type) {
    case CHOOSE_TILE:
      const board = state.board.slice(0);
      board[action.tile] = state.turn;
      return Object.assign({}, {
        turn: state.turn === 'x' ? 'o' : 'x',
        board
      });
    default:
      return state;
  }
};
