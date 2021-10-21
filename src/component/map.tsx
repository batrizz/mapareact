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
}

function LocationMarker({ markers, setMarkers }: Props) {
  useMapEvents({
    click(e) {
      setMarkers([
        ...markers,
        {
          id: markers.length + 1,
          lat: e.latlng.lat.toFixed(4),
          lng: e.latlng.lng.toFixed(4),
          radius: 1000
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

const Map = ({ markers, setMarkers }: Props) => {
  return (
    <MapContainer
      center={[-23.5612, -46.6305]}
      zoom={12}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker markers={markers} setMarkers={setMarkers} />
    </MapContainer>
  )
}

export default Map
