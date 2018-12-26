import { connect } from 'react-redux';
import SwipeComponent from './SwipeComponent';
import {testLogin} from '../../actions/user.login.actions';
import {getSwipeList} from '../../thunks/user.login.thunk';

function mapStateToProps(state) {
  return {
    testValue: state.user.test
  };
}

const mapDispatchToProps = dispatch => {
  return {
    testLogin: (payload) => {
      dispatch(testLogin(payload));
    },
    getSwipeList: (payload) => {
      dispatch(getSwipeList(payload));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (SwipeComponent);