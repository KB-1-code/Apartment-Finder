import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Map.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";


delete L.Icon.Default.prototype._getIconUrl;


L.Icon.Default.mergeOptions({

  iconRetinaUrl: markerIcon2x,

  iconUrl: markerIcon,

  shadowUrl: markerShadow,

});


function Map() {


  const position = [-1.286389, 36.817223];


  return (

    <div className="map-page">


      <h1 className="map-title">
        Apartment Location Map
      </h1>



      <p className="map-description">
        Explore the globe view to find apartment locations.
      </p>



      <MapContainer

        center={position}

        zoom={3}

        scrollWheelZoom={true}

        className="leaflet-map"

      >


        <TileLayer

          attribution="Tiles © Esri"

          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"

        />



        <Marker position={position}>

          <Popup>

            Apartment Finder

            <br />

            Nairobi Location

          </Popup>

        </Marker>



      </MapContainer>


    </div>

  );

}


export default Map;