import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../Footer'
import ThreeLoader from '../threejs-loader'

const Kantor = dynamic(() => import('../threejs'), {
  ssr: false,
  loading: () => <ThreeLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jagres homepage" />
        <title>Jagres - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW={'container.md'} pt={14}>
        <Kantor />

        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Main
