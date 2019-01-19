import { connect } from 'react-redux';
import SwipeComponent from './SwipeComponent';
import {testLogin} from '../../actions/user.login.actions';
import {getSwipeList} from '../../thunks/user.login.thunk';
import {swipeRight} from '../../thunks/book.details.thunk';

function mapStateToProps(state) {
  return {
    testValue: state.user.test,
    swipeList: state.books.swipeList
  };
}

const mapDispatchToProps = dispatch => {
  return {
    testLogin: (payload) => {
      //dispatch(testLogin(payload));
    },
    getSwipeList: (payload) => {
      dispatch(getSwipeList(payload));
    },
    swipeRight: (payload) => {
      dispatch(swipeRight(payload));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (SwipeComponent);