import { connect } from 'react-redux';

const mapStateToProps = state => {
  console.log(state);
  return {
    board: state.game.board
  };
};

export default connect(mapStateToProps);
