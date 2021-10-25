import {
    Marker,
    Popup,
    useMapEvents,
    Circle
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { memo } from 'react'

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
                    id: e.target._containerId,
                    lat: e.latlng.lat.toFixed(4),
                    lng: e.latlng.lng.toFixed(4),
                    radius: 1000
                }
            ]), console.log(e);

        }
    })
    return (
        <>
            {markers.map((marker) => (
                <div key={`${marker.lat},${marker.lng}`}>
                    <Marker
                        position={[marker.lat, marker.lng]}
                        draggable={true}
                        eventHandlers={{
                            dragend: e => {
                                const newMarker = markers.filter(item => item.id !== marker.id)
                                newMarker.push({
                                    id: marker.id,
                                    lat: e.target._latlng.lat.toFixed(4),
                                    lng: e.target._latlng.lng.toFixed(4),
                                    radius: marker.radius
                                })
                                setMarkers(newMarker)
                            }
                        }}
                    >
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

export default memo(LocationMarker)