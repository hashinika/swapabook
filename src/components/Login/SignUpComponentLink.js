import { connect } from 'react-redux';
import SignUpComponent from './SignUpComponent';
import {signup}from '../../thunks/user.login.thunk.js';
import {navigateToPage} from '../../thunks/navigation.thunk';

function mapStateToProps(state) {
  return {
    errorMessage: state.errors.errorMessage
  };
}

const mapDispatchToProps = dispatch => {
  return {
    signup: (payload) => {
      dispatch(signup(payload));
    },
    navigate: (pageName) => {
      dispatch(navigateToPage(pageName));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (SignUpComponent);