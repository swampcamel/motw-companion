import React from 'react'

import CharacterInfo from './CharacterInfo'

import './HeroOverlay.scss'
import statsIcon from './../../img/statsIcon.png'
import historyIcon from './../../img/historyIcon.png'
import equipmentIcon from './../../img/equipmentIcon.png'
import abilitiesIcon from './../../img/abilitiesIcon.png'

class HeroOverlay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMenuItem: 0
    }
  }

  handleChangeMenuItem = e => {
    const menuIndex = parseInt(e.target.id)
    this.setState({selectedMenuItem: menuIndex})
  }

  render() {
    const menuOptions = [
      <CharacterInfo/>, <div>Option 2</div>, <div>Option 3</div>, <div>Option 4</div>
    ]
    return (
      <div className="overlay-container">
        <div className="overlay-toolbar">
          <div className="hero-nav-item">
            <img src={statsIcon} onClick={this.handleChangeMenuItem} alt="Hunter Stats" id="0" />
          </div>
          <div className="hero-nav-item">
            <img src={historyIcon} onClick={this.handleChangeMenuItem} alt="Hunter History" id="1"/>
          </div>
          <div className="hero-nav-item">
            <img src={equipmentIcon} onClick={this.handleChangeMenuItem} alt="Hunter  Equipment" id="2"/>
          </div>
          <div className="hero-nav-item">
            <img src={abilitiesIcon} onClick={this.handleChangeMenuItem} alt="Hunter Abilities" id="3"/>
          </div>
        </div>
        <div className="hero-nav-item-view">
          {menuOptions[this.state.selectedMenuItem]}
        </div>
      </div>
    )
  }
}

export default HeroOverlay;
