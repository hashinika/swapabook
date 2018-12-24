
import { SET_BOOK_DATA } from '../actions/book.details.actions';

export const INITIAL_STATE = {
  volumeInfo : {}
};

export function books (state = INITIAL_STATE, action ) {
  switch (action.type) {
    case SET_BOOK_DATA: {
      return {
        ...state,
        volumeInfo: action.payload
      };
    }
    default: {
      return state;
    }
  }
}