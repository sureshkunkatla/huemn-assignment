import React from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FastCardOne = () => {
  return (
    <div className="fast-card-one">
      <div className="fast-card-one-content">
        <div className="heading-content">
          <h1 className="heading-text-black">
            Prioritise
            <br />
            performance
          </h1>
        </div>
        <div className="description-content">
          <p className="description-text-fast-card-1">
            Chrome is built for performance. Optimise your experience <br />{" "}
            with features like Energy Saver and Memory Saver.
          </p>
          <p className="fast-card-1-link">
            Learn more about Memory and Energy Saver
          </p>
        </div>
      </div>
      <img
        src={require("../assets/videoframe_15900.png")}
        alt={"videoframe-text"}
        height={"484px"}
        width={"838px"}
        style={{
          borderRadius: "15px",
          position: "absolute",
          top: "220px",
          left: "-82px",
        }}
      />
    </div>
  );
};

export default FastCardOne;
