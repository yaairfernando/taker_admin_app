import { FETCHASSISTANTS } from '../types'

export default (state={}, action) => {
  switch (action.type) {
    case FETCHASSISTANTS:
      return {...state, assistants: action.payload}
    default:
      return state;
  }
}