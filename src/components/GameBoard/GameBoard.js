import React from 'react'
import { Stage, Layer, Rect, Image } from 'react-konva'
import Konva from 'konva'
import useImage from 'use-image'
import { connect } from "react-redux"
import _ from 'lodash'
import * as actions from "./../../actions"
import Drawer from '@material-ui/core/Drawer';
import rightArrow from './../../img/right-arrow.png'
import './GameBoard.scss'

const HeroImage = (props) => {
  const [image] = useImage(props.image)
  const startCoord = 140*props.xCoord - 120
  console.log(props)
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

class GameBoard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      openDrawer: false
    }
  }
  componentWillMount() {
    this.props.fetchHeroes();
  }

  toggleDrawer = drawerState => () => {
    this.setState({openDrawer: drawerState});
  };


  render() {
    console.log(this.props.data)
    const {data} = this.props
    let tempIndexer = 0;
    const imageLoader = _.map(data.heroes, (hero, key) => {
      tempIndexer++
      return <HeroImage xCoord={tempIndexer} image={hero.imgUrl} key={key}/>
    })

    const drawerContent = (<div>Content</div>)

      // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    return (
      <div>
        <Stage width={window.innerWidth - 80} height={window.innerHeight - 10}>
          <Layer>
            {imageLoader}
          </Layer>
        </Stage>
        <div className='menu-icon'>
          <img src={rightArrow} onClick={this.toggleDrawer(true)}></img>
        </div>
        <Drawer anchor='bottom' open={this.state.openDrawer} onClose={this.toggleDrawer(false)}>
          {drawerContent}
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = state => {
  let data
  if(!state.isFetching) {
    data = state.data
  }
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(GameBoard)
