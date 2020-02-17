import { combineReducers } from 'redux'
import activitiesReducer from './activitiesReducer'
import babiesReducer from './babiesReducer'
import assistantsReducer from './assistantsReducer'
import activityLogsReducer from './activityLogsReducer'

export default combineReducers({
  activities: activitiesReducer,
  babies: babiesReducer,
  assistants: assistantsReducer,
  activityLogs: activityLogsReducer
})