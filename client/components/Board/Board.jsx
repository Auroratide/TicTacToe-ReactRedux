import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../Tile';

const Board = ( {
  board
} ) => <div className='board'>
  <div className='row'>
    <Tile mark={board[0]} />
    <Tile mark={board[1]} />
    <Tile mark={board[2]} />
  </div>
  <div className='row'>
    <Tile mark={board[3]} />
    <Tile mark={board[4]} />
    <Tile mark={board[5]} />
  </div>
  <div className='row'>
    <Tile mark={board[6]} />
    <Tile mark={board[7]} />
    <Tile mark={board[8]} />
  </div>
</div>;

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Board;
