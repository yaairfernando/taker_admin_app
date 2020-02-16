import { FETCHACTIVITIES } from '../types'

export default (state={}, action) => {
  switch (action.type) {
    case FETCHACTIVITIES:
      return {...state, activities: action.payload}
    default:
      return state
  }
}