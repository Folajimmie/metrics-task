import {useRouter} from 'next/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DashboardLayout from '../components/dashboardLayout'
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {router.pathname !== "/" ? (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </QueryClientProvider>
  )
}

export default MyApp
