import constants from './../constants'
import { heroesRef, authRef, provider } from './../config/firebase'
import _ from 'lodash'
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

export const increaseHeroXP = (heroId, value) => async dispatch => {
  if (value <= 5) {
    heroesRef.child(heroId).child('xpPointValue').set(value)
  } else {
    console.log("level up instead")
  }
}

export const increaseHeroLevel = (heroId, value) => async dispatch => {
  heroesRef.child(heroId).child('level').set(value)
  heroesRef.child(heroId).child('xpPointValue').set(0)
}

export const fetchHeroes = () => async dispatch => {
  heroesRef.on('value', function(snapshot) {
    dispatch({
      type: actionTypes.FETCH_HEROES,
      payload: snapshot.val()
    })
    const heroLayers = _.map(snapshot.val(), (hero, key) => {
      return (
      {
        name: hero.name,
        id: key,
        image: hero.imgUrl,
        visible: true,
      }
    )})
    dispatch({
      type: actionTypes.FETCH_GAMEBOARD,
      payload: heroLayers
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

export const createBoardState = (heroLayers) => dispatch => {
  dispatch({
    type: actionTypes.FETCH_GAMEBOARD,
    payload: {
      heroLayers: heroLayers
    }
  })
}
