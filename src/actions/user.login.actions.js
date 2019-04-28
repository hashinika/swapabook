export const TEST_USER = 'TEST_USER';

export function testLogin (payload) {
  return { type: TEST_USER , payload}
}


export const USER_DATA = 'USER_DATA';

export function setUserData (payload) {
  return { type: USER_DATA , payload}
}


export const SET_LOADER = 'SET_LOADER';

export function setLoader (payload) {
  return { type: SET_LOADER , payload}
}