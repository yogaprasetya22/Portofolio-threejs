import Layout from '../components/layout/artickel'
import { Container, Box, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import dynamic from 'next/dynamic'

const Skills = dynamic(() => import('../components/skils/Skils'), {
  ssr: false
})

const about = () => {
  return (
    <Layout title="Skils">
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={1.4}
          textAlign={'center'}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          My Skils
        </Box>
        <Section delay={0.1}>
          <Box className="technologies-container">
            <Skills />
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default about
