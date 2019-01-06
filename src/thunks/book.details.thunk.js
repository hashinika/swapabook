import {get} from "../_helpers/index";
import {setBookData} from '../actions/book.details.actions';
import { NavigationActions } from 'react-navigation';

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