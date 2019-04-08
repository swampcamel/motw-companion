import React from 'react';
import PropTypes from 'prop-types';
import logo from './../../img/motwcharlogo.png';
import { withStyles } from '@material-ui/core/styles';
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
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="centered pad-top">
        <img src={logo}></img>
        <div className={classes.fwrap}>
          <Input
            placeholder="Name"
            className={classes.input}
            inputProps={{
              'aria-label': 'Enter Name',
            }}
            />
          <FormControl className={classes.formControl}>
          <InputLabel htmlFor="hero-class">Select Class</InputLabel>
          <Select
            value='a'
            onChange={this.handleChange}
            inputProps={{
              name: 'hero-class',
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
          id="level"
          label="Level"
          value="1"
          onChange={this.handleChange}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        </div>
        <button>Submit</button>
      </div>
    )
  }
}

CharacterGen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterGen)
