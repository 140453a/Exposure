import React, { Component } from 'react';
import Images from '../../pictures/Images'

class Home extends Component {
render() {
    return (
        <div className={"maintext container"}>
          <div className={"row"}>
            <div className={"col-lg"}>
              <h1 className={"homeHeader"}>What Is Exposure?</h1>
              Exposure is the amount of light that hits the sensor or film of your camera.
              The film or sensor captures this light and saves the impression in either film or digital format.
              In this website I will be focusing on film exposure, but the processes for both are identical.
              It is helpful to think of exposure as tweaking three values: ISO, shutter speed, and aperture.
              Understanding these three important concepts allow any photographer to take well-exposed photographs which are not too dark, nor too bright.
            </div>
          </div>

          <h4 className={"homeHeader"}>What is Shutter Speed?</h4>
          <div className={"row"}>
            <div className={"col-lg"}>
              Shutter speed, along with aperture, directly affect the amount of light that reaches the film by changing mechanisms inside the lens.
              Shutter speed does this by altering the amount of time that the light hits the film.
              This is measured in seconds. So if you set the shutter speed to 1/4000, the film is exposed to light
              for just 1/4000 of a second. Setting the shutter speed to 1 will keep the shutter open for a full second.

              <br />
              <br />
              Fast shutter speeds are ideal for capturing fast moving things, like moving cars or sports.
              However, this allows less light in, so the other two variables must be adjusted to ensure the photograph isn't too dark.
              <br />
              <br />
              Slow shutter speeds are ideal for capturing nighttime photography.
              However, any motion in your scene will appear blurry, and a tripod is required so that the photograph remains as sharp as possible.


            </div>
          </div>

          <h4 className={"homeHeader"}>What is Aperture?</h4>
          <div className={"row"}>
            <div className={"col-lg"}>
              Aperture is the other variable that directly impacts that amount of light that hits the film by changing mechanisms inside the lens.
              The aperture is the width that the shutters open to when you press the capture button.
              Aperture is measured in "F-stops", with the notation F/x where x is a number usually between ~1.8 to ~ 22.
              This system is inverted, so the larger x is, the smaller the aperture is, and the smaller the F-stop is, the more wide-open the aperture is.
              <br />
              <br />
              Small F-stops are ideal for low-light conditions because the wide aperture allows more light in, allowing for a shorter exposure time.
              However, small F-stops have high depth of field (DOF), which makes objects that are beyond and before your focus blurry.
              This can be desirable or undesirable depending on the picture.
              <br />
              <br />
              Large F-stops are useful for daytime photography, and photography where DOF is undesirable, such as landscape photography.

            </div>
          </div>

          <h4 className={"homeHeader"}>What is ISO?</h4>
          <div className={"row"}>
            <div className={"col-lg"}>
              ISO is the final variable that affects the exposure of a photograph, and it happens inside the film or sensor of the camera.
              Simply put, ISO is the sensitivity of the film or camera. It is a measurement of how much light is required for it to be captured by the film.
              High ISO numbers mean that the film is more sensitive to light, and lower means less sensitive.
              Therefore, films with ISOs in the range 100-800 are good all-purpose films for daylight photography.
              <br />
              <br />
              For film, ISO is relatively static. Every film that is bought has a specified ISO that cannot be changed, and it is not easy to change out films between pictures.
              Therefore, usually aperture and shutter speed are altered instead of ISO to properly expose a picture, but this is not the case for digital cameras.
              <br />
              <br />
              The downside of a high ISO is that the pictures get "grainy" when using film, or "noisy" when using digital cameras.
              Therefore, it is usually best to keep ISO from climbing too high so that details aren't lost in the noise.

            </div>
          </div>

          <h4 className={"homeHeader"}>Exposure Triangle</h4>
          <div className={"row"}>
            <div className={"col-lg"}>
                <img src={Images.home.triangle} alt="An exposure triangle." className="img-fluid triangle"/>
            </div>
          </div>
      </div>
    );
  }
}
export default Home;
