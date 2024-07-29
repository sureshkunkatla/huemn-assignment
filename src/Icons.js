import React from "react";

function Icon({ IconName, height, width, color }) {
  switch (IconName) {
    case "timer":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || "800"}
          height={height || "800"}
          viewBox="0 0 48 48"
        >
          <g data-name="Layer 2">
            <path
              fill={"none"}
              d="M0 0H48V48H0z"
              data-name="invisible box"
            ></path>
            <g data-name="icons Q2">
              <path
                fill={color || "#000"}
                d="M2 24a22 22 0 0041.7 9.7 2 2 0 00-.5-2.6 2 2 0 00-3 .7A17.8 17.8 0 0124 42a18 18 0 1113.4-30h-5.3a2.1 2.1 0 00-2.1 1.7 2 2 0 002 2.3h10a2 2 0 002-2V4.1A2.1 2.1 0 0042.3 2 2 2 0 0040 4v4.9A22 22 0 002 24z"
              ></path>
              <path
                fill={color || "#000"}
                d="M34 32a1.7 1.7 0 01-1-.3l-11-6.6V14a2 2 0 014 0v8.9l9 5.4a1.9 1.9 0 01.7 2.7 1.9 1.9 0 01-1.7 1z"
              ></path>
            </g>
          </g>
        </svg>
      );
    case "left-arrow":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || "800"}
          height={height || "800"}
          fill={color || "#000"}
          version="1.1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          <path d="M441.751 475.584L222.166 256 441.75 36.416a21.33 21.33 0 004.629-23.253C443.094 5.184 435.286 0 426.667 0H320.001a21.24 21.24 0 00-15.083 6.251L70.251 240.917c-8.341 8.341-8.341 21.824 0 30.165l234.667 234.667A21.239 21.239 0 00320.001 512h106.667c8.619 0 16.427-5.184 19.712-13.163a21.33 21.33 0 00-4.629-23.253z"></path>
        </svg>
      );
    case "right-arrow":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || "800"}
          height={height || "800"}
          fill={color || "#000"}
          version="1.1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          <path d="M441.749 240.917L207.082 6.251A21.239 21.239 0 00191.999 0H85.333c-8.619 0-16.427 5.184-19.712 13.163a21.33 21.33 0 004.629 23.253L289.834 256 70.25 475.584a21.33 21.33 0 00-4.629 23.253C68.906 506.816 76.714 512 85.333 512H192a21.24 21.24 0 0015.083-6.251L441.75 271.082c8.34-8.341 8.34-21.823-.001-30.165z"></path>
        </svg>
      );
    default:
      return null;
  }
}

export default Icon;
