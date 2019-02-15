
import { SET_BOOK_DATA, SET_COLLECTION_DATA, SET_SWIPE_LIST, SET_MATCH_BOOK_DATA, RESET_MATCH_BOOK_DATA } from '../actions/book.details.actions';

export const INITIAL_STATE = {
  volumeInfo : {},
  collection: [],
  swipeList: [],
  matchBookData: {}
};

export function books (state = INITIAL_STATE, action ) {
  switch (action.type) {
    case SET_SWIPE_LIST: {
      return {
        ...state,
        swipeList: action.payload
      };
    }
    case SET_BOOK_DATA: {
      return {
        ...state,
        volumeInfo: action.payload
      };
    }
    case SET_COLLECTION_DATA : {
      return {
        ...state,
        collection: action.payload
      }
    }
    case SET_MATCH_BOOK_DATA: {
      return {
        ...state,
        matchBookData: action.payload
      }
    }
    case RESET_MATCH_BOOK_DATA: {
      return {
        ...state,
        matchBookData: INITIAL_STATE.matchBookData
      }
    }
    default: {
      return state;
    }
  }
}