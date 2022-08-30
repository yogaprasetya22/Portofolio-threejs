import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layout/main'
import theme from '../lib/theme'
import '../styles/devicons.css'

function MyApp({ Component, router, pageProps: { session, ...pageProps } }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <SessionProvider session={session} refetchInterval={5 * 60}>
            <Component {...pageProps} key={router.route} />
          </SessionProvider>
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
