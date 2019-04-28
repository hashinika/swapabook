
import { SET_PLACE_DATA, SET_SELECTED_LOCATION, SET_SELECTED_DATETIME, SET_PENDING_MEETINGS, SET_MY_APPROVAL_OWNED_MEETINGS, SHOW_HIDE_ACCEPT_MODAL } from '../actions/swap.actions';

export const INITIAL_STATE = {
  locationList:[],
  selectedLocation: {},
  selectedDateTime: {},
  pendingMeetingData: {},
  myApprovedOrPendingMeetings: {},
  isAcceptModalOpen: false
};

export function swaps (state = INITIAL_STATE, action ) {
  switch (action.type) {
    case SET_PENDING_MEETINGS: {
      return {
        ...state,
        pendingMeetingData: action.payload
      }
    }
    case SET_MY_APPROVAL_OWNED_MEETINGS: {
      return {
        ...state,
        myApprovedOrPendingMeetings: action.payload
      }
    }
    case SET_PLACE_DATA: {
      return {
        ...state,
        locationList: action.payload
      };
    }
    case SET_SELECTED_LOCATION: {
      return {
        ...state,
        selectedLocation: action.payload
      };
    }
    case SET_SELECTED_DATETIME: {
      return {
        ...state,
        selectedDateTime: action.payload
      }
    }
    case SHOW_HIDE_ACCEPT_MODAL: {
      return {
        ...state,
        isAcceptModalOpen: action.payload
      }
    }
    default: {
      return state;
    }
  }
}