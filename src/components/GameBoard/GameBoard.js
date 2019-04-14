import React from 'react'
import { Stage, Layer, Rect, Image } from 'react-konva'
import Konva from 'konva'
import useImage from 'use-image'
import { connect } from "react-redux"
import _ from 'lodash'
import * as actions from "./../../actions"

const HeroImage = (props) => {
  const [image] = useImage(props.image)
  return (
    <Image
      x={20}
      y={20}
      width={120}
      height={120}
      draggable
      image={image}
    />
  )
}

class GameBoard extends React.Component {
  componentWillMount() {
    this.props.fetchHeroes();
  }

  render() {
    console.log(this.props.data)
    const {data} = this.props
    const imageLoader = _.map(data.heroes, (hero, key) => {
      return <HeroImage image={hero.imgUrl} key={key}/>
    })
      // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    return (
      <Stage width={window.innerWidth - 80} height={window.innerHeight - 10}>
        <Layer>
          {imageLoader}
        </Layer>
      </Stage>
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
