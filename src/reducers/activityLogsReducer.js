import {
  FETCHACTIVITYLOGS,
  CREATEACTIVITYLOG
} from '../types'

export default (state={}, action) => {
  switch (action.type) {
    case FETCHACTIVITYLOGS:
      return {...state, activityLogs: action.payload}
    case CREATEACTIVITYLOG:
      return {...state, newActivityLog: action.payload}
    default:
      return state;
  }
}