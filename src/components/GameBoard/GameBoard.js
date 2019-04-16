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
    const referenceLoader = _.map(data.heroes, (hero, key) => {
      return(<div key={key}>{hero.name}</div>)
    })

    const drawerContent = (<div>Content</div>)

      // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    return (
      <div>
        <Stage width={window.innerWidth - 80} height={window.innerHeight - 10}>
          <Layer>
            <BgImage image="https://i.pinimg.com/originals/c8/a5/7c/c8a57c06de6ed3ce3842a35be5255bb9.png"/>
            {imageLoader}
          </Layer>
        </Stage>
        <div className='menu-icon'>
          <img src={rightArrow} onClick={this.toggleDrawer(true)}></img>
        </div>
        <Drawer anchor='right' open={this.state.openDrawer} onClose={this.toggleDrawer(false)}>
          <div>
            {referenceLoader}
          </div>
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
