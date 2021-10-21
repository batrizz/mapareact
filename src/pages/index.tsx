import React from 'react'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { List } from '../component/list'

export default function Home() {
  const [markers, setMarkers] = useState([])
  const [radius, setRadius] = useState(0)
  const MapWithNoSSR = dynamic(() => import('../component/map'), {
    ssr: false
  })

  return (
    <main>
      <div id="map">
        <MapWithNoSSR
          markers={markers}
          setMarkers={setMarkers}
          radius={radius}
        />
      </div>
      <List
        markers={markers}
        radius={radius}
        setMarkers={setMarkers}
        setRadius={setRadius}
      />
    </main>
  )
}
