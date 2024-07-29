import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);

  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 300) {
        if (currentScrollY > lastScrollY) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollDirection === "down") {
      gsap.to(headerRef.current, {
        y: -headerRef.current.offsetHeight,
        duration: 0.5,
      });
    } else if (scrollDirection === "up") {
      gsap.to(headerRef.current, { y: 0, duration: 0.5 });
    }
  }, [scrollDirection]);

  return (
    <div className="header" ref={headerRef}>
      <img
        src={
          "https://www.google.com/chrome/static/images/fallback/chrome-logo-2023.png"
        }
        alt="Google Chrome"
        width="134"
        height="36"
        className="chrome-image"
      />
      <ul className="header-tabs">
        <li className="header-list-element active-tab">
          <div className="tab">Home</div>
        </li>
        <li className="header-list-element">
          <div className="tab">The Browser by Google</div>
        </li>
        <li className="header-list-element">
          <div className="tab">Features</div>
        </li>
        <li className="header-list-element">
          <div className="tab">Support</div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
