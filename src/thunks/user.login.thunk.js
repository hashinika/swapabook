import {get, post} from "../_helpers/index";
import {setStorageValue, getStorageValue} from "../_helpers/storage.helpers";
import { NavigationActions } from 'react-navigation';
import {showError} from '../actions/error.actions';
import {setSwipeList} from '../actions/book.details.actions';
import * as config from '../config/config.json';

export const login = (payload) => dispatch => {
  post(config.BASE_URL+config.USER.LOGIN, payload)
    .then(response => {
      console.log('HDV API response: ', response);
      if (response[0] === 200) {
        console.log('HDV accessToken: ', response[1].accessToken);
        setStorageValue('AUTH_TOKEN', response[1].accessToken);
        setStorageValue('USER_ID', response[1].userId);
        dispatch(NavigationActions.navigate({ routeName: 'SwipeComponent' }));
      } else {
        dispatch(dispatch(showError({
          message: response[1].reason
        })));
        console.log('HDV Error:', response[0], response[1].reason);
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
      console.log('HDV API response GET ', response);
      if (response[0] === 200) {
        dispatch(setSwipeList(response[1]))
      } else {
        dispatch(dispatch(showError({
          message: response[1].reason
        })));
        console.log('HDV Error:', response[0], response[1].reason);
      }
      
    })
    .catch(error => {
      dispatch(dispatch(showError({
        message: 'Server Error Occurred'
      })));
      console.log(error);
    });
};