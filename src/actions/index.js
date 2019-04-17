import constants from './../constants'
import { heroesRef, authRef, gameAssetsRef, provider } from './../config/firebase'
import _ from 'lodash'
const { actionTypes }  = constants;

export const addHero = newHero => {
  heroesRef.push().set(newHero)
}
export const deleteHero = heroId => async dispatch => {
  heroesRef.child(heroId).remove()
}

export const addGameAsset = newAsset => async dispatch => {
  gameAssetsRef.child('userUploads').push().set(newAsset)
}

export const updateGameAsset = asset => async dispatch => {
  gameAssetsRef.child('userUploads').child(`${asset.key}`).set(asset)
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

export const updateHeroLayer = (gameLayer) => async dispatch => {
  heroesRef.child(gameLayer.id).child('gameLayer').set(gameLayer)
}

export const toggleHeroOpacity = (heroId, value) => async dispath => {
  heroesRef.child(heroId).child('gameLayer').child('visible').set(value)
}

export const updateAssetLayer = (asset) => async dispatch => {
  gameAssetsRef.child('userUploads').child(asset.id).set(asset)
}

export const toggleAssetOpacity = (assetId, value) => async dispatch => {
  gameAssetsRef.child('userUploads').child(assetId).child('visible').set(value)
}

export const deleteAssetLayer = (assetId) => async dispatch => {
  gameAssetsRef.child('userUploads').child(assetId).remove()
}

export const updateBackground = (path) => async dispatch => {
  gameAssetsRef.child('background').set(path)
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
        visible: hero.gameLayer.visible,
        x: hero.gameLayer.x,
        y: hero.gameLayer.y
      }
    )})
    let layerPayload = {}
    for (let i = 0; i < heroLayers.length; i++) {
      layerPayload[heroLayers[i].id] = heroLayers[i]
    }
    dispatch({
      type: actionTypes.FETCH_GAMEBOARD,
      payload: layerPayload
    })
  })
}


export const fetchAssets = () => async dispatch => {
  gameAssetsRef.on('value', function(snapshot) {
    dispatch({
      type: actionTypes.FETCH_ASSETS,
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

export const createBoardState = (heroLayers) => dispatch => {
  dispatch({
    type: actionTypes.FETCH_GAMEBOARD,
    payload: {
      heroLayers: heroLayers
    }
  })
}
