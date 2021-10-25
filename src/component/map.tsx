import { MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { memo } from 'react'

import LocationMarker from './LocationMarker'

type Props = {
  markers: any[]
  setMarkers: React.Dispatch<React.SetStateAction<any[]>>
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


export default memo(Map)
