import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

function LiveMap({ searchLocations }) {
  //
  const coordinates = searchLocations.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }));
  const centerCoordinate = getCenter(coordinates);

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
      {searchLocations.map(({ long, lat }, index) => (
        <div key={index}>
          <Marker longitude={long} latitude={lat}>
            <p className="cursor-pointer text-2xl animate-bounce">📌</p>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
}

export default LiveMap;
