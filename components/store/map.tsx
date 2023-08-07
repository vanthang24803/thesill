import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useMediaQuery } from "react-responsive";

interface MapProps {
  longitude: number;
  latitude: number;
}

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  console.log("isTabletOrMobile:", isTabletOrMobile);
  console.log("isMobile:", isMobile);

  let mapHeight = 800;
  if (isTabletOrMobile) {
    mapHeight = 550;
  }
  if (isMobile) {
    mapHeight = 500;
  }

  return (
    <ReactMapGL
      mapLib={import("mapbox-gl")}
      mapboxAccessToken="pk.eyJ1IjoibWF5bmd1eWVuMjQiLCJhIjoiY2xoNXcyYnB6MDA1NTNncXFnNXgxdTdsbyJ9.M6VAhpbrSaGNSgK87CM2rg"
      initialViewState={{
        longitude: longitude,
        latitude: latitude,
        zoom: 16,
      }}
      style={{ width: "100%", height: mapHeight }}
      mapStyle="mapbox://styles/maynguyen24/clky07h6o006601qsh9abaxrt"
    >
      <Marker longitude={longitude} latitude={latitude}>
        <div>🌿</div>
      </Marker>
      <style>
        {`
          .mapboxgl-ctrl-attrib-inner a:last-of-type {
            display: none;
          }
        `}
      </style>
    </ReactMapGL>
  );
};

export default Map;
