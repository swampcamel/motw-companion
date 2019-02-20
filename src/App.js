import React, { Component } from 'react';
import './App.scss';

import generateHero from './HeroModel'

class App extends Component {
  render() {
    const newHero = generateHero("Kromdor", "The Monstrous", "Demon", "Pure Drive: Cruelty", "filler stuff",
    {"charm": 2, "cool": 0, "sharp": -1, "tough": -1, "weird": 3},
    [{"base":
      {"type": "claws", "harmValue": 2, "range": "hand"},
      "extra": [{"type": "ADD_RANGE_CLOSE"}]}],
    [{"type": "immortal", "description": "You do not age or sicken, and whenever you suffer harm, you suffer 1-harm less."},
    {"type": "unholyStrength", "description": "Roll +Weird instead of +Tough when you <strong>kick some ass.</strong>"}],
    [{"type": "magnum", "harmValue": 3, "range": "close", "reload": true, "volume": "loud", "extraAttribute": null}],
    {"physiology": "man", "aura": "sinister", "clothing": "tailored"},
     [], [], 0, 2)

     const printExtras = (attackObject) => {
       if (attackObject.extra) {
         return attackObject.extra.map( (eachExtra, index) => <span key={index}>{eachExtra.type}</span>)
       }
       else {
         return "none"
       }
     }

    console.log(newHero)
    return (
      <div className="App">
        <header className="App-header">
        <div>Name:{newHero.name}</div>
        <div>Type: {newHero.type}</div>
        <div>Breed/Subtype: {newHero.subtype}</div>
        <div>Curse/Effect: {newHero.typeEffect}</div>
        <div>Attack Types:
          <ul>
            {newHero.attackTypesArray.map(( attackType, index ) =>
              <li key={index}>
                <span>Base: {attackType.base.type} </span>
                <span>Damage: {attackType.base.harmValue} Harm </span>
                <span>Range: {attackType.base.range} </span>
                <span>Extra: {printExtras(attackType)}</span>
              </li>
            )}
          </ul>
        </div>
        <div>Moves: </div>
        <div>Stats:
          <ul>
            <li>Charm</li>
            <li>Cool</li>
            <li>Sharp</li>
            <li>Tough</li>
            <li>Weird</li>
          </ul>
        </div>
        <div>Luck Meter: {newHero.luckPointValue}</div>
        <div>Harm Meter: {newHero.harmPointValue}</div>
        <div>Experience Meter{newHero.xpPointValue}</div>
        <div>Gear: </div>
        <div>Look:
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
        <div>History: {newHero.history}</div>
        <div>Level: {newHero.level}</div>
        <div>Improvements: </div>
        <div>Advanced Improvements: </div>
        </header>
      </div>
    );
  }
}

export default App;
