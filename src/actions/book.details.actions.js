
export const SET_BOOK_DATA = 'SET_BOOK_DATA';

export function setBookData (payload) {
  return { type: SET_BOOK_DATA , payload}
}

export const SET_MATCH_BOOK_DATA = 'SET_MATCH_BOOK_DATA';

export function setMatchBookData (payload) {
  return { type: SET_MATCH_BOOK_DATA , payload}
}

export const RESET_MATCH_BOOK_DATA = 'RESET_MATCH_BOOK_DATA';

export function resetMatchBookData () {
  return { type: RESET_MATCH_BOOK_DATA }
}

export const SET_COLLECTION_DATA = 'SET_COLLECTION_DATA';

export function setCollectionData (payload) {
  return { type: SET_COLLECTION_DATA, payload}
}


export const SET_SWIPE_LIST = 'SET_SWIPE_LIST';

export function setSwipeList (payload) {
  return { type: SET_SWIPE_LIST, payload}
}



export const CLOSE_MEETUP_MODAL = 'CLOSE_MEETUP_MODAL';

export function closeMeetupModal (payload) {
  return { type: CLOSE_MEETUP_MODAL, payload}
}

