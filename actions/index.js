export const DO_ACTIVITY = 'DO_ACTIVITY'
export const ADD_ACTIVITY = 'ADD_ACTIVITY'
export const ADD_INCREMENT = 'ADD_INCREMENT'
export const SET_CURRENT_INCREMENT = 'SET_CURRENT_INCREMENT'
export const SET_DEFAULT_INCREMENT = 'SET_DEFAULT_INCREMENT'

export function doActivity (id, time) {
  return {
    type: DO_ACTIVITY,
    id,
    time,
  }
}

export function addIncrement(increment) {
  return {
    type: ADD_INCREMENT,
    increment
  }
}

export function setCurrentIncrement(incrementKey) {
  return {
    type: SET_CURRENT_INCREMENT,
    currentIncrementKey: incrementKey
  }
}