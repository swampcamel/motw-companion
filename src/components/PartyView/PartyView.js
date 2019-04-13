import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import _ from "lodash"
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import * as actions from "./../../actions"

import portrait from './../../img/charportrait.png'
import bar from './../../img/bar.png'
import leftArrow from './../../img/left-arrow.png'
import rightArrow from './../../img/right-arrow.png'
import closeBtn from './../../img/close-btn.png'

const styles = theme => ({
  portrait: {
    borderRadius: "250px",
    zIndex: 5
  },
  heroWrapper: {
    display: 'flex',
    marginBottom: '50px'
  },
  heroStats: {
    transform: 'translateX(-40px)',
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
    transition: 'width ease-in-out 0.5s'
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
    width: '10%',
    height: '86%',
    backgroundColor: '#282c34',
    transition: 'width ease-in-out 0.5s'
  },
  heroName: {
    paddingLeft: '20px',
    marginBottom: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '550px'
  },
  closeBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '30px',
    background: `url(${closeBtn})`,
    width: '41px',
    height: '41px',
    '&:hover': {
      boxShadow: '0px 0px 15px 4px rgba(183,28,28,0.82)'
    }
  },
valueStyle: {
    position: 'absolute',
    top: '30%',
    right: '15%'
  },
  barWrapper: {
    display: 'flex'
  },
  controlsWrapper: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    width: '82px',
    zIndex: 200,
    transform: 'translate(60px, 5px)'
  },
  rightToggle: {
    background: `url(${rightArrow})`,
    width: '35px',
    height: '35px',
    '&:hover': {
      transform: 'scale(1.07)'
    }
  },
  leftToggle: {
    background: `url(${leftArrow})`,
    width: '35px',
    height: '35px',
    '&:hover': {
      transform: 'scale(1.07)'
    }
  }
})

class PartyView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deleteHeroLoad: null,
      open: false,
    }
  }

  componentWillMount() {
    this.props.fetchHeroes();
  }

  handleControlToggle = event => {
    // target ids are written with a modifier_target_key syntax eg. inc_hp_-fakeKey
    let toggleQuery = event.target.id.split('$')
    console.log(toggleQuery)
    if (toggleQuery[1] === 'hp') {
      (toggleQuery[0] === 'inc') ?
      this.props.changeHeroHp(
        toggleQuery[2],
        (this.props.data.heroes[toggleQuery[2]].harmPointValue + 1)
      ) :
      this.props.changeHeroHp(
        toggleQuery[2],
        (this.props.data.heroes[toggleQuery[2]].harmPointValue - 1)
      )
    } else if (toggleQuery[1] === 'luck') {
      (toggleQuery[0] === 'inc') ?
      this.props.changeHeroLuck(
        toggleQuery[2],
        (this.props.data.heroes[toggleQuery[2]].luckPointValue + 1)
      ) :
      this.props.changeHeroLuck(
        toggleQuery[2],
        (this.props.data.heroes[toggleQuery[2]].luckPointValue - 1)
      )
    }
  }

  handleDeleteDialog(heroId) {
    this.setState({open: true, deleteHeroLoad: heroId})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  handleDeleteHero = heroId => {
    this.props.deleteHero(heroId)
    this.setState({open: false, deleteHeroLoad: null})
  }

  render() {
    console.log(this.state)
    console.log(this.props)
    const { classes, data } = this.props
    const heroes = _.map(data.heroes, (hero, key) => {
      let hpBarWidth, luckBarWidth
      if (hero.harmPointValue <= 0) {
        hpBarWidth = '100%'
      } else {
        hpBarWidth = 100 - (Math.round( (hero.harmPointValue / 7) * 100 ))
        hpBarWidth = parseInt(hpBarWidth) + '%'
      }
      if (hero.luckPointValue <= 0) {
        luckBarWidth = '100%'
      } else {
        luckBarWidth = 100 - (Math.round( (hero.luckPointValue / 7) * 100 ))
        luckBarWidth = parseInt(luckBarWidth) + '%'
      }
      return <div key={key} className={classes.heroWrapper}>
              <div className={classes.portrait} style={{background: `url(${hero.imgUrl})`}}>
                <img src={portrait} alt='' width="103%" height="102%" style={{transform: 'translate(-5px, -3px)'}}/>
              </div>
              <div className={classes.heroStats}>
                <div className={classes.heroName}>
                  <h2>{hero.name}</h2>
                  <h4>THE {hero.type.toUpperCase()}</h4>
                  <h3>Lv. {hero.level}</h3>
                  <div className={classes.closeBtn} onClick={() => this.handleDeleteDialog(key)}>
                  </div>
                   <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">{"Delete this Character?"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        By clicking, you agree to permanently remove this character from the server.  This action cannot be undone.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleClose} >
                        Go Back
                      </Button>
                      <Button onClick={() => this.handleDeleteHero(this.state.deleteHeroLoad)} autoFocus>
                        Axe em
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
                <div className={classes.barWrapper}>
                  <div className={classes.heroFirstBar}>
                    <img src={bar} alt=''/>
                    <div className={classes.heroFirstBarFill}></div>
                    <div className={classes.heroFirstBarMask} style={{width: hpBarWidth}}></div>
                    <div className={classes.valueStyle}>
                      <h4>{hero.harmPointValue} / 7</h4>
                    </div>
                  </div>
                  <div className={classes.controlsWrapper}>
                    <div className={classes.leftToggle} id={'dec$hp$'+key} onClick={this.handleControlToggle}>
                    </div>
                    <div className={classes.rightToggle} id={'inc$hp$'+key} onClick={this.handleControlToggle}>
                    </div>
                  </div>
                </div>
                <div className={classes.barWrapper}>
                  <div className={classes.heroSecondBar}>
                    <img src={bar} alt=''/>
                    <div className={classes.heroSecondBarFill}></div>
                    <div className={classes.heroSecondBarMask} style={{width: luckBarWidth}}></div>
                    <div className={classes.valueStyle}>
                      <h4>{hero.luckPointValue} / 7</h4>
                    </div>
                  </div>
                  <div className={classes.controlsWrapper}>
                    <div className={classes.leftToggle} id={'dec_luck_'+key} onClick={this.handleControlToggle}>
                    </div>
                    <div className={classes.rightToggle} onClick={this.handleControlToggle} id={'inc_luck_'+key}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    })
    return(
      <div className="pad-top centered">
        {heroes}
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

const mapStateToProps = state => {
  let data
  if(!state.isFetching) {
    data = state.data
  }
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(withStyles(styles)(PartyView));
