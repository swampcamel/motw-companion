import React from 'react'

import {hunterMoves} from './../../constants/hunterMoves'
import './../KeeperMoves/KeeperMoves.scss'

class HunterMoves extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMenuItem: 'hm-0'
    }
    this.selectMenuItem = this.selectMenuItem.bind(this)
  }

  renderMoveContent(id) {
    const idArg = id.split("-")
    const moveKey = idArg[1]
    let keeperContent;
    if (Array.isArray(hunterMoves[moveKey].content)) {
      keeperContent = <ul className="move-ul">
        {hunterMoves[moveKey].content.map( (contentItem, i) =>
          <li key={i}>
            {contentItem}
          </li>
        )}
      </ul>

    } else {
      keeperContent = <div>
        <h2>{hunterMoves[moveKey].content.header}</h2>
        {hunterMoves[moveKey].content.list.map((l, i) => {
          return (
            <div key={i}>
              <h2 className="inner-ul-title">{l.title}</h2>
              <ul className="move-ul">
                {l.list.map((il, i) =>
                  <li key={i}>
                    {il}
                  </li>
                )}
              </ul>
            </div>
          )
        })}
      </div>
    }
    return (
      <div className='move-content'>
        <h1>{hunterMoves[moveKey].title}</h1>
        {keeperContent}
      </div>
    )
  }

  selectMenuItem(e) {
    this.setState({selectedMenuItem: e.target.id})
  }

  render() {
    return (
      <div className='keeper-wrapper'>
        <div className='left-col'>
          {hunterMoves.map((navItem, i) => {
            return(
              <div
                key={i}
                id={navItem.id}
                className='km-menu-item'
                onClick={(this.selectMenuItem)}
                >
                {navItem.title}
              </div>
            )})}
          </div>
          <div className='right-col'>
            {this.renderMoveContent(this.state.selectedMenuItem)}
          </div>
        </div>
      )
    }
  }

  export default HunterMoves;
