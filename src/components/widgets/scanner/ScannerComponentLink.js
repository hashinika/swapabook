import { connect } from 'react-redux';
import ScannerComponent from './ScannerComponent';
import {testLogin} from '../../../actions/user.login.actions';
import {fetchBookDetails} from '../../../thunks/book.details.thunk';
import { NavigationActions } from 'react-navigation';

function mapStateToProps(state) {
  return {
    testValue: state.user.test,
    volumeInfo: state.books.volumeInfo
  };
}

const mapDispatchToProps = dispatch => {
  return {
    testLogin: (payload) => {
      dispatch(testLogin(payload));
    },
    fetchBookDetails: (payload) => {
      dispatch(fetchBookDetails(payload));
    },
    testFetchBookDetails: () => {
      ////9781451648546
      dispatch(fetchBookDetails('1234567890213'));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (ScannerComponent);