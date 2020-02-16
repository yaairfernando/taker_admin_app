import {
  FETCHACTIVITYLOGS,
  CREATEACTIVITYLOG,
  EDITACTIVITYLOG,
  FETCHACTIVITYLOG
} from '../types'

export default (state={}, action) => {
  switch (action.type) {
    case FETCHACTIVITYLOGS:
      return {...state, activityLogs: action.payload}
    case CREATEACTIVITYLOG:
      return {...state, newActivityLog: action.payload}
    case EDITACTIVITYLOG:
      return {...state, editActivityLog: action.payload}
    case FETCHACTIVITYLOG:
      return {...state, activityLog: action.payload}
    default:
      return state;
  }
}