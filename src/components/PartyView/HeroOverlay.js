import React from 'react'

import './HeroOverlay.scss'
import statsIcon from './../../img/statsIcon.png'
import historyIcon from './../../img/historyIcon.png'
import equipmentIcon from './../../img/equipmentIcon.png'
import abilitiesIcon from './../../img/abilitiesIcon.png'

class HeroOverlay extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="overlay-container">
        <div className="overlay-toolbar">
          <div className="hero-nav-item">
            <img src={statsIcon} alt="Hunter Stats"/>
          </div>
          <div className="hero-nav-item">
            <img src={historyIcon} alt="Hunter History"/>
          </div>
          <div className="hero-nav-item">
            <img src={equipmentIcon} alt="Hunter Equipment"/>
          </div>
          <div className="hero-nav-item">
            <img src={abilitiesIcon} alt="Hunter Abilities"/>
          </div>
        </div>
        <div className="hero-nav-item-view">
          Hi
        </div>
      </div>
    )
  }
}

export default HeroOverlay;
