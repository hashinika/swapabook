
export const SET_PLACE_DATA = 'SET_PLACE_DATA';

export function setPlaceData (payload) {
  return { type: SET_PLACE_DATA , payload}
}

export const SET_SELECTED_LOCATION = 'SET_SELECTED_LOCATION';

export function setSelectedLocation (payload) {
  return { type: SET_SELECTED_LOCATION , payload}
}

export const SET_SELECTED_DATETIME = 'SET_SELECTED_DATETIME';

export function setSelectedDateTime (payload) {
  console.log('HDV action : ', payload);
  return { type: SET_SELECTED_DATETIME , payload}
}