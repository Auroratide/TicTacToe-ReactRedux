import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    board: state.game.board
  };
};

export default connect(mapStateToProps);
