import {GoogleMap,  InfoWindow,  Marker, useLoadScript} from "@react-google-maps/api";
import { useState } from "react";
import "../css/map.css";

export default function SimpleMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDJoy4d7vBAEi1iVnZVqxz877BF9p50pV0",
  });
  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();
  const markers = [
    { address: "Address1", lat: 53.349805, lng: -6.26031, additionalInfo: "The Spire"},
    { address: "Address2", lat: 53.3438, lng: -6.2546, additionalInfo: "The Spire"},
    { address: "TUDublin", lat: 53.3550, lng:  -6.28, additionalInfo: "The Spire" },
  ];

  const onMapLoad = (map) => {
    setMapRef(map);
    const bounds = new window.google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  const handleMarkerClick = (id, lat, lng, address, Info) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, address, Info });
    setIsOpen(true);
  };

  return (
    <div>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          onLoad={onMapLoad}
          onClick={() => setIsOpen(false)}
        >
          {markers.map(({ address, lat, lng, additionalInfo }, ind) => (
            <Marker
              key={ind}
              position={{ lat, lng }}
              onClick={() => {
                handleMarkerClick(ind, lat, lng, address, additionalInfo);
              }}
            >
              {isOpen && infoWindowData?.id === ind && (
               <InfoWindow
               onCloseClick={() => {
                 setIsOpen(false);
               }}
             >
               <div>
                 <h3>{infoWindowData.address}</h3>
                 <p>{additionalInfo}</p>
               </div>
             </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      )}
    </div>
  );
};
