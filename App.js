import React from 'react';
import { createStackNavigator } from 'react-navigation'
import { store, persistor } from './configureStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import IncrementList from './components/IncrementList'
import ActivityList from './components/ActivityList'
import AddIncrement from './components/AddIncrement'
import AddActivity from './components/AddActivity'
import DoingsList from './components/DoingsList'
import IncrementSettings from './components/IncrementSettings'


const Stack = createStackNavigator({
  IncrementList: {
    screen: IncrementList,
    navigationOptions: {
      title: 'Increments'
    }
  },
  ActivityList: {
    screen: ActivityList,
  },
  AddIncrement: {
    screen: AddIncrement
  },
  AddActivity: {
    screen: AddActivity
  },
  DoingsList: {
    screen: DoingsList
  },
  IncrementSettings: {
    screen: IncrementSettings
  },
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