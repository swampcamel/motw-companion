import constants from './../constants'
const { actionTypes } = constants

export default (state = false, action ) => {
  let newState
  switch(action.type){
    case actionTypes.FETCH_USER:
      newState = Object.assign({}, state, {
        isFetching: false,
        user: action.payload
      })
      return newState
    default:
      return state;
  }
}
