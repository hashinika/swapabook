import { TEST_USER, USER_DATA, SET_LOADER } from '../actions/user.login.actions';

export const INITIAL_STATE = {
  test: 0,
  userDetails: {},
  loaderVisible: false
};

export function user (state = INITIAL_STATE, action ) {
  switch (action.type) {
    case TEST_USER: {
      return {
        ...state,
        test: action.payload
      };
    }
    case SET_LOADER : {
      return {
        ...state,
        loaderVisible: action.payload
      };
    }
    case USER_DATA: {
      return {
        ...state,
        userDetails: action.payload
      }
    }
    default: {
      return state;
    }
  }
}