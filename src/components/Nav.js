import React from 'react'
import {Link} from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip';
import './Nav.scss'
import heroViewIcon from './../img/heroViewIcon.png'
import genericMovesIcon from './../img/genericMovesIcon.png'
import gameMasterIcon from './../img/gameMasterIcon.png'
import overallIcon from './../img/overallMysteryIcon.png'
import gameBoardIcon from './../img/gameBoardIcon.png'


const navList = [
  {img: heroViewIcon, alt: 'View Hunters', path: '/PartyView'},
  {img: genericMovesIcon, alt: 'Player Moves', path: ''},
  {img: gameMasterIcon, alt: 'Keeper Moves', path: '/KeeperMoves'},
  {img: overallIcon, alt: 'Knowledge Base', path: ''},
  {img: gameBoardIcon, alt: 'Game Board', path: ''}
]

export default function Nav() {
  return(
  <div className='nav-style'>
  {navList.map((item, index) => {
    return (
        <Link key={index} to={item.path}>
          <div  className='nav-item'>
            <Tooltip title={item.alt} placement='right'>
              <img src={item.img} alt={item.alt}/>
            </Tooltip>
          </div>
        </Link>
      )
  })}
  </div>
  )
}
