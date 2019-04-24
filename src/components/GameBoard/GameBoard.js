import React from 'react'
import { Stage, Layer, Image } from 'react-konva'
import useImage from 'use-image'
import { connect } from "react-redux"
import _ from 'lodash'
import {updateHeroLayer, addGameAsset, fetchAssets, updateAssetLayer, deleteAssetLayer, toggleAssetOpacity, toggleHeroOpacity, updateBackground} from "./../../actions"
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Input from '@material-ui/core/Input'
import rightArrow from './../../img/right-arrow.png'
import closeBtn from './../../img/close-btn.png'
import './GameBoard.scss'

const HeroImage = (props) => {
  const [image] = useImage(props.image)
  const opacity = props.visible ? 100 : 0
  return (
    <Image
      x={props.x}
      y={props.y}
      width={120}
      height={120}
      draggable
      image={image}
      opacity={opacity}
      onDragEnd={ e => { props.updateLayer({
        name: props.name,
        id: props.id,
        image: props.image,
        visible: props.visible,
        x: e.target.x(),
        y: e.target.y()
      })}}
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
      formFieldBgImage: "",
      openBgDialog: false,
      openAddAssetDialog: false,
      formFieldAddImageUrl: "",
      formFieldAddImageName: "",
    }
  }

  componentWillMount() {
    this.props.fetchAssets()
  }

  toggleDrawer = drawerState => () => {
    this.setState({openDrawer: drawerState});
  };

  handleCloseBgDialog = () => {
    this.setState({openBgDialog: false})
  }

  handleChangeBgDialog = () => {
    this.setState({openBgDialog: true})
  }

  handleChangeBg = () => {
    this.props.updateBackground(this.state.formFieldBgImage)
    this.setState({formFieldBgImage: ''})
  }

  handleAddAssetDialog = () => {
    this.setState({openAddAssetDialog: true})
  }

  handleCloseAssetDialog = () => {
    this.setState({openAddAssetDialog: false})
  }

  handleFormChange = event => {
    this.setState({formFieldBgImage: event.target.value})
  }

  handleAddUrlField = event => {
    this.setState({formFieldAddImageUrl: event.target.value})
  }

  handleAddNameField = event => {
    this.setState({formFieldAddImageName: event.target.value})
  }

  handleUpdateLayer = layer => {
    this.props.updateHeroLayer(layer)
  }

  handleUpdateAsset = asset => {
    this.props.updateAssetLayer(asset)
  }

  handleDeleteAsset = event => {
    this.props.deleteAssetLayer(event.target.id)
  }

  handleOpacityChange = event => {
    let switchValue = event.target.attributes[1].value
    const id = event.target.attributes[0].value
    switchValue = switchValue === "true" ? false : true
    this.props.toggleAssetOpacity(id, switchValue)
  }

  handleHeroVisible = event => {
    let switchValue = event.target.attributes[1].value
    const id = event.target.attributes[0].value
    switchValue = switchValue === "true" ? false : true
    this.props.toggleHeroOpacity(id, switchValue)
  }

  handleAddAsset = () => {
    const newAsset = {
      x: 0,
      y: 0,
      image: this.state.formFieldAddImageUrl,
      name: this.state.formFieldAddImageName,
      visible: true
    }
    this.props.addGameAsset(newAsset)
    this.handleCloseAssetDialog()
    this.setState({formFieldAddImageUrl: "", formFieldAddImageName: ""})
  }

  render() {
    const {heroes, userUploads} = this.props.data.game
    const heroLoader = _.map(heroes, (hero, key) => {
      return <HeroImage
        x={hero.x}
        y={hero.y}
        visible={hero.visible}
        name={hero.name}
        image={hero.image}
        key={key}
        id={hero.id}
        updateLayer={this.handleUpdateLayer} />
    })
    const heroReferenceLoader = _.map(heroes, (hero, key) => {
      return(<div className="hero-control" key={key}>
        <div className="left-ac-wrapper">
          <img
            alt="hero reference"
            src={hero.image}
            width={20}
            height={20} />
          <span
            id={key}
            view={hero.visible.toString()}
            onClick={this.handleHeroVisible}>
            {hero.name}
          </span>
        </div>
      </div>)
    })
    const assetLoader = _.map(userUploads, (asset, key) => {
      return <HeroImage
        x={asset.x}
        y={asset.y}
        visible={asset.visible}
        image={asset.image}
        key={key}
        id={key}
        name={asset.name}
        updateLayer={this.handleUpdateAsset}/>
    })

    const assetReferenceLoader = _.map(userUploads, (asset, key) => {
      return(
        <div className="asset-control" key={key}>
          <div className="left-ac-wrapper">
            <img
              alt="asset reference"
              src={asset.image}
              width={20}
              height={20} />
            <span
              id={key}
              view={asset.visible.toString()}
              onClick={this.handleOpacityChange}>
              {asset.name}
            </span>
          </div>
          <img
            alt="Delete Asset"
            id={key}
            onClick={this.handleDeleteAsset}
            src={closeBtn}
            width={20}
            height={20} />
        </div>)
      })

    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    return (
      <div>
        <Stage width={window.innerWidth - 80} height={window.innerHeight - 10}>
          <Layer>
            <BgImage image={this.props.data.game.background}/>
            {heroLoader}
            {assetLoader}
          </Layer>
        </Stage>
        <div className='menu-icon'>
          <img alt='' src={rightArrow} onClick={this.toggleDrawer(true)}></img>
        </div>
        <Drawer anchor='right' open={this.state.openDrawer} onClose={this.toggleDrawer(false)}>
          <div className="toolbar">
            <h3>Hunters</h3>
            {heroReferenceLoader}
            <h3>Assets</h3>
            {assetReferenceLoader}
            <div className="toolbar-control">
              <img alt='' src={rightArrow} onClick={this.handleChangeBgDialog}/>
              <span>Change Background</span>
              <Dialog
                open={this.state.openBgDialog}
                onClose={this.handleCloseBgDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">{"Change Background Image"}</DialogTitle>
                <DialogContent>
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
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleChangeBg} >
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            <div className="toolbar-control">
              <img alt='' src={rightArrow} onClick={this.handleAddAssetDialog}/>
              <span>Add Layer</span>
              <Dialog
                open={this.state.openAddAssetDialog}
                onClose={this.handleCloseAssetDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">{"Add Asset"}</DialogTitle>
                <DialogContent className="add-input-wrapper">
                    <Input
                      type="text"
                      placeholder="Paste Image URL"
                      inputProps={{
                        'aria-label': 'Enter URL',
                        name: 'newImgUrl',
                        id: 'asset-img'
                      }}
                      onChange={this.handleAddUrlField}
                    />
                    <Input
                      type="text"
                      placeholder="Give it a name"
                      inputProps={{
                        'aria-label': 'Enter Name',
                        name: 'newImgName',
                        id: 'asset-name'
                      }}
                      onChange={this.handleAddNameField}
                    />

                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleAddAsset} >
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



export default connect(mapStateToProps, {updateHeroLayer, addGameAsset, fetchAssets, updateAssetLayer, deleteAssetLayer, toggleAssetOpacity, toggleHeroOpacity, updateBackground})(GameBoard)
