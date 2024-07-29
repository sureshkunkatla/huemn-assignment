import React from "react";

const FastCardThrid = () => {
  return (
    <div className="fast-card-third">
      <div className="fast-card-third-content">
        <div className="fast-card-third-heading">
          <h1 style={{ textAlign: "left", fontSize: "28px", color: "#fff" }}>
            Optimised for
            <br />
            your device
          </h1>
          <p style={{ textAlign: "left", color: "#fff" }}>
            Chrome is built to work with your device across platforms. That
            means a smooth experience on whatever you’re working with.
          </p>
        </div>
        <div className="fast-card-third-qr">
          <img
            src={
              "https://www.google.com/chrome/static/images/campaigns/chrome-download/qr-code-2x.webp"
            }
            alt={"videoframe-text"}
            height={"104px"}
            width={"104px"}
          />
          <p style={{ fontSize: "12px" }}>
            Scan for the
            <br /> Chrome app
          </p>
        </div>
      </div>
      <div className="image-container">
        <img
          src={
            "https://www.google.com/chrome/static/images/homepage/fast/devices_desktop-2x.webp"
          }
          alt={"videoframe-text"}
          height={"478px"}
          style={{
            // objectFit: "contain",
            borderRadius: "15px",
            position: "absolute",
            bottom: "0px",
            right: "-120px",
          }}
        />
      </div>
    </div>
  );
};

export default FastCardThrid;
