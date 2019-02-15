import { NavigationActions } from 'react-navigation';

export const navigateToPage = (routeName) => dispatch => {
  dispatch(NavigationActions.navigate({ routeName }));
};