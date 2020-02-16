import babies_api from '../api/babies_api'
import { 
  FETCHACTIVITIES,
  FETCHASSISTANTS,
  FETCHBABIES,
  FETCHACTIVITYLOGS
} from '../types'


export const fetchActivities = () => async dispatch => {
  const activities = await babies_api.get('/activities');

  dispatch({
    type: FETCHACTIVITIES,
    payload: activities.data
  })
}

export const fetchBabies = () => async dispatch => {
  const babies = await babies_api.get('/babies');

  dispatch({
    type: FETCHBABIES,
    payload: babies.data
  })
}

export const fetchAssistants = () => async dispatch => {
  const assistants = await babies_api.get('/assistants');

  dispatch({
    type: FETCHASSISTANTS,
    payload: assistants.data
  })
}

export const fetchActivityLogs = () => async dispatch => {
  const activityLogs = await babies_api.get('/activity_logs')

  dispatch({
    type: FETCHACTIVITYLOGS,
    payload: activityLogs.data
  })
}