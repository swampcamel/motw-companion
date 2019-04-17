import * as firebase from "firebase";
import firebaseConfig from './keys'

firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref();
export const heroesRef = databaseRef.child("heroes");
export const gameAssetsRef = databaseRef.child("gameAssets")  
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export default firebaseConfig;
