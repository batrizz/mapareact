import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Circle
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

type Props = {
  markers: any[]
  setMarkers: React.Dispatch<React.SetStateAction<any[]>>
  radius: number
}

function LocationMarker({ markers, setMarkers, radius }: Props) {
  useMapEvents({
    click(e) {
      setMarkers([
        ...markers,
        {
          id: markers.length + 1,
          lat: e.latlng.lat.toFixed(4),
          lng: e.latlng.lng.toFixed(4),
          radius: 10
        }
      ])
    }
  })

  return (
    <>
      {markers.map(marker => (
        <div key={`${marker.lat},${marker.lng}`}>
          <Marker position={[marker.lat, marker.lng]} draggable={true}>
            <Popup position={[marker.lat, marker.lng]}>
              Coordenada: {[marker.lat, ' / ', marker.lng]}
            </Popup>
          </Marker>
          <Circle
            center={[marker.lat, marker.lng]}
            fillColor="red"
            radius={marker.radius}
          />
        </div>
      ))}
    </>
  )
}

const Map = ({ markers, setMarkers, radius }: Props) => {
  return (
    <MapContainer
      center={[40.80166061949343, -74.03180412546854]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      <LocationMarker
        markers={markers}
        setMarkers={setMarkers}
        radius={radius}
      />
    </MapContainer>
  )
}

export default Map
