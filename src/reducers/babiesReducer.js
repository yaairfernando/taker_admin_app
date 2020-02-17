import { FETCHBABIES } from '../types'

export default (state={}, action) => {
  switch (action.type) {
    case FETCHBABIES:
      return{...state, babies: action.payload}
    default:
      return state;
  }
}