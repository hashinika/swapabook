import {get, post} from "../_helpers/index";
import {showError} from '../actions/error.actions';
import {setPlaceData} from '../actions/swap.actions';
import { NavigationActions } from 'react-navigation';
import * as config from '../config/config.json';

export const fetchLocations = ({searchValue, position}) => dispatch => {
  console.log('HDV fetchLocations payload', {searchValue, position});
  
  get(config.GOOGLE.GOOGLE_PLACES
      .replace('{API_KEY}', config.GOOGLE.API_KEY)
      .replace('{LAT}', position.latitude)
      .replace('{LNG}', position.longitude)
      .replace('{searchValue}', searchValue))
    .then(response => {
      console.log('HDV API response: ', response);
      if (response[0] === 200) {
        dispatch(setPlaceData(response[1].results));
      } else {
        dispatch(dispatch(showError({
          message: response[1].reason
        })));
        console.log('HDV Error 123:', response[0], response[1].reason);
      }
    })
    .catch(error => {
      console.log('HDV error 99', error);
    });
};

export const setMeetup = (payload) => dispatch => {
  console.log('HDV payload setMeetup :', payload);
  
  const body = {
    meetingId: payload.meetingId,
    selectedDateTime: payload.selectedDateTime,
    location: {
      name: payload.selectedLocation.name,
      lat:  payload.selectedLocation.geometry.location.lat,
      lng:  payload.selectedLocation.geometry.location.lng,
      icon: payload.selectedLocation.icon
    }
  };
  
  console.log('HDV meetup body: ', body);
  post(config.BASE_URL+config.SWAP.SET_MEETUP, body)
    .then(response => {
      console.log('HDV API response: ', response);
      if (response[0] === 200) {
        console.log('HDV accessToken: ', response[1]);
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