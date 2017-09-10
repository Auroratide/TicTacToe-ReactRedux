import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    board: state.board
  };
};

export default connect(mapStateToProps);
