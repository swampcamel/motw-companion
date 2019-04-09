import * as firebase from "firebase";
import firebaseConfig from './keys'

firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref();

export const heroesRef = databaseRef.child("heroes");

export default firebaseConfig;
