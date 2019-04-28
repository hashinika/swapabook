import { connect } from 'react-redux';
import MeetingComponent from './MeetingComponent';
import {navigateToPage} from '../../thunks/navigation.thunk';
import {fetchMeetingData, handleApprove} from '../../thunks/swap.thunk';
import {showHideAcceptModal} from '../../actions/swap.actions';
function mapStateToProps(state) {
  return {
    swapDetails: state.swaps,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    navigate: (pageName) => {
      dispatch(navigateToPage(pageName));
    },
    fetchMeetingData: () => {
      dispatch(fetchMeetingData());
    },
    showHideAcceptModal: (showModal) => {
      dispatch(showHideAcceptModal())
    },
    handleApprove:(meetingId) => {
      dispatch(handleApprove(meetingId));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (MeetingComponent);