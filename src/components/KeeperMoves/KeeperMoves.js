import React from 'react'
import constants from './../../constants'

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

  contentType(content) {

  }
  renderMoveContent(id) {
    const moveKey = id.charAt(2)
    let keeperContent;
    if (Array.isArray(keeperMoves[moveKey].content)) {
      keeperContent = keeperMoves[moveKey].content.map( (contentItem, i) =>
        <div key={i}>
          {contentItem}
        </div>
      )
    } else {
      keeperContent = <div>
        {keeperMoves[moveKey].content.header}
        {keeperMoves[moveKey].content.list.map((l, i) => {
          console.log(i)
            return (
            <div key={i}>
              {l.title}
              {l.list.map((il, i) =>
                <div key={i}>
                  {il}
                </div>
              )}
            </div>
          )
        })}
      </div>
    }
    return (
      <div className='move-content'>
        {keeperMoves[moveKey].title}
        {keeperContent}
      </div>
    )
  }

  selectMenuItem(e) {
    this.setState({selectedMenuItem: e.target.id})
  }

  render() {
    console.log(keeperMoves)
    return (
      <div className='keeper-wrapper'>
        <div className='left-col'>
          {keeperMoves.map((navItem, i) => {
            return(
            <div
              key={i}
              id={navItem.id}
              className='km-menu-item'
              onClick={this.selectMenuItem}
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
