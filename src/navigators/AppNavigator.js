import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import UserComponent from '../components/User/UserComponentLink';
import LoginComponent from '../components/Login/LoginComponentLink';
import SignUpComponent from '../components/Login/SignUpComponentLink';
import ProfileScreen from '../components/ProfileScreen';
import SplashScreen from '../components/Splash/SplashScreenLink';
import HomeComponent from '../components/Home/HomeComponentLink';
import MeetingComponent from '../components/Meetings/MeetingComponentLink';
import SwipeComponent from '../components/Swipe/SwipeComponentLink';
import ScannerComponent from '../components/widgets/scanner/ScannerComponentLink';
import BookDetailComponent from '../components/Book/BookDetailComponentLink';
import CollectionComponent from '../components/Book/CollectionComponentLink';
import NavButton from '../components/widgets/NavButton/NavButton';
import AlertBox from '../components/widgets/Alert/AlertBox';
import SwapComponent from '../components/Swap/SwapComponentLink';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createStackNavigator({
  Login: { screen: LoginComponent },
  Signup: { screen: SignUpComponent },
  Home: {screen: HomeComponent},
  Profile: { screen: ProfileScreen },
  SplashScreen: {screen: SplashScreen},
  SwipeComponent: {screen: SwipeComponent},
  ScannerComponent: {screen: ScannerComponent},
  NavButton: {screen: NavButton},
  AlertBox: {screen: AlertBox},
  BookDetailComponent: {screen: BookDetailComponent},
  CollectionComponent: {screen: CollectionComponent},
  MeetingComponent: {screen:MeetingComponent},
  SwapComponent: {screen: SwapComponent},
  User: {screen: UserComponent}
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };