import constants from './../constants';
const { actionTypes }  = constants;

const mainReducer = (state = { userHero: {} }, action) => {
  let newState;

  switch (action.type) {
    case actionTypes.GET_HERO:
      newState = Object.assign({}, state, { userHero: action.userHero });
      return newState;

    default:
      return state;
  }
}

export default mainReducer;
