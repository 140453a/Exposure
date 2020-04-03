import React, { Component } from 'react';

class GallerySlider extends Component {
  constructor(props) {
    super(props)
    this.state = {value: props.cur}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.handler(event.target.value);
  }

  render(){
    let result = this.state.value
    return(
      <React.Fragment>
         <input
           id="typeinp"
           type="range"
           min={this.props.min} max={this.props.max}
           value={this.state.value}
           onChange={this.handleChange}
           step={this.props.step}
           className="slider"/>
         <div className="galleryresult"> {result} </div>
     </React.Fragment>
    );
  }
}

export default GallerySlider;
