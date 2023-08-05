import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { useMediaQuery } from "react-responsive";

export default function Map() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  console.log("isTabletOrMobile:", isTabletOrMobile);
  console.log("isMobile:", isMobile);

  let mapHeight = 600;
  if (isTabletOrMobile) {
    mapHeight = 450;
  }
  if (isMobile) {
    mapHeight = 400;
  }

  return (
    <ReactMapGL
      mapLib={import("mapbox-gl")}
      mapboxAccessToken="pk.eyJ1IjoibWF5bmd1eWVuMjQiLCJhIjoiY2xoNXcyYnB6MDA1NTNncXFnNXgxdTdsbyJ9.M6VAhpbrSaGNSgK87CM2rg"
      initialViewState={{
        longitude: -73.935242,
        latitude: 40.73061,
        zoom: 8,
      }}
      style={{ width: "100%", height: mapHeight }}
      mapStyle="mapbox://styles/maynguyen24/clky07h6o006601qsh9abaxrt"
    >
      {/* <Marker latitude={40} longitude={-73} >
        <div style={{ color: "red", fontSize: "24px" }}>📍</div>
      </Marker> */}
      <style>
        {`
          .mapboxgl-ctrl-attrib-inner a:last-of-type {
            display: none;
          }
        `}
      </style>
    </ReactMapGL>
  );
}
