import { connect } from 'react-redux';
import HomeHeaderComponent from './HomeHeaderComponent';
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


export default connect(mapStateToProps, mapDispatchToProps) (HomeHeaderComponent);