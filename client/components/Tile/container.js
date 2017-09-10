import { connect } from 'react-redux';
import { chooseTile } from '../../reducers/game';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelect: () => dispatch(chooseTile(ownProps.tileNumber))
  };
};

export default connect(state => state, mapDispatchToProps);
