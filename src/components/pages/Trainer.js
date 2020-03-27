import React, { Component } from 'react';
import Slider from '../layout/Slider';

class Trainer extends Component {
  render(){
    return (
        <div className={"maintext container"}>
          <div className={"row"}>
            <div className={"col-lg"}>
            Picture goes here
            </div>
            <div className={"col-lg"}>
              F-Stop
              <Slider min="2" max="22" cur="2" type="f-stop" step="1"/>
              Shutter Speed
              <Slider min="1" max="8" cur="1" type="shut" step="1" />
              ISO
              <Slider min="100" max="6000" type="iso" cur="200" step="100" locked="true" />
            </div>
          </div>
        </div>
    );
  }
}

export default Trainer;
