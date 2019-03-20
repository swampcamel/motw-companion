import React, { Component } from 'react';
import './App.scss';
import ReactDOM from 'react-dom';
import { Switch, Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
// import * as actions from './../actions'

import constants from './../constants'

import generateHero from './HeroModel'
import HeroView from './HeroView'

const { actionTypes } = constants;
const newHero = generateHero("Kromdor", "The Monstrous", "Demon", "Pure Drive: Cruelty", "filler stuff",
{"charm": 2, "cool": 0, "sharp": -1, "tough": -1, "weird": 3},
[{"base":
{"type": "claws", "harmValue": 2, "range": "hand"},
"extra": [{"type": "ADD_RANGE_CLOSE"}]}],
[{"type": "immortal", "description": "You do not age or sicken, and whenever you suffer harm, you suffer 1-harm less."},
{"type": "unholyStrength", "description": "Roll +Weird instead of +Tough when you kick some ass."}],
[{"type": "magnum", "harmValue": 3, "range": "close", "reload": true, "volume": "loud", "extraAttribute": null}],
{"physiology": "man", "aura": "sinister", "clothing": "tailored"},
[], [], 0, 2)

const loadHero = (userHero) => ({type: actionTypes.GET_HERO, userHero: userHero})
class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(loadHero(newHero))
  }

  render() {

     const printExtras = (attackObject) => {
       if (attackObject.extra) {
         return attackObject.extra.map( (eachExtra, index) => <span key={index}>{eachExtra.type}</span>)
       }
       else {
         return "none"
       }
     }

    if (!this.props.userHero.name) {return (<div className="App"><header className="App-header">Loading...</header></div>)}
    else {
    return (
      <div className="App">
        <header className="App-header">
          <HeroView/>
        <div>Name:{this.props.userHero.name}</div>
        <div>Type: {this.props.userHero.type}</div>
        <div>Breed/Subtype: {this.props.userHero.subtype}</div>
        <div>Curse/Effect: {this.props.userHero.typeEffect}</div>
        <div>Attack Types:
          <ul>
            {this.props.userHero.attackTypesArray.map(( attackType, index ) =>
              <li key={index}>
                <span>Base: {attackType.base.type} </span>
                <span>Damage: {attackType.base.harmValue} Harm </span>
                <span>Range: {attackType.base.range} </span>
                <span>Extra: {printExtras(attackType)}</span>
              </li>
            )}
          </ul>
        </div>
        <div>Moves:
          {this.props.userHero.movesArray.map(( move, index ) =>
            <div key={index}>
              <div>{move.type}</div>
              <div>{move.description}</div>
            </div>
          )}
        </div>
        <div>Stats:
          <ul>
            <li>Charm: {this.props.userHero.statsObject.charm}</li>
            <li>Cool: {this.props.userHero.statsObject.cool}</li>
            <li>Sharp: {this.props.userHero.statsObject.sharp}</li>
            <li>Tough: {this.props.userHero.statsObject.tough}</li>
            <li>Weird: {this.props.userHero.statsObject.weird}</li>
          </ul>
        </div>
        <div>Luck Meter: {this.props.userHero.luckPointValue}</div>
        <div>Harm Meter: {this.props.userHero.harmPointValue}</div>
        <div>Experience Meter: {this.props.userHero.xpPointValue}</div>
        <div>Gear:
          {this.props.userHero.gearArray.map(( gear, index ) =>
            <div key={index}>
              <span><strong>{gear.type} </strong></span>
              <span>Damage: {gear.harmValue} Harm </span>
              <span>Range: {gear.range} </span>
              <span>{gear.reload ? "reload" : null} </span>
              <span>{gear.volume} </span>
              <span>{gear.extraAttribute}</span>
            </div>
          )}
        </div>
        <div>Look:
          <ul>
            <li>Physiology: {this.props.userHero.lookObject.physiology}</li>
            <li>Aura: {this.props.userHero.lookObject.aura}</li>
            <li>Clothing: {this.props.userHero.lookObject.clothing}</li>
          </ul>
        </div>
        <div>History: {this.props.userHero.history}</div>
        <div>Level: {this.props.userHero.level}</div>
        <div>Improvements:
          {this.props.userHero.improvementsArray.map(( improvement, index ) =>
            <div key={index}>"Improvement"</div>
          )}
        </div>
        <div>Advanced Improvements:
          {this.props.userHero.advancedImprovementsArray.map(( improvement, index ) =>
            <div key={index}>"Improvement"</div>
          )}
        </div>
        </header>
      </div>
    );}
  }
}

const mapStateToProps = state => {
  return state;
}

export default withRouter(connect(mapStateToProps)(App));
