import firebaseConfig from './../config/firebase';
import constants from './../constants';
import Firebase from 'firebase';

Firebase.initializeApp(firebaseConfig);

console.log(Firebase.firestore().ref('userHero/'))

const { actionTypes }  = constants;

export const subscribeToHero = (hero) => ({
  type: actionTypes.GET_HERO,
  hero: hero
})

export function getHeroSubscribe() {
  return function (dispatch) {
  }
}
