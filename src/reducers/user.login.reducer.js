import { TEST_USER } from '../actions/user.login.actions';

export const INITIAL_STATE = {
  test: 0
};

export function user (state = INITIAL_STATE, action ) {
  switch (action.type) {
    case TEST_USER: {
      return {
        ...state,
        test: action.payload
      };
    }
    default: {
      return state;
    }
  }
}