import { 
  DO_ACTIVITY, 
  ADD_INCREMENT, 
  DELETE_INCREMENT, 
  SET_CURRENT_INCREMENT,  
  ADD_ACTIVITY} from '../actions'

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
    case ADD_ACTIVITY:
      return [
        ...state,
        {
          ...action.activity,
          data: []
        }
      ]
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
    case DELETE_INCREMENT:
      return state.filter(increment => increment.id !== action.id)
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
    case ADD_ACTIVITY:
      return {
        ...state,
        activities: activities(state.activities, action)
      }
    case ADD_INCREMENT:
      return {
        ...state,
        increments: increments(state.increments, action)
      }
    case DELETE_INCREMENT:
      return {
        ...state,
        increments: increments(state.increments, action)
      }
    case SET_CURRENT_INCREMENT:
      return {
        ...state,
        currentIncrementId: action.currentIncrementId
      }
    default:
      return state
  }
}