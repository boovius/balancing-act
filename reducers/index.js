import { 
  DO_ACTIVITY, 
  ADD_INCREMENT, 
  DELETE_INCREMENT, 
  SET_CURRENT_INCREMENT,  
  ADD_ACTIVITY,
  DELETE_ACTIVITY} from '../actions'

export function activities(state = [], action) {
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
    case DELETE_ACTIVITY:
      return state.filter(activity => activity.id !== action.id)
    default:
      return state
  }
}

export function increments(state=[], action) {
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

export function settings(state = {}, action) {
  switch(action.type) {
    case SET_CURRENT_INCREMENT:
      return {
        ...state,
        currentIncrementId: action.currentIncrementId
      }
    default:
      return state
  }
}