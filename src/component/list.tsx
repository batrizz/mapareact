import { marker } from 'leaflet'
import styles from '../styles/list.module.scss'

type Marker = {
  id: number
  lat: number
  lng: number
  radius: number
}
type Props = {
  markers: Marker[]
  setMarkers: React.Dispatch<React.SetStateAction<any[]>>
}
export function List({ markers, setMarkers }: Props) {
  function removeList() {
    setMarkers([])
  }
  return (
    <form className={styles.list}>
      <div className={styles.info}>
        <p>Latitude</p>
        <p>Longitude</p>
        <p className={styles.raio}>Raio</p>
      </div>
      <ul>
        {markers?.map(e => {
          function deletarCoordenada() {
            setMarkers(markers.filter(item => item.id !== e.id))
          }
          return (
            <div key={`${e.id}`}>
              <li className={styles.lat}>{e.lat}</li>
              <li className={styles.lng}>{e.lng}</li>
              <li>
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  value={e.radius}
                  onChange={event => {
                    const newMarkers = markers.map(marker => {
                      if (marker.id == e.id) {
                        return {
                          ...marker,
                          radius: Number(event.target.value)
                        }
                      }
                      return marker
                    })
                    setMarkers(newMarkers)
                  }}
                />
                <output>{(e.radius / 1000).toFixed(0)} Km</output>
              </li>
              <img
                className={styles.trash}
                src="/trash.svg"
                alt="Deletar"
                onClick={() => deletarCoordenada()}
              />
            </div>
          )
        })}
      </ul>
      {/* <button
        type="button"
        className={styles.removeList}
        onClick={() => removeList()}
      >
        Apagar tudo
      </button> */}
    </form>
  )
}
