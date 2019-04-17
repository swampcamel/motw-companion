import React from 'react'
import { Stage, Layer, Image } from 'react-konva'
import Konva from 'konva'
import useImage from 'use-image'
import { connect } from "react-redux"
import _ from 'lodash'
import * as actions from "./../../actions"
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Input from '@material-ui/core/Input'
import rightArrow from './../../img/right-arrow.png'
import './GameBoard.scss'

const HeroImage = (props) => {
  const [image] = useImage(props.image)
  const startCoord = 140*props.xCoord - 120
  return (
    <Image
      x={startCoord}
      y={80}
      width={120}
      height={120}
      draggable
      image={image}
    />
  )
}

const BgImage = (props) => {
  const [image] = useImage(props.image)
  return(
    <Image
      x={5}
      y={5}
      width={window.innerWidth - 80}
      height={window.innerHeight - 10}
      image={image}
    />
  )
}

class GameBoard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      openDrawer: false,
      bgImage: "https://i.pinimg.com/originals/c8/a5/7c/c8a57c06de6ed3ce3842a35be5255bb9.png",
      formFieldBgImage: "",
      openBgDialog: false,
    }
  }
  componentWillMount() {
    this.props.fetchHeroes()
  }


  toggleDrawer = drawerState => () => {
    this.setState({openDrawer: drawerState});
  };

  handleClose = () => {
    this.setState({openBgDialog: false})
  }

  handleChangeBgDialog = () => {
    this.setState({openBgDialog: true})
  }

  handleChangeBg = () => {
    this.setState({bgImage: this.state.formFieldBgImage})
  }

  handleFormChange = event => {
    this.setState({formFieldBgImage: event.target.value})
  }

  render() {
    const {gameBoard} = this.props.data.game

    let tempIndexer = 0;
    const imageLoader = _.map(gameBoard, (hero) => {
      tempIndexer++
      return <HeroImage xCoord={tempIndexer} image={hero.image} key={hero.id}/>
    })
    const referenceLoader = _.map(gameBoard, (hero, key) => {
      return(<div key={key}>{hero.name}</div>)
    })

      // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    return (
      <div>
        <Stage width={window.innerWidth - 80} height={window.innerHeight - 10}>
          <Layer>
            <BgImage image={this.state.bgImage}/>
            {imageLoader}
          </Layer>
        </Stage>
        <div className='menu-icon'>
          <img alt='' src={rightArrow} onClick={this.toggleDrawer(true)}></img>
        </div>
        <Drawer anchor='right' open={this.state.openDrawer} onClose={this.toggleDrawer(false)}>
          <div>
            {referenceLoader}
            <div>
              <img alt='' src={rightArrow} onClick={this.handleChangeBgDialog}/>
              <Dialog
                open={this.state.openBgDialog}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">{"Change Background Image"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <Input
                      type="text"
                      placeholder="Paste Image URL"
                      inputProps={{
                        'aria-label': 'Enter Name',
                        name: 'newHeroImgUrl',
                        id: 'hero-img'
                      }}
                      onChange={this.handleFormChange}
                      />
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleChangeBg} >
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = state => {
  let data
  if(!state.isFetching) {
    data = state
  }
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(GameBoard)
