import React from 'react';
import PropTypes from 'prop-types';
import generateHero from './HeroModel'
import {addHero} from './../../actions'
import logo from './../../img/motwcharlogo.png';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
  fwrap: {
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});


class CharacterGen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newHeroName: '',
      newHeroClass: '',
      newHeroLevel: 1,
      newHeroImgUrl: ''
    }
  }

  handleFormChange = event => {
    switch(event.target.name) {
      case 'newHeroName': {
        this.setState({newHeroName: event.target.value})
        break;
      }
      case 'newHeroClass': {
        this.setState({newHeroClass: event.target.value})
        break;
      }
      case 'newHeroLevel': {
        this.setState({newHeroLevel: event.target.value})
        break;
      }
      case 'newHeroImgUrl': {
        this.setState({newHeroImgUrl: event.target.value})
        break;
      }
      default: {
        console.log("how?")
      }
    }
  }

  handleFormSubmit = () =>  {
    let newHero = generateHero(
      this.state.newHeroName,
      this.state.newHeroClass,
      this.state.newHeroLevel,
      this.state.newHeroImgUrl
    )
    addHero(newHero)
    console.log(newHero)
    this.setState({newHeroName: '', newHeroClass: '', newHeroLevel: 1, newHeroImgUrl: ''})
    this.props.history.push('/PartyView')
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="centered pad-top">
        <img src={logo} alt='M O T W Character Maker'></img>
        <form>
        <div className={classes.fwrap}>
            <Input
              type="text"
              placeholder="Name"
              className={classes.input}
              inputProps={{
                'aria-label': 'Enter Name',
                name: 'newHeroName',
                id: 'hero-id'
              }}
              onChange={this.handleFormChange}
              />
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="hero-class">Select Class</InputLabel>
            <Select
              value={this.state.newHeroClass}
              onChange={this.handleFormChange}
              inputProps={{
                name: 'newHeroClass',
                id: 'hero-class',
              }}
            >
              <MenuItem value="chosen">The Chosen</MenuItem>
              <MenuItem value="crooked">The Crooked</MenuItem>
              <MenuItem value="divine">The Divine</MenuItem>
              <MenuItem value="expert">The Expert</MenuItem>
              <MenuItem value="flake">The Flake</MenuItem>
              <MenuItem value="initiate">The Initiate</MenuItem>
              <MenuItem value="monstrous">The Monstrous</MenuItem>
              <MenuItem value="mundane">The Mundane</MenuItem>
              <MenuItem value="professional">The Professional</MenuItem>
              <MenuItem value="spellslinger">The Spell-Slinger</MenuItem>
              <MenuItem value="spooky">The Spooky</MenuItem>
              <MenuItem value="wronged">The Wronged</MenuItem>
            </Select>
          </FormControl>
          <TextField
            type="number"
            id="level"
            label="Level"
            value={this.state.newHeroLevel}
            onChange={this.handleFormChange}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              name: 'newHeroLevel',
              id: 'hero-level'
            }}
            margin="normal"
          />
        <Input
          type="text"
          placeholder="Paste Image URL"
          className={classes.input}
          inputProps={{
            'aria-label': 'Enter Name',
            name: 'newHeroImgUrl',
            id: 'hero-img'
          }}
          onChange={this.handleFormChange}
          />
        <a href="https://heroesofthestorm.gamepedia.com/Portrait" target="_blank">Recommended Resource</a>
          </div>
          <button type='button' onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

CharacterGen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(CharacterGen));
