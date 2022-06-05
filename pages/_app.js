import '../styles/globals.css'
import "../styles/home.css"

function MyApp({ Component, pageProps }) {
  return (
    <div className='w-[100vw]'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
