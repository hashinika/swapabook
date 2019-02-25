
import { SET_PLACE_DATA, SET_SELECTED_LOCATION, SET_SELECTED_DATETIME } from '../actions/swap.actions';

export const INITIAL_STATE = {
  locationList:[],
  selectedLocation: {},
  selectedDateTime: {}
};

export function swaps (state = INITIAL_STATE, action ) {
  switch (action.type) {
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
      console.log('HDV SET_SELECTED_DATETIME called: ', action.payload);
      return {
        ...state,
        selectedDateTime: action.payload
      }
    }
    default: {
      return state;
    }
  }
}