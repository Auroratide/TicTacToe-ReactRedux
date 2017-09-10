import React from 'react';
import PropTypes from 'prop-types';

const Board = ( {
  board
} ) => <div></div>;

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.string)
};

export default Board;
