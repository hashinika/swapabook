import { connect } from 'react-redux';
import SwapComponent from './SwapComponent';

import {navigateToPage} from '../../thunks/navigation.thunk';

function mapStateToProps(state) {
  return {
  };
}

const mapDispatchToProps = dispatch => {
  return {
    navigateToSwapLocationPage: (pageName) => {
      dispatch(navigateToPage(pageName));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (SwapComponent);