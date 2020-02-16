import {
  FETCHACTIVITYLOGS
} from '../types'

export default (state={}, action) => {
  switch (action.type) {
    case FETCHACTIVITYLOGS:
      return {...state, activityLogs: action.payload}
    default:
      return state;
  }
}