import React, { Component } from 'react';
import Slider from '../layout/Slider';
import TrainerPicture from '../layout/TrainerPicture'

class Trainer extends Component {
  constructor(props){
    super(props)
    this.state={fstop:  "1",
                shutter: "1",
                iso:     "200"}

    this.alterFSlider = this.alterFSlider.bind(this)
    this.alterSSSlider = this.alterSSSlider.bind(this)
    this.alterISOSlider = this.alterISOSlider.bind(this)
  }


alterFSlider(newValue) {
  this.setState({
    fstop: newValue
  })
}

alterSSSlider(newValue) {
  this.setState({
    shutter: newValue
  })
}

alterISOSlider(newValue) {
  this.setState({
    iso: newValue
  })
}

  render(){
    return (
        <div className={"maintext container"}>
          <div className={"d-flex flex-row justify-content-center align-items-center flex-wrap"} >
            <div className={"col-md"}>
             <TrainerPicture stop={this.state.fstop} speed={this.state.shutter}/>
            </div>
            <div className={"col-md text-center sliders"}>
              F-Stop
              <Slider handler={this.alterFSlider} min="1" max="8" cur={this.state.fstop} type="f-stop" step="1"/>
              Shutter Speed
              <Slider handler={this.alterSSSlider} min="1" max="8" cur={this.state.shutter} type="shut" step="1" />
              ISO
              <Slider handler={this.alterISOSlider} min="100" max="6000" cur={this.state.iso} type="iso"  step="100" locked="true" />
            </div>
          </div>
        </div>
    );
  }
}

export default Trainer;
