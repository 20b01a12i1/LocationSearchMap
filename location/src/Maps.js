import React, { useEffect } from 'react';
import {MapContainer,Marker,Popup,TileLayer,useMap} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import Leaf from 'leaflet';

const icon = Leaf.icon({
  iconUrl:"./placeholder.png",
  iconSize:[38,38]
});
const position = [51.505, -0.09];

function ResetCenter(props){
  const {select} = props;
  const map = useMap();
  useEffect(()=>{
    if(select){
      map.setView(
        Leaf.latLng(select?.lat,select?.lon),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  },[select]);

  return null;
}

const Maps = (props) => {
  const {select} = props;
  const locationselection = [select?.lat,select?.lon]
    return (
        <MapContainer center={position}
        zoom={8}
        style={{ width: "100%", height:"100%" }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=uIqtbvVWooJiuV8DK033"
    />
    {select && (
        <Marker position={locationselection} icon={icon}>
          <Popup>
           {position}
          </Popup>
        </Marker>
      )}
      <ResetCenter select={select} />
    </MapContainer>
    );
};

export default Maps;

