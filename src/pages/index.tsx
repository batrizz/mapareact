import React from 'react'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { List } from '../component/list'

export default function Home() {
  const [markers, setMarkers] = useState([])
  const MapWithNoSSR = dynamic(() => import('../component/map'), {
    ssr: false
  })

  return (
    <main>
      <div id="map">
        <MapWithNoSSR markers={markers} setMarkers={setMarkers} />
      </div>
      <List markers={markers} setMarkers={setMarkers} />
    </main>
  )
}
