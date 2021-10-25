import { memo } from 'react'
import circle from 'react-leaflet'

function Circle(marker) {
    return (
        <Circle
        center={[marker.lat, marker.lng]}
        fillColor="red"
        radius={marker.radius}
    />
    )
}

export default memo(Circle)