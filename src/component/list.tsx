import styles from '../styles/list.module.scss'

type Marker = {
  id: number
  lat: number
  lng: number
  radius: number
}
type Props = {
  markers: Marker[]
  radius: number
  setRadius: any
  setMarkers: any
}
export function List({ markers, radius, setMarkers }: Props) {
  return (
    <form className={styles.list}>
      <h1>Lista de Coordenadas</h1>
      <ul>
        {markers?.map(e => {
          return (
            <div>
              <li className={styles.lat}>{e.lat}</li>
              <li className={styles.lng}>{e.lng}</li>
              <li>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  value={e.radius}
                  onChange={event => {
                    //setRadius(Number(e.target.value)
                    const newMarkers = markers.map(marker => {
                      if (marker == e) {
                        return {
                          ...marker,
                          radius: Number(event.target.value)
                        }
                      }
                    })
                    setMarkers(newMarkers)
                  }}
                />
                <output>{e.radius}</output>
              </li>
            </div>
          )
        })}
      </ul>
    </form>
  )
}
