import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
import {login}from '../thunks/user.login.thunk.js';

function mapStateToProps(state) {
  return {
    errorMessage: state.errors.errorMessage
  };
}

const mapDispatchToProps = dispatch => {
  return {
    login: (payload) => {
      dispatch(login(payload));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (LoginComponent);