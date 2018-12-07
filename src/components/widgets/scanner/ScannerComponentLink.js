import { connect } from 'react-redux';
import ScannerComponent from './ScannerComponent';
import {testLogin} from '../../../actions/user.login.actions';

function mapStateToProps(state) {
  return {
    testValue: state.user.test
  };
}

const mapDispatchToProps = dispatch => {
  return {
    testLogin: (payload) => {
      dispatch(testLogin(payload));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (ScannerComponent);