import { connect } from 'react-redux';
import SwapComponent from './SwapComponent';
import {resetMatchBookData} from '../../actions/book.details.actions';
import {navigateToPage} from '../../thunks/navigation.thunk';
import {fetchLocations, setMeetup} from '../../thunks/swap.thunk';
import {setSelectedLocation, setSelectedDateTime} from '../../actions/swap.actions';

function mapStateToProps(state) {
  return {
    swapDetails: state.swaps,
    matchBookData: state.books.matchBookData
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setMeetup: (payload) => {
      dispatch(setMeetup(payload));
    },
    setSelectedDateTime: (datetime) => {
      dispatch(setSelectedDateTime(datetime));
    },
    setSelectedLocation: (selectedLocation) => {
      dispatch(setSelectedLocation(selectedLocation));
    },
    fetchLocations: (searchValue) => {
      dispatch(fetchLocations(searchValue));
    },
    navigateToSwapLocationPage: (pageName) => {
      dispatch(navigateToPage(pageName));
    },
    resetMatchBookData: () => {
      dispatch(resetMatchBookData());
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (SwapComponent);