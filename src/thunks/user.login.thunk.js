import {get, post} from "../_helpers/index";
import {setStorageValue, getStorageValue, removeStorageValue} from "../_helpers/storage.helpers";
import { NavigationActions } from 'react-navigation';
import {showError} from '../actions/error.actions';
import {setSwipeList} from '../actions/book.details.actions';
import {setUserData, setLoader} from "../actions/user.login.actions";
import * as config from '../config/config.json';

//
export const logout = () => dispatch => {
  removeStorageValue('AUTH_TOKEN');
  removeStorageValue('USER_ID');
  dispatch(NavigationActions.navigate({ routeName: 'Login' }));
};

export const login = (payload) => dispatch => {
  dispatch(setLoader(true));
  post(config.BASE_URL+config.USER.LOGIN, payload)
    .then(response => {
      if (response[0] === 200) {
        removeStorageValue('AUTH_TOKEN').then(() => {
          setStorageValue('AUTH_TOKEN', response[1].accessToken).then(() => {
            dispatch(getSwipeList({}));
            dispatch(setLoader(false));
          });
        });
        
      } else {
        dispatch(showError({
          message: response[1].reason
        }));
        
        dispatch(setLoader(false));
        console.log('Error:', response[0], response[1].reason);
      }
    })
    .catch(error => {
      dispatch(setLoader(false));
      dispatch(showError({
        message: 'Server Error Occurred'
      }));
      console.log(error);
    });
};

export const signup = (payload) => dispatch => {
  post(config.BASE_URL+config.USER.SIGNUP, {
    ...payload,
    roles: ["user"]
  })
    .then(response => {
      if (response[0] === 200) {
        removeStorageValue('AUTH_TOKEN');
        removeStorageValue('USER_ID');
        dispatch(NavigationActions.navigate({ routeName: 'Login' }));
      } else {
        dispatch(showError({
          message: response[1].reason
        }));
        console.log('Error:', response[0], response[1].reason);
      }
    })
    .catch(error => {
      dispatch(showError({
        message: 'Server Error Occurred'
      }));
      console.log(error);
    });
};

export const getUser = (payload) => dispatch => {
  get(config.BASE_URL+config.USER.USER)
    .then(response => {
      if (response[0] === 200) {
        dispatch(setUserData(response[1]))
      } else {
        dispatch(dispatch(showError({
          message: response[1].reason
        })));
        console.log('Error:', response[0], response[1].reason);
      }
      
    })
    .catch(error => {
      dispatch(dispatch(showError({
        message: 'Server Error Occurred'
      })));
      console.log(error);
    });
};

export const getSwipeList = (payload) => dispatch => {
  get(config.BASE_URL+config.BOOK.GET_SWAPS)
    .then(response => {
      if (response[0] === 200) {
        dispatch(setSwipeList(response[1]));
        dispatch(NavigationActions.navigate({ routeName: 'Home' }));
      } else {
        dispatch(showError({
          message: response[1].reason
        }));
        console.log('Error:', response[0], response[1].reason);
      }

    })
    .catch(error => {
     dispatch(showError({
        message: 'Server Error Occurred'
      }));
      console.log(error);
    });
};