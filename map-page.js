import React from "react";
import GoogleMapReact from 'google-map-react';
import "./map.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 53.3498,
      lng: -6.2603
    },
    zoom: 11
  };

  return (
      <div style={{ height: '50vh', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={53.3498}
          lng={-6.2603}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}