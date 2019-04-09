import constants from './../constants';
const { actionTypes }  = constants;

const mainReducer = (state = {}, action) => {
let newState;
let newHeroes;
let newHero;
  switch (action.type) {
    case actionTypes.FETCH_HEROES:
      newState = Object.assign({}, state, {
        isFetching: false,
        heroes: action.payload
      })
      return newState

    default:
      return state;
  }
}

export default mainReducer;
