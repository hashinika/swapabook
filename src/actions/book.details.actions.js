
export const SET_BOOK_DATA = 'SET_BOOK_DATA';

export function setBookData (payload) {
  return { type: SET_BOOK_DATA , payload}
}

export const SET_COLLECTION_DATA = 'SET_COLLECTION_DATA';

export function setCollectionData (payload) {
  return { type: SET_COLLECTION_DATA, payload}
}


export const SET_SWIPE_LIST = 'SET_SWIPE_LIST';

export function setSwipeList (payload) {
  return { type: SET_SWIPE_LIST, payload}
}
