import React, { Component } from 'react';
import './HeroView.scss'

class HeroView extends Component {
  render() {
    return (
      <div className='hero-card'>
        <div className='portrait-wrapper'>
          <iframe src="https://giphy.com/embed/5LjZYs9wqFEEo" width="100%"  frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        </div>
        <div className='hero-card-info'>
          <div className='hero-card-row hero-card-titles'>
            <div style={{fontSize: 32 +'px'}}>Lord Kromdor</div>
            <div>The Monstrous</div>
          </div>
          <div className='hero-card-row'>
            <div className='hero-card-level'>
              <h4>Lv. </h4> <h4>2</h4>
            </div>
            <div className='hero-card-harm'>
              <h4>HP</h4> <h4>0 / 7</h4>
            </div>
          </div>
          <div className='hero-card-row'>
            <div className='hero-card-xp'>
              <h4>XP</h4> <h4>2 / 5</h4>
            </div>
            <div className='hero-card-luck'>
              <h4>LP</h4> <h4>0 / 7</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroView

// <div className='hero-info-stats'>
//   <div className='hero-info-stat'>
//     <div className='hero-info-stat-value'>2</div>
//     <div className='hero-info-stat-name'>Charm</div>
//   </div>
//   <div className='hero-info-stat'>
//     <div className='hero-info-stat-value'>0</div>
//     <div className='hero-info-stat-name'>Cool</div>
//   </div>
//   <div className='hero-info-stat'>
//     <div className='hero-info-stat-value'>-1</div>
//     <div className='hero-info-stat-name'>Sharp</div>
//   </div>
//   <div className='hero-info-stat'>
//     <div className='hero-info-stat-value'>-1</div>
//     <div className='hero-info-stat-name'>Tough</div>
//   </div>
//   <div className='hero-info-stat'>
//     <div className='hero-info-stat-value'>3</div>
//     <div className='hero-info-stat-name'>Weird</div>
//   </div>
// </div>
