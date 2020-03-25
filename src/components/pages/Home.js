import React, { Component } from 'react';


class Home extends Component {
render() {
    return (
        <div className={"maintext container"}>
          <div className={"row"}>
            <div className={"col-lg-12"}>
              <h1>What Is Exposure?</h1>
              Exposure is the amount of light that hits the sensor or film of your camera.
              The film or sensor captures this light and saves the impression in either film or digital format.
              In this website I will be focusing on film exposure, but the processes for both are identical.
              It is helpful to think of exposure as tweaking three values: ISO, shutter speed, and aperture.
              Understanding these three important concepts allow any photographer to take well-exposed photographs which are not too dark, nor too bright.
            </div>
          </div>

          <h4>What is Shutter Speed?</h4>
          <div className={"row"}>
            <div className={"col-lg-12"}>
              Shutter speed, along with aperture, directly affect the amount of light that reaches the film.
              Shutter speed does this by altering the amount of time that the light hits the film.
              This is measured in seconds. So if you set the shutter speed to 1/4000, the film is exposed to light
              for just 1/4000 of a second. Setting the shutter speed to 1 will keep the shutter open for a full second.

              <br />
              Fast shutter speeds are ideal for capturing fast moving things, like moving cars or sports.
              However, this allows less light in, so the other two variables must be adjusted to ensure the photograph isn't too dark.

              <br />
              Slow shutter speeds are ideal for capturing nighttime photography.
              However, any motion in your scene will appear blury, and a tripod is required so that the photograph remains as sharp as possible.


            </div>
          </div>

          <h4>What is Aperture?</h4>
          <div className={"row"}>
            <div className={"col-lg-12"}>
              Aperture is the other variable that directly impacts that amount of light that hits the film.
              The aperture is the width that the shutters open to when you press the capture button.
            </div>
          </div>

          <h4>What is ISO?</h4>
          <div className={"row"}>
            <div className={"col-lg-12"}>
              ISO is
            </div>
          </div>

          <h4>Exposure Triangle</h4>
          <div className={"row"}>
            <div className={"col-lg-12"}>
              triangle
            </div>
          </div>
      </div>
    );
  }
}
export default Home;
