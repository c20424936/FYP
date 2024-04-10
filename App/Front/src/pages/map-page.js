import React, { useState, useEffect } from "react";
import { GoogleMap, InfoWindow, Marker, useLoadScript, DirectionsRenderer } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import axios from "axios";
import "../css/map.css";




export default function SimpleMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDJoy4d7vBAEi1iVnZVqxz877BF9p50pV0",
  });
  const [map, setMap] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();
  const [recycleLocations, setRecycleLocations] = useState([]);
  const [userLocation, setUserLocation] = useState();
  const [selectedCentre, setselectedCentre] = useState(); // State to store the selected market
  const [directions, setDirections] = useState(); // State to store directions
  const [transportMode, setTransportMode] = useState("DRIVING");

  const navigate = useNavigate();

  useEffect(() => {
    getRecycleLocations();
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const getRecycleLocations = async () => {
    try {
      const response = await axios.get("http://localhost:5000/recycle");
      setRecycleLocations(response.data);
    } catch (error) {
      console.error("Error fetching recycle locations:", error);
    }
  };

  const onMapLoad = (map) => {
    setMap(map);
    const bounds = new window.google.maps.LatLngBounds();
    recycleLocations.forEach(({ lat, long }) => bounds.extend({ lat, lng: long }));
    map.fitBounds(bounds);
    map.panTo(userLocation);
  };

  const handleMarkerClick = (id, lat, lng, address, openingHours, closingHours, Type) => {
    map?.panTo({ lat, lng });
    setInfoWindowData({ id, address, openingHours, closingHours, Type });
    setIsOpen(true);
    setselectedCentre({ id, lat, lng });
  };

  const handleDirectionsClick = () => {
    if (userLocation && selectedCentre) {
      calculateDirections();
    }
  };

  const handleTransportModeChange = (mode) => {
    setTransportMode(mode);
  };




  const calculateDirections = () => {
    const directionsServiceInstance = new window.google.maps.DirectionsService();
    const origin = new window.google.maps.LatLng(userLocation.lat, userLocation.lng);
    const destination = new window.google.maps.LatLng(selectedCentre.lat, selectedCentre.lng);

    directionsServiceInstance.route(
      {
        origin: origin,
        destination: destination,
        travelMode: transportMode
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error("Directions request failed due to " + status);
        }
      }
    );
  };

  return (
    <div>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <br />
          <Dropdown>
            <Dropdown.Toggle className='dropdown' id="dropdown-basic">
              Select Transport Mode
              <br />
              Current: {transportMode}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleTransportModeChange("DRIVING")}>Driving</Dropdown.Item>
              <Dropdown.Item onClick={() => handleTransportModeChange("WALKING")}>Walking</Dropdown.Item>
              <Dropdown.Item onClick={() => handleTransportModeChange("TRANSIT")}>Public Transport</Dropdown.Item>
              <Dropdown.Item onClick={() => handleTransportModeChange("BICYCLING")}>Bicycle</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <GoogleMap
            mapContainerClassName="map-container"
            onLoad={onMapLoad}
            onClick={() => setIsOpen(false)}
            zoom={12}
          >
            {userLocation && (
              <Marker
                position={userLocation}
                title="Your Location"
                icon={{
                  url: `http://maps.google.com/mapfiles/ms/icons/blue-dot.png`
                }}
              />
            )}
            {recycleLocations.map(({ _id, Address, lat, long, Opening_hours, Closing_hours, Type }, index) => (
              <Marker
                key={_id}
                position={{ lat, lng: long }}
                onClick={() => {
                  handleMarkerClick(index, lat, long, Address, `${Opening_hours} - ${Closing_hours}`);
                }}

              >
                {isOpen && infoWindowData?.id === index && (
                  <InfoWindow
                    onCloseClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <div className="info-window">
                      <h4>{infoWindowData.address}</h4>
                      <p>{infoWindowData.openingHours}</p>
                      <p>{infoWindowData.closingHours}</p>
                      <Button onClick={handleDirectionsClick}>Get Directions</Button>
                      <p />
                      <Button style={{ margin: "1px" }} onClick={() => navigate(`/info/${_id}`)}> More Info </Button>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            ))}
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
        </>
      )}
    </div>
  );
}