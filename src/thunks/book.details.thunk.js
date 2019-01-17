import {get, post} from "../_helpers/index";
import {setBookData} from '../actions/book.details.actions';
import { NavigationActions } from 'react-navigation';
import * as config from '../config/config.json';
import {showError} from '../actions/error.actions';
import {setCollectionData} from '../actions/book.details.actions';

export const addToCollection = (payload) => dispatch => {
  console.log('HDV Add to collection payload: ', payload);
  
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
      console.log('HDV API response: ', response);
      if (response[0] === 200) {
        dispatch(NavigationActions.navigate({ routeName: 'CollectionComponent' }));
      } else {
        dispatch(dispatch(showError({
          message: response[1].reason
        })));
        console.log('HDV Error 123:', response[0], response[1].reason);
      }
    })
    .catch(error => {
      console.log('HDV error 99', error);
      dispatch(dispatch(showError({
        message: 'Server Error Occurred'
      })));
    });
};

export const getCollection = (payload) => dispatch => {
  get(config.BASE_URL+config.BOOK.GET)
    .then(response => {
      console.log('HDV response: ', response);
      if (response[0] === 200) {
        dispatch(setCollectionData(response[1]));
        console.log('HDV res123', response[1]);
      }
    })
    .catch(error => {
      console.log(error);
    });
};
export const fetchBookDetails = (payload) => dispatch => {
  get("https://www.googleapis.com/books/v1/volumes?q=isbn:{ISBN}"
    .replace('{ISBN}', payload))
    .then(response => {
      // console.log('HDV response: ', response);
      if (response[0] === 200 && response[1].items.length > 0) {
        //dispatch(eventActions.getEvent(response[1]));
        console.log('HDV res1', response[1].items);
        dispatch(setBookData(response[1].items[0].volumeInfo));
        dispatch(NavigationActions.navigate({ routeName: 'BookDetailComponent' }));
      }
    })
    .catch(error => {
      console.log(error);
    });
};