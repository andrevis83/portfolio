import '../styles/globals.scss'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter onExitComplete={ () => window.scrollTo(0, 0) }>
          <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
