import React from 'react';
import { View, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import IncrementList from './components/IncrementList'
import ActivityList from './components/ActivityList'
import { store, persistor } from './configureStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


const Stack = createStackNavigator({
  IncrementList: {
    screen: IncrementList
  },
  ActivityList: {
    screen: ActivityList
  }
})

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate loader={null} persistor={persistor}>
          <Stack />
        </PersistGate>
      </Provider>
    )
  }
}