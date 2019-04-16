import constants from './../constants'
const { actionTypes } = constants

const gameBoardReducer = (state = {}, action) => {
let newState
  switch (action.type) {
    case actionTypes.FETCH_GAMEBOARD:
      newState = Object.assign({}, state, {
        gameBoard: action.payload
      })
      return newState

    default:
      return state
  }
}

export default gameBoardReducer
