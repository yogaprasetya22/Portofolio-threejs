import Layout from '../components/layout/artickel'
import {
  Container,
  Box,
  useColorModeValue,
  Stack,
  Text,
  Divider
} from '@chakra-ui/react'
import ExperientContainer from '../components/ExperientContainer'

import { useTranslation } from 'react-i18next'
const about = () => {
  const { t, i18n, ready } = useTranslation('global')

  if (!ready) return 'loading translations...'

  const posts = t('experient', { returnObjects: true })
  return (
    <Layout title="Experience">
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
      <>
        {posts?.map((data, i) => (
          <ExperientContainer
            h="21.4"
            key={i}
            id={i}
            src={data.image}
            title={data.caption}
            tahun={data.tahun}
          >
            {data.deskripsi}
          </ExperientContainer>
        ))}
      </>
    </Layout>
  )
}

export default about
