import React from 'react'

import {keeperMoves} from './../../constants/keeperMoves'
import './KeeperMoves.scss'

class KeeperMoves extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMenuItem: 'km0'
    }
    this.selectMenuItem = this.selectMenuItem.bind(this)
  }

  renderMoveContent(id) {
    const moveKey = id.charAt(2)
    let keeperContent;
    if (Array.isArray(keeperMoves[moveKey].content)) {
      keeperContent = <ul className="move-ul">
        {keeperMoves[moveKey].content.map( (contentItem, i) =>
          <li key={i}>
            {contentItem}
          </li>
        )}
      </ul>

    } else {
      keeperContent = <div>
        {keeperMoves[moveKey].content.header}
        {keeperMoves[moveKey].content.list.map((l, i) => {
          console.log(i)
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
        <h1>{keeperMoves[moveKey].title}</h1>
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
          {keeperMoves.map((navItem, i) => {
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

  export default KeeperMoves;
