import React, { Component } from 'react';
import GallerySlider from "../layout/GallerySlider"

class Gallery extends Component {
  constructor(props) {
  super(props);
  this.state = {
    error: null,
    isLoaded: false,
    items: [],
    slider: 4
    };
  this.sliderHandler = this.sliderHandler.bind(this)
  }

  sliderHandler(newValue) {
    this.setState({
      slider: newValue
    })


    fetch("http://localhost:2999/resp/getRandom/" + newValue + "/12")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
            error: null
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: true
          });
        }
      )
  };

  componentDidMount() {
  fetch("http://localhost:2999/resp/getRandom/" + this.state.slider + "/12")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render(){
    const { error, isLoaded, items } = this.state;
    if (error) {
     return(
       <div className="maintext container">
         <h1 className="font-weight-light text-center mt-4 mb-0">Exposure Gallery</h1>

         <hr className="mt-2 mb-5" />
         <div className="slidecontainer">
           <GallerySlider handler={this.sliderHandler} min="-2" max="18" cur={this.state.slider} step="1"/>
         </div>
         <div className="maintext text-center">
          Uh oh... There doesn't appear to be any images for this exposure!
         </div>
        </div>
      )

   } else if (!isLoaded) {
     return <div>Loading...</div>;
   } else {
     return (
        <div className="maintext container">
          <h1 className="font-weight-light text-center mt-4 mb-0">Exposure Gallery</h1>

          <hr className="mt-2 mb-5" />
          <div className="slidecontainer">
            <GallerySlider handler={this.sliderHandler} min="-2" max="18" cur={this.state.slider} step="1"/>
          </div>
          <div className="row text-center text-lg-left">

            <div className="col-lg-3 col-md-4 col-6">
              <a href={items[0].url} className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src={items[0].url} alt={items[0].title}/>
                  </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href={items[1 % items.length].url} className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src={items[1 % items.length].url} alt={items[1 % items.length].title}/>
                  </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href={items[2 % items.length].url} className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src={items[2 % items.length].url} alt={items[2 % items.length].title}/>
                  </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href={items[3 % items.length].url} className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src={items[3 % items.length].url} alt={items[3 % items.length].title}/>
                  </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href={items[4 % items.length].url} className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src={items[4 % items.length].url} alt={items[4 % items.length].title}/>
                  </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href={items[5 % items.length].url} className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src={items[5 % items.length].url} alt={items[5 % items.length].title}/>
                  </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href={items[6 % items.length].url} className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src={items[6 % items.length].url} alt={items[6 % items.length].title}/>
                  </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href={items[7 % items.length].url} className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src={items[7 % items.length].url} alt={items[7 % items.length].title}/>
                  </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href={items[8 % items.length].url} className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src={items[8 % items.length].url} alt={items[8 % items.length].title}/>
                  </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href={items[9 % items.length].url} className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src={items[9 % items.length].url} alt={items[9 % items.length].title}/>
                  </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href={items[10 % items.length].url} className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src={items[10 % items.length].url} alt={items[10 % items.length].title}/>
                  </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href={items[11 % items.length].url} className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src={items[11 % items.length].url} alt={items[11 % items.length].title}/>
                  </a>
            </div>
          </div>

        </div>
      );
    }
  }
}

export default Gallery;
