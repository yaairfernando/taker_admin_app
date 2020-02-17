import babies_api from '../api/babies_api'
import Swal from 'sweetalert2';
import history from '../history';
import { 
  FETCHACTIVITIES,
  FETCHASSISTANTS,
  FETCHBABIES,
  FETCHACTIVITYLOGS,
  CREATEACTIVITYLOG,
  EDITACTIVITYLOG,
  FETCHACTIVITYLOG
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

export const fetchActivityLog = id => async dispatch => {
  const activityLog = await babies_api.get(`/activity_logs/${id}`);

  dispatch({
    type: FETCHACTIVITYLOG,
    payload: activityLog.data
  })
}

export const fetchActivityLogs = (baby='', assistant='', status='') => async dispatch => {
  const activityLogs = await babies_api.get(`/activity_logs`, {
    params: {
      baby,
      assistant,
      status
    }
  })

  dispatch({
    type: FETCHACTIVITYLOGS,
    payload: activityLogs.data
  })
}

export const createActivityLog = (baby_id, assistant_id, activity_id, start_time) => async dispatch => {
  const activity_log = await babies_api.post('/activity_logs', {
    baby_id,
    assistant_id,
    activity_id,
    start_time
  })

  console.log(activity_log)

  if (activity_log.data.status === 422) {
    Swal.fire(
      'Error!!',
      'All fields are requied!!',
      'error'
    )
    history.push('/activity_logs/new')
  } else {
    Swal.fire(
      'Success!!',
      'You have successfuly created a new record..',
      'success' 
    )
    history.push('/activity_logs')
  }

  dispatch({
    type: CREATEACTIVITYLOG,
    payload: activity_log
  })
}

export const updateActivityLog = (id, comments, stop_time) => async dispatch => {
  const activity_log_edit = await babies_api.put(`/activity_logs/${id}`, {
    comments,
    stop_time
  })

  if (activity_log_edit.data.status === 422) {
    Swal.fire(
      'Error!!',
      activity_log_edit.data.data.stop_time[0],
      'error'
    )
    history.push(`/activity_logs/edit/${id}`)
  } else {
    Swal.fire(
      'Success!!',
      'You have successfuly finished this activity.',
      'success'
    )
    history.push('/activity_logs')
  }

  dispatch({
    type: EDITACTIVITYLOG,
    payload: activity_log_edit 
  })
}