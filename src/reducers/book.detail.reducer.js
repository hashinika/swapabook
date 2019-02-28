
import { SET_BOOK_DATA, SET_COLLECTION_DATA, SET_SWIPE_LIST, SET_MATCH_BOOK_DATA, RESET_MATCH_BOOK_DATA, CLOSE_MEETUP_MODAL } from '../actions/book.details.actions';

export const INITIAL_STATE = {
  volumeInfo : {},
  collection: [],
  swipeList: [],
  matchBookData: {},
  isModalOpen: false
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
        matchBookData: action.payload,
        isModalOpen: true
      }
    }
    case RESET_MATCH_BOOK_DATA: {
      return {
        ...state,
        matchBookData: INITIAL_STATE.matchBookData,
        isModalOpen: false
      }
    }
    case CLOSE_MEETUP_MODAL: {
      return {
        ...state,
        isModalOpen: false
      }
    }
    default: {
      return state;
    }
  }
}