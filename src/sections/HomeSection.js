import React, { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Icon from "../Icons";
import FastSection from "./FastSection";

gsap.registerPlugin(ScrollTrigger);

const imgArr = [
  {
    imgSrc:
      "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-1-2x.webp",
    altText: "chrome-gallery-1-2x",
    className: "img-height border-radius-5",
  },
  {
    imgSrc:
      "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-2-2x.webp",
    altText: "chrome-gallery-2-2x",
    className: "img-height border-radius-20",
  },
  {
    imgSrc:
      "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3-2x.webp",
    altText: "chrome-gallery-3-2x",
    className: "img-height border-radius-5",
  },
  {
    imgSrc:
      "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-4-2x.webp",
    altText: "chrome-gallery-4-2x",
    className: "img-height border-radius-20",
  },
  {
    imgSrc:
      "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5-2x.webp",
    altText: "chrome-gallery-5-2x",
    className: "img-height border-radius-5",
  },
];

const tabs = [
  { id: "Updates", label: "Updates" },
  { id: "Yours", label: "Yours" },
  { id: "Safe", label: "Safe" },
  { id: "Fast", label: "Fast" },
  { id: "ByGoogle", label: "By Google" },
];

const HomeSection = () => {
  const sectionTabsRef = useRef(null);
  const imagesRef = useRef([]);
  const imageContainerRef = useRef();
  const overallWidthRef = useRef();

  const [scrollDirection, setScrollDirection] = useState();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState("Updates");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (scrollDirection === "up") {
      gsap.to(sectionTabsRef.current, {
        y: sectionTabsRef.current.offsetTop > 400 ? 64 : 0,
        duration: 0.5,
      });
    } else if (scrollDirection === "down") {
      gsap.to(sectionTabsRef.current, {
        y: 0,
        duration: 0.5,
      });
    }
  }, [scrollDirection, lastScrollY]);

  useEffect(() => {
    // Initial state
    gsap.set(imagesRef.current[0], { scale: 1.15, x: 100, y: -70 });
    gsap.set(imagesRef.current[1], { scale: 0, opacity: 0 });
    gsap.set(imagesRef.current[2], { scaleX: 1.3 });
    gsap.set(imagesRef.current[3], { scale: 1.3, x: 140, y: -103 });

    // Scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: overallWidthRef.current.scrollY,
        start: "top top",
        end: "500px top",
        scrub: true,
      },
    });

    tl.to(
      imagesRef.current[0],
      {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.5,
      },
      0
    );

    tl.to(
      imagesRef.current[1],
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
      },
      0
    );

    tl.to(
      imagesRef.current[2],
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
      },
      0
    );

    tl.to(
      imagesRef.current[3],
      {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.5,
      },
      0
    );

    gsap.to(imageContainerRef.current, {
      x: -overallWidthRef.current.offsetTop * 7,
      ease: "none",
      scrollTrigger: {
        trigger: overallWidthRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("div[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 50 &&
          window.scrollY < sectionTop + sectionHeight - 50
        ) {
          current = section.getAttribute("id");
        }
      });

      setActiveTab(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="home-section" ref={overallWidthRef}>
        <img
          src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
          alt="chrome-logo"
        />
        <h1 className="home-heading-text">The browser</h1>
        <h1 className="home-heading-text">built to be yours</h1>
        <ul ref={sectionTabsRef} className="home-page-sections">
          {tabs.map((each) => {
            return (
              <li className="section-home" key={each.id}>
                <a
                  key={each.id}
                  href={`#${each.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className={
                      activeTab === each.id
                        ? "section-home-tabs active-tab-section"
                        : "section-home-tabs"
                    }
                  >
                    {each.label}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
        <p style={{ marginBottom: "30px" }}>
          Need the Chrome installer?{" "}
          <a
            href="https://www.google.com/chrome/index.html"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            Download here
          </a>
        </p>
        <div
          className="image-scroller"
          ref={imageContainerRef}
          style={{ marginBottom: "30px" }}
        >
          {imgArr.map((each, index) => {
            return (
              <img
                key={index}
                ref={(el) => (imagesRef.current[index] = el)}
                className={each.className}
                src={each.imgSrc}
                alt={each.altText}
              />
            );
          })}
        </div>
        <div id={"Updates"} style={{ paddingTop: "70px" }}>
          <h1 className="section-headings">
            Discover the latest <br />
            <span className="section-headings-icon">
              <Icon
                IconName={"timer"}
                height={40}
                width={40}
                color={"#1d63d5"}
              />{" "}
              updates
            </span>{" "}
            from Chrome
          </h1>
          <div style={{ height: "700px" }}></div>
        </div>
        <div id={"Yours"} style={{ paddingTop: "70px" }}>
          <h1 className="section-headings">
            Make it{" "}
            <span className="section-headings-icon">
              <Icon
                IconName={"timer"}
                height={40}
                width={40}
                color={"#1d63d5"}
              />{" "}
              yours
            </span>{" "}
            and <br /> take it with you
          </h1>
          <div style={{ height: "700px" }}></div>
        </div>
        <div id={"Safe"} style={{ paddingTop: "70px" }}>
          <h1 className="section-headings">
            Stay{" "}
            <span className="section-headings-icon">
              <Icon
                IconName={"timer"}
                height={40}
                width={40}
                color={"#1d63d5"}
              />{" "}
              safe
            </span>{" "}
            <br /> while you browse.
          </h1>
          <div style={{ height: "700px" }}></div>
        </div>
        <div id={"Fast"} style={{ paddingTop: "70px" }}>
          <h1 className="section-headings">
            The{" "}
            <span className="section-headings-icon">
              <Icon
                IconName={"timer"}
                height={40}
                width={40}
                color={"#1d63d5"}
              />{" "}
              fast
            </span>{" "}
            way to do
            <br /> things online
          </h1>
          <FastSection />
          <div style={{ height: "700px" }}></div>
        </div>
        <div id={"ByGoogle"} style={{ paddingTop: "70px" }}>
          <h1 className="section-headings">
            The browser <br />{" "}
            <span className="section-headings-icon">
              <Icon
                IconName={"timer"}
                height={40}
                width={40}
                color={"#1d63d5"}
              />{" "}
              built
            </span>{" "}
            by Google
          </h1>
          <div style={{ height: "700px" }}></div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
