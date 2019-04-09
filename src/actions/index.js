import constants from './../constants'
import { heroesRef } from './../config/firebase'
const { actionTypes }  = constants;

export const addHero = newHero =>
{
  heroesRef.push().set(newHero)
  console.log('doners')
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
