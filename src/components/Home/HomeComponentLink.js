import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';

function mapStateToProps(state) {
  return {
    loaderVisible: state.user.loaderVisible
  };
}

const mapDispatchToProps = dispatch => {
  return {
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (HomeComponent);