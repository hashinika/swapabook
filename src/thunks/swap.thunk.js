import {get, post} from "../_helpers/index";
import {showError} from '../actions/error.actions';
import {setPlaceData, setPendingMeetings, myApprovedOrPendingMeetings, showHideAcceptModal} from '../actions/swap.actions';
import { NavigationActions } from 'react-navigation';
import * as config from '../config/config.json';
import {setLoader} from "../actions/user.login.actions";

export const fetchLocations = ({searchValue, position}) => dispatch => {
  get(config.GOOGLE.GOOGLE_PLACES
      .replace('{API_KEY}', config.GOOGLE.API_KEY)
      .replace('{LAT}', position.latitude)
      .replace('{LNG}', position.longitude)
      .replace('{searchValue}', searchValue))
    .then(response => {
      if (response[0] === 200) {
        dispatch(setPlaceData(response[1].results));
      } else {
        dispatch(dispatch(showError({
          message: response[1].reason
        })));
        console.log('Error:', response[0], response[1].reason);
      }
    })
    .catch(error => {
      console.log('Error: ', error);
    });
};

export const setMeetup = (payload) => dispatch => {
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

  post(config.BASE_URL+config.SWAP.SET_MEETUP, body)
    .then(response => {
      if (response[0] === 200) {
        dispatch(NavigationActions.navigate({ routeName: 'Home' }));
      } else {
        dispatch(dispatch(showError({
          message: response[1].reason
        })));
      }
    })
    .catch(error => {
      dispatch(dispatch(showError({
        message: 'Server Error Occurred'
      })));
      console.log(error);
    });
};

export const fetchMeetingData = (payload) => dispatch => {
  dispatch(setLoader(true));
  // getApprovalPendingOrPendingMeetupsForMe
  get(config.BASE_URL+config.MEETING.getApprovalPendingOrPendingMeetupsForMe)
    .then(response => {
      if (response[0] === 200) {
        dispatch(setPendingMeetings(response[1]));
      }

      //myApprovedOrPendingMeetings
      get(config.BASE_URL+config.MEETING.myApprovedOrPendingMeetings)
          .then(myApprovedOrPendingMeetingsObj => {
            if (myApprovedOrPendingMeetingsObj[0] === 200 && myApprovedOrPendingMeetingsObj[1].length > 0) {
              dispatch(myApprovedOrPendingMeetings(myApprovedOrPendingMeetingsObj[1]));
              dispatch(setLoader(false));
              dispatch(showHideAcceptModal(false));
            }
          })
      //
    })
    .catch(error => {
      console.log(error);
    });

  
};

export const handleApprove  = (payload) => dispatch => {
  
  const body = {
    meetingId: payload,
  };
  
  post(config.BASE_URL+config.MEETING.acceptMeetup, body)
    .then(response => {
      if (response[0] === 200) {
      } else {
        dispatch(dispatch(showError({
          message: response[1].reason
        })));
      }
    })
    .catch(error => {
      dispatch(dispatch(showError({
        message: 'Server Error Occurred'
      })));
      console.log(error);
    });
};