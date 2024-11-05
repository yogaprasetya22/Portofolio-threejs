import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layout/main'
import theme from '../lib/theme'
import '../styles/devicons.css'
import { Analytics } from '@vercel/analytics/react'

import global_en from '../lib/translate/en/global.json'
import global_id from '../lib/translate/id/global.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import 'react-photo-view/dist/react-photo-view.css'
import { PhotoProvider } from 'react-photo-view'

i18next.init({
  interpolation: { escapeValue: false },
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      global: global_en
    },
    id: {
      global: global_id
    }
  }
})

export default function MyApp({
  Component,
  router,
  pageProps: { session, ...pageProps }
}) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <PhotoProvider>
          <AnimatePresence exitBeforeEnter initial={true}>
            <I18nextProvider i18n={i18next}>
              <Component {...pageProps} key={router.route} />
              <Analytics />
            </I18nextProvider>
          </AnimatePresence>
        </PhotoProvider>
      </Layout>
    </ChakraProvider>
  )
}
