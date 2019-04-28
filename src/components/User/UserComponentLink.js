import { connect } from 'react-redux';
import UserComponent from './UserComponent';
import {logout, getUser}from '../../thunks/user.login.thunk.js';
import {navigateToPage} from '../../thunks/navigation.thunk';

function mapStateToProps(state) {
  return {
    errorMessage: state.errors.errorMessage,
    userDetails: state.user.userDetails
  };
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    },
    getUser: () => {
      dispatch(getUser());
    },
    navigate: (pageName) => {
      dispatch(navigateToPage(pageName));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (UserComponent);