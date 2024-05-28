import React, { useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";

function MapLeaflet() {
  const defaultPostion: number[] = [51.505, -0.09];

  const [position, setPosition] = useState<L.LatLng | null>(null);
  // hookForm={register("name")}

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
      },
    });

    return position === null ? null : <Marker position={position}></Marker>;
  };

  return (
    <div className="w-full h-96 ">
      <input  type="text"  />
      <MapContainer
        center={defaultPostion}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker  />
      </MapContainer>
    </div>
  );
}

export default MapLeaflet;
