import React, { Component } from 'react';
import './HeroView.scss'

class HeroView extends Component {
  render() {
    return (
      <div className='hero-card'>
        <div className='portrait-wrapper'>
          <p style={{textAlign: 'center', color: 'red'}}>^_^<br/>
          @_@<br/>
          v<br/>
          -|-<br/>
          ^
          </p>

        </div>
        <div className='hero-card-info'>
          <div style={{fontSize: 32 +'px'}}>Lord Kromdor</div>
          <div>The Monstrous</div>
          <div className='hero-info-stats'>
            <div className='hero-info-stat'>
              <div className='hero-info-stat-value'>2</div>
              <div className='hero-info-stat-name'>Charm</div>
            </div>
            <div className='hero-info-stat'>
              <div className='hero-info-stat-value'>0</div>
              <div className='hero-info-stat-name'>Cool</div>
            </div>
            <div className='hero-info-stat'>
              <div className='hero-info-stat-value'>-1</div>
              <div className='hero-info-stat-name'>Sharp</div>
            </div>
            <div className='hero-info-stat'>
              <div className='hero-info-stat-value'>-1</div>
              <div className='hero-info-stat-name'>Tough</div>
            </div>
            <div className='hero-info-stat'>
              <div className='hero-info-stat-value'>3</div>
              <div className='hero-info-stat-name'>Weird</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroView
