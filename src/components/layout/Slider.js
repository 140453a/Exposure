import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert'

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {value: props.cur,
                  err: false}
    this.handleChange = this.handleChange.bind(this)
    this.locked = this.locked.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.handler(event.target.value);
  }

  locked(event){
    this.setState({err: true});
  }

  render(){
    let result = this.state.value
      if(this.props.type === "shut" ){
          switch (this.state.value) {
            case "1":
              result = "1/125"
              break;
            case "2":
              result = "1/60"
              break;
            case "3":
              result = "1/30"
              break;
            case "4":
              result = "1/15"
              break;
            case "5":
              result = "1/8"
              break;
            case "6":
              result = "1/4"
              break;
            case "7":
              result = "1/2"
              break;
            case "8":
              result = "1"
              break;
            default:
              result = "1/125"
              break;
          }
    }
    if(this.props.type === "f-stop" ){
        switch (this.state.value) {
          case "1":
            result = "F/2"
            break;
          case "2":
            result = "F/2.8"
            break;
          case "3":
            result = "F/4"
            break;
          case "4":
            result = "F/5.6"
            break;
          case "5":
            result = "F/8"
            break;
          case "6":
            result = "F/11"
            break;
          case "7":
            result = "F/16"
            break;
          case "8":
            result = "F/22"
            break;
          default:
            result = "F/2"
            break;
        }
    }


    return(
      <div>
       <label>
         <input
           id="typeinp"
           type="range"
           min={this.props.min} max={this.props.max}
           value={!this.props.locked ? this.state.value : this.props.cur}
           onChange={!this.props.locked ? this.handleChange : this.locked}
           step={this.props.step}/>
         <div className="sliderresult"> {result} </div>

         {/* This is the alert box for changing ISO */}
         {(() => {
           if (this.state.err) {
             return (
               <Alert variant="danger" onClose={() => this.setState({err: false})} dismissible>
               <Alert.Heading>The ISO for this photograph is 200!</Alert.Heading>
                 <p>
                  Please focus on changing the F-stop and shutter speed for now, particularly how
                  the depth of field (the blurriness of the background) changes when the F-stop is changed.
                 </p>
               </Alert>
             )
           } else {
             return (
               <div></div>
             )
           }
         })()}

       </label>
     </div>
    );
  }
}

export default Slider;
