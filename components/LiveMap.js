import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

function LiveMap({ searchLocations }) {
  //
  const coordinates = searchLocations?.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }));
  const centerCoordinate = getCenter(coordinates);

  const [hoverLocation, setHoverLocation] = useState({
    long: 0,
    lat: 0,
    title: "",
  });

  const [viewState, setViewState] = useState({
    width: "100%",
    height: "100%",
    longitude: centerCoordinate.longitude,
    latitude: centerCoordinate.latitude,
    zoom: 13,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/thomasalemayehu/cl5i2yfvh008p14rzw8xnekgt"
      mapboxAccessToken={process.env.mapBoxPublicKey}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      {/* Show markers */}
      {searchLocations?.map((item, index) => (
        <div key={index}>
          <Marker longitude={item.long} latitude={item.lat}>
            <p
              onClick={() => setHoverLocation(item)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
              role="icon"
            >
              📌
            </p>
          </Marker>
          {hoverLocation.long === item.long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setHoverLocation({})}
              latitude={item.lat}
              longitude={item.long}
            >
              {hoverLocation.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default LiveMap;
