import {get, post} from "../_helpers/index";
import {setBookData, setMatchBookData} from '../actions/book.details.actions';
import { NavigationActions } from 'react-navigation';
import * as config from '../config/config.json';
import {showError} from '../actions/error.actions';
import {setCollectionData} from '../actions/book.details.actions';

export const addToCollection = (payload) => dispatch => {
  
  const body = {
    ISBN_13: payload.industryIdentifiers[0].identifier,
    ISBN_10: payload.industryIdentifiers[1].identifier,
    title: payload.title,
    subTitle: '',
    publisher: payload.publisher,
    publishedDate: payload.publishedDate,
    description: payload.description,
    author: payload.authors[0],
    pageCount: payload.pageCount,
    category: payload.categories[0],
    smallThumbnail: payload.imageLinks.smallThumbnail,
    thumbnail: payload.imageLinks.thumbnail,
    language: payload.language,
    webReaderLink: payload.previewLink,
    bookQualityRating: payload.bookQualityRating
  };
  post(config.BASE_URL+config.BOOK.ADD, body)
    .then(response => {
      if (response[0] === 200) {
        dispatch(NavigationActions.navigate({ routeName: 'CollectionComponent' }));
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
    });
};
export const getCollection = (payload) => dispatch => {
  get(config.BASE_URL+config.BOOK.GET)
    .then(response => {
      if (response[0] === 200) {
        dispatch(setCollectionData(response[1]));
      }
    })
    .catch(error => {
      console.log(error);
    });
};
export const fetchBookDetails = (payload) => dispatch => {
  
  const body = {
    ISBN_13: payload
  };
  
  post(config.BASE_URL+config.BOOK.REDEEM, body)
    .then(response => {
      // check if the book can be redeemed.
      if (response[0] === 200) {
        if(response[1] && response[1].userId) {
          dispatch(NavigationActions.navigate({routeName:'User'}));
          // score updated go to user page show score
        } else {
          // fetch book details
          get("https://www.googleapis.com/books/v1/volumes?q=isbn:{ISBN}"
            .replace('{ISBN}', payload))
            .then(response => {
              if (response[0] === 200 && response[1].items.length > 0) {
                dispatch(setBookData(response[1].items[0].volumeInfo));
                dispatch(NavigationActions.navigate({ routeName: 'BookDetailComponent' }));
              }
            })
            .catch(error => {
              console.log(error);
            });
        }
        
      } else {
        dispatch(showError({
          message: response[1].reason
        }));
      }
      
    })
    .catch(error => {
      dispatch(dispatch(showError({
        message: 'Server Error Occurred'
      })));
    });
};

export const swipeRight = (payload) => dispatch => {
  const body = {
    BOOK_ID: payload.id,
    BOOK_OWNER_ID: payload.userId
  };
  
  post(config.BASE_URL+config.BOOK.SWIPE_RIGHT, body)
    .then(response => {
      if (response[0] === 200) {
        if(response[1] && response[1].title) {
          console.log('swipe match found !');
          dispatch(setMatchBookData(response[1]));
        }
        
      } else {
        dispatch(showError({
          message: response[1].reason
        }));
        console.log('Error:', response[0], response[1].reason);
      }
    })
    .catch(error => {
      console.log('Error: ', error);
      dispatch(dispatch(showError({
        message: 'Server Error Occurred'
      })));
    });
};




