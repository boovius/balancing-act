import React from 'react';
import { View, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import IncrementList from './components/IncrementList'
import ActivityList from './components/ActivityList'
import { reducer } from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'


const Stack = createStackNavigator({
  IncrementList: {
    screen: IncrementList
  },
  ActivityList: {
    screen: ActivityList
  }
})

const initialState = {
  currentIncrementKey: '0',
  increments: [
    {
      key: '0',
      days: 7,
      alias: 'One Week'
    },
    {
      key: '1',
      days: 10,
      alias: 'Ten Days'
    },
    {
      key: '2',
      days: 30,
      alias: 'One Month'
    }
  ],
  activities: [
    {
      id: '0',
      title: 'yoga',
      data: [
        "2018-09-21T15:44:50.195Z"
      ]
    },
    {
      id: '1',
      title: 'meditation',
      data: [
      ]
    }
  ]
}
const store = createStore(reducer, initialState, applyMiddleware(logger))

export default class App extends React.Component {

  componentWillMount() {
    AsyncStorage.getItem('balancingAct').then((json)=> {
      const data = JSON.parse(json)
      this.setState({
        ...data
      })
    })
  }

  doActivity(title) {
    const newActivities = this.state.activities.map(activity => {
      if (activity.title !== title) return activity
      const newData = [
        ...activity.data,
        new Date().toISOString()
      ]
      return {
        ...activity,
        data: newData
      }
    })
    this.setState({
      activities: newActivities
    }, () => {
      const data = JSON.stringify(this.state)
      AsyncStorage.setItem('balancingAct', data)
    })
  }

  render() {
    return (
      <Provider store={store}>
        <Stack />
      </Provider>
    )
  }
}