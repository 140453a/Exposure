import React, { Component } from 'react';
import Images from '../../pictures/Images'

class TrainerPicture extends Component {
  render() {
    let result = '';
    let expose = '';
    switch (this.props.stop) {
      case "1":
        result = Images.trainer.n1;
        break;
      case "2":
        result = Images.trainer.n2;
        break;
      case "3":
        result = Images.trainer.n3;
        break;
      case "4":
        result = Images.trainer.n4;
        break;
      case "5":
        result = Images.trainer.n5;
        break;
      case "6":
        result = Images.trainer.n6;
        break;
      case "7":
        result = Images.trainer.n7;
        break;
      case "8":
        result = Images.trainer.n8;
        break;
      default:
        result = Images.trainer.n1;
        break;
    }
    expose = parseInt(this.props.stop) - parseInt(this.props.speed)
    return(
      <div>

        <img src={result} alt="An fruit resting on a table with a vase of flowers in the background." className={"img-fluid expose" + expose}/>
     </div>
    );
  }
}

export default TrainerPicture;
