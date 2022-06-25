import Layout from '../components/layout/artickel'
import {
  Container,
  Box,
  useColorModeValue,
  Stack,
  Text
} from '@chakra-ui/react'
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
          p={3}
          bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Stack isInline spacing={1} textAlign={'center'}>
            <Text fontSize={'15px'}>Skills</Text>
          </Stack>
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
