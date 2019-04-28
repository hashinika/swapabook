
export const SET_PLACE_DATA = 'SET_PLACE_DATA';

export function setPlaceData (payload) {
  return { type: SET_PLACE_DATA , payload}
}

export const SET_PENDING_MEETINGS = 'SET_PENDING_MEETINGS';

export function setPendingMeetings (payload) {
  return { type: SET_PENDING_MEETINGS , payload}
}

export const SET_MY_APPROVAL_OWNED_MEETINGS = 'SET_MY_APPROVAL_OWNED_MEETINGS';

export function myApprovedOrPendingMeetings (payload) {
  return { type: SET_MY_APPROVAL_OWNED_MEETINGS , payload}
}


export const SET_SELECTED_LOCATION = 'SET_SELECTED_LOCATION';

export function setSelectedLocation (payload) {
  return { type: SET_SELECTED_LOCATION , payload}
}

export const SET_SELECTED_DATETIME = 'SET_SELECTED_DATETIME';

export function setSelectedDateTime (payload) {
  return { type: SET_SELECTED_DATETIME , payload}
}


export const SHOW_HIDE_ACCEPT_MODAL = 'SHOW_HIDE_ACCEPT_MODAL';
// hide true ;
export function showHideAcceptModal (payload) {
  return { type: SHOW_HIDE_ACCEPT_MODAL, payload}
}