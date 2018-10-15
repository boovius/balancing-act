export const DO_ACTIVITY = 'DO_ACTIVITY'
export const ADD_ACTIVITY = 'ADD_ACTIVITY'
export const ADD_INCREMENT = 'ADD_INCREMENT'
export const DELETE_INCREMENT = 'DELETE_INCREMENT'
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
    currentIncrementId: incrementId
  }
}