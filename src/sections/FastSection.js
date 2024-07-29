import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Icon from "../Icons";
import FastCardOne from "./FastCardOne";
import FastCardSecond from "./FastCardSecond";
import FastCardThrid from "./FastCardThrid";

gsap.registerPlugin(ScrollTrigger);

const arr = [
  {
    component: () => <FastCardOne />,
  },
  { component: () => <FastCardSecond /> },
  { component: () => <FastCardThrid /> },
];
const widths = [840, 0, -840];

const FastSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cauroselTRef = useRef();
  console.log(cauroselTRef);

  useEffect(() => {
    gsap.set(cauroselTRef.current, { x: widths[0], y: 0 });
  }, []);

  useEffect(() => {
    gsap.to(cauroselTRef.current, {
      x: widths[currentIndex],
      ease: "none",
    });
  }, [currentIndex]);

  const onClickButton = (value) => {
    if (currentIndex + value >= 0 && currentIndex + value <= 2) {
      setCurrentIndex(currentIndex + value);
    }
  };
  return (
    <>
      <div className="carosel-container" ref={cauroselTRef}>
        {arr.map((each, index) => {
          return (
            <div
              className="carosel-card"
              onClick={() => setCurrentIndex(index)}
            >
              {each.component()}
            </div>
          );
        })}
      </div>
      <div className="arrow-container">
        <div
          style={{
            backgroundColor: currentIndex === 0 ? "#f2f3f5" : "#e8f0fd",
          }}
          className="arrow-button"
          onClick={() => onClickButton(-1)}
        >
          <Icon
            IconName={"left-arrow"}
            height={"26"}
            width={"26"}
            color={currentIndex === 0 ? "#808589" : "#196acc"}
          />
        </div>
        <div
          style={{
            backgroundColor: currentIndex === 2 ? "#f2f3f5" : "#e8f0fd",
          }}
          className="arrow-button"
          onClick={() => onClickButton(1)}
        >
          <Icon
            IconName={"right-arrow"}
            height={"26"}
            width={"26"}
            color={currentIndex === 2 ? "#808589" : "#196acc"}
          />
        </div>
      </div>
    </>
  );
};

export default FastSection;
