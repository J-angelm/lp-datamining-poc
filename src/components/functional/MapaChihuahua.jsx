import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const MapaChihuahua = (props) => {
    const position = [28.6500, -106.0700]; // Coordenadas de Chihuahua
  
    return (
      <div>
        <MapContainer center={position} zoom={12} style={{ height: '55%', width: props.width }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position} />
        </MapContainer>
      </div>
    );
  };
  
  export default MapaChihuahua;
  