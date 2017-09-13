import { connect } from 'react-redux';
import { playerChooseTile } from '../../actions/game';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelect: () => dispatch(playerChooseTile(ownProps.tileNumber))
  };
};

export default connect(state => state, mapDispatchToProps);
