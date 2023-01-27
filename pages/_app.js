import {useRouter} from 'next/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DashboardLayout from '../components/dashboardLayout'
import '../styles/globals.css'

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
