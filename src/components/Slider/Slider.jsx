import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import styles from "./Slider.module.scss";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/rybakin.jpg";
export const Slider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <AutoplaySlider
      bullets={false}
      className={styles.awsbtn}
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >
      <div>
        <img src={img1} alt="img1" />
      </div>
      <div>
        <img src={img2} alt="img2" />
      </div>
      <div>
        <img src={img3} alt="img3" />
      </div>
      <div>
        <img src={img4} alt="img4" />
      </div>
    </AutoplaySlider>
  );
};

export default Slider;
