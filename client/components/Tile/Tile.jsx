import React from 'react';
import PropTypes from 'prop-types';

const Tile = ( {
  mark,
  onSelect
} ) => <div className='tile' onClick={onSelect}>
  {mark}
</div>;

Tile.propTypes = {
  mark: PropTypes.oneOf(['x', 'o', '']),
  onSelect: PropTypes.func
};

Tile.defaultProps = {
  mark: ''
};

export default Tile;
