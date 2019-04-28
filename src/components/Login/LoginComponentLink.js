import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
import {login}from '../../thunks/user.login.thunk.js';
import {navigateToPage} from '../../thunks/navigation.thunk';
import {getSwipeList} from '../../thunks/user.login.thunk';
function mapStateToProps(state) {
  return {
    errorMessage: state.errors.errorMessage,
    loaderVisible: state.user.loaderVisible
  };
}

const mapDispatchToProps = dispatch => {
  return {
    login: (payload) => {
      dispatch(login(payload));
    },
    navigate: (pageName) => {
      dispatch(navigateToPage(pageName));
    },
    navigateToHome: () => {
      dispatch(getSwipeList({}));
      dispatch(navigateToPage('Home'));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (LoginComponent);