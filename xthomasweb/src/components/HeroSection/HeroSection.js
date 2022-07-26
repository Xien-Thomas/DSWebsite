import React from "react";
import night from "../../videos/ai1.mp4";
import file from "./Resume-xt-2022-april.pdf";
import save from "file-saver";
import { Button } from "../Buttons/Buttons";
import "../../App.css";
import "./HeroSection.css";
function HeroSection() {
  return (
    <div className="hero-container">
      <video src={night} autoPlay loop muted />
      <h1>AI/ DATA SCIENCTIST/ SOFTWARE ENGINEER</h1>
      <div className="hero-btns">
        <Button
          classname="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={savefile}
        >
          RESUME
        </Button>
      </div>
    </div>
  );
}

const savefile = () => {
  save.saveAs(file, "Resume-xt-2022-april.pdf");
};
export default HeroSection;
