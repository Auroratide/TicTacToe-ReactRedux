import axios from 'axios';

export function getTile(turn, board) {
  return axios.get('/tictactoe', {
    headers: {
      'Accept': 'application/json'
    },
    params: { turn, board: board.join(',') }
  }).then(res => res.data.tile);
}
