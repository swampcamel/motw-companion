import constants from './../constants'
import { heroesRef, authRef, provider } from './../config/firebase'
const { actionTypes }  = constants;

export const addHero = newHero => {
  heroesRef.push().set(newHero)
  console.log('doners')
}

export const deleteHero = heroId => async dispatch => {
  heroesRef.child(heroId).remove()
}

export const changeHeroHp = (heroId, value) => async dispatch => {
  heroesRef.child(heroId).child('harmPointValue').set(value)
}

export const changeHeroLuck = (heroId, value) => async dispatch => {
  heroesRef.child(heroId).child('luckPointValue').set(value)
}

export const fetchHeroes = () => async dispatch => {
  heroesRef.on('value', function(snapshot) {
    dispatch({
      type: actionTypes.FETCH_HEROES,
      payload: snapshot.val()
    })
  })
}

export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: actionTypes.FETCH_USER,
        payload: user
      });
    } else {
      dispatch({
        type: actionTypes.FETCH_USER,
        payload: null
      });
    }
  });
};

export const signIn = () => dispatch => {
  authRef
    .signInWithPopup(provider)
    .then(result => {})
    .catch(error => {
      console.log(error);
    });
};

export const signOut = () => dispatch => {
  authRef
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      console.log(error);
    });
};
