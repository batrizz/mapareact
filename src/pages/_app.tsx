import Head from 'next/head'
import  List  from '../component/list'
import '../styles/styles.scss'

type Props = {
  markers: any[]
  setMarkers: React.Dispatch<React.SetStateAction<any[]>>
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Interactive Maps</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
export default MyApp
