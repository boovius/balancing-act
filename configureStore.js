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

export const store = createStore(persistedReducer, initialState, applyMiddleware(logger))
export const persistor = persistStore(store)