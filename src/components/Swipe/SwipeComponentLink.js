import { connect } from 'react-redux';
import SwipeComponent from './SwipeComponent';
// import {} from '../../actions/user.login.actions';
import {getSwipeList} from '../../thunks/user.login.thunk';
import {swipeRight} from '../../thunks/book.details.thunk';
import {navigateToPage} from '../../thunks/navigation.thunk';
import {closeMeetupModal} from '../../actions/book.details.actions';

function mapStateToProps(state) {
  return {
    testValue: state.user.test,
    swipeList: state.books.swipeList,
    matchBookData: state.books.matchBookData,
    isModalOpen: state.books.isModalOpen
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
    },
    navigateToSwapLocationPage: (pageName) => {
      dispatch(navigateToPage(pageName));
    },
    closeMeetupModal: () => {
      dispatch(closeMeetupModal());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (SwipeComponent);