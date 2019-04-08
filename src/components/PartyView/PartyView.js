import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

import HeroView from './HeroView'

import portrait from './../../img/charportrait.png'
import bar from './../../img/bar.png'

const styles = theme => ({
  portrait: {
    borderRadius: "250px",
  },
  heroWrapper: {
    display: 'flex'
  },
  heroStats: {
    transform: 'translateX(-40px)',
    zIndex: '-150'
  },
  heroSecondBar: {
    transform: 'translateX(20px)'
  },
  heroSecondBarFill: {
    position: 'absolute',
    zIndex: '-5',
    top: '2px',
    width: '100%',
    height: '86%',
    background: 'linear-gradient(left, #0c6a85 9%, #07364b 12%, #0c6a85 15%, #0c6a85 24%, #07364b 27%, #0c6a85 30%, #0c6a85 39%, #07364b 42%, #0c6a85 45%, #0c6a85 54%, #07364b 57%, #0c6a85 60%, #0c6a85 69%, #07364b 72%, #0c6a85 75%, #0c6a85 84%, #07364b 87%, #0c6a85 90%)',
    borderRadius: '20px',
    transform: 'translateX(-2px)'
  },
  heroSecondBarMask: {
    position: 'absolute',
    zIndex: '-2',
    top: '2px',
    right: 0,
    width: '80%',
    height: '86%',
    backgroundColor: '#282c34',
  },
  heroFirstBar: {
    position: 'relative'
  },
  heroFirstBarFill: {
    position: 'absolute',
    zIndex: '-5',
    top: '2px',
    width: '100%',
    height: '86%',
    background: 'linear-gradient(left, #a90329 9%, #6d0019 12%, #a90329 15%, #a90329 24%, #6d0019 27%, #a90329 30%, #a90329 39%, #6d0019 42%, #a90329 45%, #a90329 54%, #6d0019 57%, #a90329 60%, #a90329 69%, #6d0019 72%, #a90329 75%, #a90329 84%, #6d0019 87%, #a90329 90%)',
    borderRadius: '20px',
    transform: 'translateX(-2px)'
  },
  heroFirstBarMask: {
    position: 'absolute',
    zIndex: '-2',
    top: '2px',
    right: 0,
    width: '30%',
    height: '86%',
    backgroundColor: '#282c34',
  },
  heroName: {
    paddingLeft: "20px",
    marginBottom: "15px"
  }
})

class PartyView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props;
    return(
      <div className="pad-top centered">
        <div className={classes.heroWrapper}>
          <div className={classes.portrait} style={{background: "url(https://gamepedia.cursecdn.com/allstars_gamepedia/d/dd/Carbot_Mephisto_Portrait.png?version=39740fe1184e09032283fbf50b7c5784)"}}>
            <img src={portrait} height="102%" style={{transform: 'translate(-5px, -3px)'}}/>
          </div>
          <div className={classes.heroStats}>
            <div className={classes.heroName}>
              <h2>Lord Kromdor</h2>
            </div>
            <div className={classes.heroFirstBar}>
              <img src={bar}/>
              <div className={classes.heroFirstBarFill}></div>
              <div className={classes.heroFirstBarMask}></div>
            </div>
            <div className={classes.heroSecondBar}>
              <img src={bar}/>
              <div className={classes.heroSecondBarFill}></div>
              <div className={classes.heroSecondBarMask}></div>
            </div>
          </div>
        </div>
        <Link to='/CharacterMaker'>
          <button>Add Adventurer</button>
        </Link>
      </div>
    )
  }
}

PartyView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PartyView);
