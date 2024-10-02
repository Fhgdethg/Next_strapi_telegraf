'use client';

import L, {LatLngExpression} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'

import {sendMessageToTelegramBot} from "@/actions/sendMessageToTelegramBot";
import {useState} from "react";

export default function SecondPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const sendMessageToTelegramBotHandler = async (form: FormData) => {
      await sendMessageToTelegramBot(form);

      setName('');
      setEmail('');
  }

  const markerIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

  const position: LatLngExpression | undefined = [50.4501, 30.5234];

  return (
    <div>
      <form action={sendMessageToTelegramBotHandler}>
        <input
          name="name"
               placeholder="Your name"
               type="text"
               value={name}
               onChange={(e) => setName(e.target.value)}
        />
        <input
          name="email"
               placeholder="Your email"
               type="text"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: 500, height: 300, marginTop: 30}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}