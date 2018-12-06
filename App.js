import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './src/reducers';
import { AppNavigator, middleware } from './src/navigators/AppNavigator';


const store = createStore(rootReducer, applyMiddleware(middleware, ReduxThunk));

class App extends React.Component {
  render() {
    
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
export default App;
