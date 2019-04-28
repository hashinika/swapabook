import { connect } from 'react-redux';
import NavigationComponent from './NavigationComponent';
import {navigateToPage} from '../../thunks/navigation.thunk';
function mapStateToProps(state) {
  return {
  };
}

const mapDispatchToProps = dispatch => {
  return {
    navigate: (pageName) => {
      dispatch(navigateToPage(pageName));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (NavigationComponent);