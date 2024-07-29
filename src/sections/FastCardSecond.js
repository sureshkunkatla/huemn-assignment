import React from "react";

const FastCardSecond = () => {
  return (
    <div className="fast-card-second">
      <div className="fast-card-one-content">
        <div className="heading-content">
          <h1 className="heading-text-black">
            Stay on top
            <br />
            of tabs
          </h1>
        </div>
        <div className="description-content">
          <p className="description-text-fast-card-1">
            Chrome has tools to help you manage the tabs you’re not <br /> quite
            ready to close. Group, label, and colour-code your tabs <br /> to
            stay organised and work faster.
          </p>
        </div>
      </div>
      <img
        src={
          "https://www.google.com/chrome/static/images/homepage/fast/tabs-groups_desktop-2x.webp"
        }
        alt={"videoframe-text"}
        height={"263px"}
        width={"838px"}
        style={{
          borderRadius: "15px",
          position: "absolute",
          top: "220px",
          left: "15px",
        }}
      />
    </div>
  );
};

export default FastCardSecond;
