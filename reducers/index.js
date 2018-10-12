import { DO_ACTIVITY, ADD_INCREMENT, SET_CURRENT_INCREMENT  } from '../actions'

function activities(state = [], action) {
  switch(action.type) {
    case DO_ACTIVITY:
      return state.map(activity => {
        if (activity.id !== action.id) return activity
        const newData = [
          ...activity.data,
          action.time
        ]
        return {
          ...activity,
          data: newData
        }
      })
    default:
      return state
  }
}

function increments(state=[], action) {
  switch(action.type) {
    case ADD_INCREMENT:
      return [
        ...state,
        action.increment
      ]
    default:
      return state
  }
}

export default function reducer(state = {}, action) {
  switch(action.type) {
    case DO_ACTIVITY:
      return {
        ...state,
        activities: activities(state.activities, action)
      }
    case ADD_INCREMENT:
      return {
        ...state,
        increments: increments(state.increments, action)
      }
    case SET_CURRENT_INCREMENT:
      return {
        ...state,
        currentIncrementKey: action.currentIncrementKey
      }
    default:
      return state
  }
}