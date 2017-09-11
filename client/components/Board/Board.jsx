import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../Tile';
import './style';

const Board = ( {
  board
} ) => <div className='board'>
  <div className='row'>
    <Tile mark={board[0]} tileNumber={0} />
    <Tile mark={board[1]} tileNumber={1} />
    <Tile mark={board[2]} tileNumber={2} />
  </div>
  <div className='row'>
    <Tile mark={board[3]} tileNumber={3} />
    <Tile mark={board[4]} tileNumber={4} />
    <Tile mark={board[5]} tileNumber={5} />
  </div>
  <div className='row'>
    <Tile mark={board[6]} tileNumber={6} />
    <Tile mark={board[7]} tileNumber={7} />
    <Tile mark={board[8]} tileNumber={8} />
  </div>
</div>;

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.string).isRequired
};

Board.defaultProps = {
  board: ['', '', '', '', '', '', '', '' ,'']
};

export default Board;
