import Layout from '../components/layout/artickel'
import {
  Container,
  Box,
  useColorModeValue,
  Stack,
  Text,
  Divider,
  Flex,
  Icon,
  Heading,
  Image,
  Link
} from '@chakra-ui/react'
import ExperientContainer from '../components/ExperientContainer'
import { ImageExperience, Title } from '../components/layout/project'
import styled from '@emotion/styled'

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
          <Stack isInline spacing={1} textAlign={'center'} fontWeight="bold">
            <Text fontSize={'15px'}>Exprience</Text>
          </Stack>
        </Box>
      </Container>
      <br />
      <Divider />
      <ExperientContainer h="23" src={'https://i.imgur.com/qXQQQ.png'} title='Experince' date='7 agustus 2022'>
        Bekerja sebagai Frontend Developer di Ordent onsite di Bandung,
        Indonesia. Ini adalah pengalaman kerja pertama saya (Bekerja di tempat
        di Bandung). Saya bekerja sebagai Frontend Developer untuk.
      </ExperientContainer>
      <ExperientContainer h="23" src={'https://i.imgur.com/qXQQQ.png'} title='Experince' date='7 agustus 2022'>
        Bekerja sebagai Frontend Developer di Ordent onsite di Bandung,
        Indonesia. Ini adalah pengalaman kerja pertama saya (Bekerja di tempat
        di Bandung). Saya bekerja sebagai Frontend Developer untuk.
      </ExperientContainer>
    </Layout>
  )
}

export default about


