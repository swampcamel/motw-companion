import React from 'react'
import { Image } from 'react-konva'
import useImage from 'use-image'
import { connect } from "react-redux"

class HeroImage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const [image] = useImage(this.props.image)
    const payload = {
      name: this.props.name,
      id: this.props.id,
      image: this.props.imgUrl,
      visible: this.props.visible,
      x: this.props.x,
      y: this.props.y
    }
    console.log(this.props)
    return (
      <Image
        x={this.props.x}
        y={this.props.y}
        width={120}
        height={120}
        draggable
        image={image}

      />
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
}
export default HeroImage
