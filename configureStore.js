import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const initialState = {
  currentIncrementId:  "2018-09-21T15:44:50.195Z",
  increments: [
    {
      id:  "2018-09-22T15:44:50.195Z",
      days: 7,
      alias: 'One Week'
    },
    {
      id:  "2018-09-23T15:44:50.195Z",
      days: 10,
      alias: 'Ten Days'
    },
    {
      id:  "2018-09-24T15:44:50.195Z",
      days: 30,
      alias: 'One Month'
    }
  ],
  activities: [
    {
      id:  "2018-09-25T15:44:50.195Z",
      title: 'yoga',
      data: [
        "2018-09-21T15:44:50.195Z"
      ]
    },
    {
      id:  "2018-09-26T15:44:50.195Z",
      title: 'meditation',
      data: [
      ]
    }
  ]
}

export const store = createStore(persistedReducer, initialState, applyMiddleware(logger))
export const persistor = persistStore(store)