export const DO_ACTIVITY = 'DO_ACTIVITY'
export const ADD_ACTIVITY = 'ADD_ACTIVITY'
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY'
export const ADD_INCREMENT = 'ADD_INCREMENT'
export const DELETE_INCREMENT = 'DELETE_INCREMENT'
export const DELETE_DOING = 'DELETE_DOING'
export const SET_CURRENT_INCREMENT = 'SET_CURRENT_INCREMENT'
export const SET_DEFAULT_INCREMENT = 'SET_DEFAULT_INCREMENT'

export function doActivity (id, time) {
  return {
    type: DO_ACTIVITY,
    id,
    time,
  }
}

export function addActivity (activity) {
  return {
    type: ADD_ACTIVITY,
    activity
  }
}

export function deleteActivity (id) {
  return {
    type: DELETE_ACTIVITY,
    id
  }
}

export function deleteDoing(activityId, doing) {
  return {
    type: DELETE_DOING,
    activityId,
    doing
  }
}

export function addIncrement(increment) {
  return {
    type: ADD_INCREMENT,
    increment
  }
}

export function deleteIncrement(id) {
  return {
    type: DELETE_INCREMENT,
    id
  }
}

export function setCurrentIncrement(incrementId) {
  return {
    type: SET_CURRENT_INCREMENT,
    incrementId
  }
}

export function setDefaultIncrement(incrementId) {
  return {
    type: SET_DEFAULT_INCREMENT,
    incrementId
  }
}