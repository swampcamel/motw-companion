import React from 'react'


import './Nav.scss'
import heroViewIcon from './../img/heroViewIcon.png'
import genericMovesIcon from './../img/genericMovesIcon.png'
import gameMasterIcon from './../img/gameMasterIcon.png'
import overallIcon from './../img/overallMysteryIcon.png'
import gameBoardIcon from './../img/gameBoardIcon.png'

const navList = [
  {img: heroViewIcon, alt: 'View Hunters', path: ''},
  {img: genericMovesIcon, alt: 'View Hunters', path: ''},
  {img: gameMasterIcon, alt: 'View Hunters', path: ''},
  {img: overallIcon, alt: 'View Hunters', path: ''},
  {img: gameBoardIcon, alt: 'View Hunters', path: ''}
]

export default function Nav() {
  return(
  <div className='nav-style'>
  {navList.map((item, index) => {
    return (  <div key={index} className='nav-item'>
        <img src={item.img}/>
       </div>)
  })}
  </div>
  )
}
