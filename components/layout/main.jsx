import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../Footer'
import ThreeLoader from '../threejs-loader'

const Mobil = dynamic(() => import('../threejs'), {
  ssr: false,
  loading: () => <ThreeLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="m-yogaprasetya" />
        <meta name="author" content="m-yogaprasetya" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@m-yogaprasetya" />
        <meta name="twitter:creator" content="@m-yogaprasetya" />
        <meta name="twitter:title" content="m-yogaprasetya" />
        <meta name="twitter:description" content="m-yogaprasetya" />
        <meta property="og:url" content="https://m-yogaprasetya.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="m-yogaprasetya" />
        <meta property="og:description" content="m-yogaprasetya" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="m-yogaprasetya" />
        <meta property="og:locale" content="en_US" />
        <meta property="fb:admins" content="m-yogaprasetya" />
        <meta property="fb:app_id" content="m-yogaprasetya" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="m-yogaprasetya" />
        <meta property="og:description" content="m-yogaprasetya" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="m-yogaprasetya" />
        <meta property="og:locale" content="en_US" />
        <meta property="fb:admins" content="m-yogaprasetya" />
        <meta property="fb:app_id" content="m-yogaprasetya" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="keywords" content="m-yogaprasetya" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="webcrawlers" content="all" />
        <meta name="rating" content="general" />
        <meta name="spiders" content="all" />
        <meta name="audience" content="all" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="subtitle" content="m-yogaprasetya" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-title" content="m-yogaprasetya" />
        <meta name="application-name" content="m-yogaprasetya" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://m-yogaprasetya.vercel.app/" />

        <title>Yoga - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW={'container.md'} pt={14}>
        <Mobil />

        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Main
