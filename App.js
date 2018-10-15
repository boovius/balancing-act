import React from 'react';
import { createStackNavigator } from 'react-navigation'
import { store, persistor } from './configureStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import IncrementList from './components/IncrementList'
import ActivityList from './components/ActivityList'
import AddIncrement from './components/AddIncrement'
import AddActivity from './components/AddActivity'


const Stack = createStackNavigator({
  IncrementList: {
    screen: IncrementList,
    navigationOptions: {
      title: 'Increments'
    }
  },
  ActivityList: {
    screen: ActivityList,
    navigationOptions: {
      title: 'Activities'
    }
  },
  AddIncrement: {
    screen: AddIncrement
  },
  AddActivity: {
    screen: AddActivity
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