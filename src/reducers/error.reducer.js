import { SHOW_ERROR } from '../actions/error.actions';

export const INITIAL_STATE = {
  errorMessage: undefined
};

export function errors (state = INITIAL_STATE, action ) {
  switch (action.type) {
    case SHOW_ERROR: {
      return {
        ...state,
        errorMessage: action.payload.message
      };
    }
    default: {
      return state;
    }
  }
}