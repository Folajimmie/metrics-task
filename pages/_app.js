import {useRouter} from 'next/router'
import DashboardLayout from '../components/dashboardLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/" ? (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}

export default MyApp
