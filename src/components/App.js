import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Nav from './Nav'
import requireAuth from './auth/requireAuth'
import {fetchUser} from './../actions'
import Welcome from './Welcome/Welcome'
import PartyView from './PartyView/PartyView'
import CharacterGen from './CharacterGen/CharacterGen'
import KeeperMoves from './KeeperMoves/KeeperMoves'
import HunterMoves from './HunterMoves/HunterMoves'
import ComingSoon from './ComingSoon/ComingSoon'
import GameBoard, {ColoredRect} from './GameBoard/GameBoard'

import './App.scss'

const AuthPartyView = requireAuth(PartyView)
const AuthCGen = requireAuth(CharacterGen)
const AuthKMoves = requireAuth(KeeperMoves)
const AuthHunterMoves = requireAuth(HunterMoves)
const theme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  typography: {
      useNextVariants: true,
  }
})

// const newHero = generateHero("Kromdor", "The Monstrous", "Demon", "Pure Drive: Cruelty", "filler stuff",
// {"charm": 2, "cool": 0, "sharp": -1, "tough": -1, "weird": 3},
// [{"base":
// {"type": "claws", "harmValue": 2, "range": "hand"},
// "extra": [{"type": "ADD_RANGE_CLOSE"}]}],
// [{"type": "immortal", "description": "You do not age or sicken, and whenever you suffer harm, you suffer 1-harm less."},
// {"type": "unholyStrength", "description": "Roll +Weird instead of +Tough when you kick some ass."}],
// [{"type": "magnum", "harmValue": 3, "range": "close", "reload": true, "volume": "loud", "extraAttribute": null}],
// {"physiology": "man", "aura": "sinister", "clothing": "tailored"},
// [], [], 0, 2)

// const loadHero = (userHero) => ({type: actionTypes.GET_HERO, userHero: userHero})
class App extends Component {
  componentWillMount() {
    this.props.fetchUser()
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route exact path='/' render={ () => <Welcome/> } />
            <Route path='/PartyView' render={ () => <AuthPartyView/> } />
            <Route path='/CharacterMaker'render={ () => <AuthCGen/> } />
            <Route path='/KeeperMoves' render={ () => <AuthKMoves/> } />
            <Route path='/HunterMoves' render={ () => <AuthHunterMoves/>} />
            <Route path='/KnowledgeBase' render={ () => <ComingSoon/>} />
            <Route path='/GameBoard' render={ () => <GameBoard/>} />
          </Switch>
        </MuiThemeProvider>
      </div>
  )}
}

const mapStateToProps = state => {
  return state
}

export default withRouter(connect(mapStateToProps, {fetchUser})(App))
