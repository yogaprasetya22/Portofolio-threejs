import Layout from '../components/layout/artickel'
import {
  Container,
  Box,
  useColorModeValue,
  Flex,
  Divider,
  Stack,
  Text
} from '@chakra-ui/react'
import { ProjextGridItem } from '../components/grid-item'
import Section from '../components/section'
import { useTranslation } from 'react-i18next'

const project = () => {
  const { t, i18n, ready } = useTranslation('global')

  if (!ready) return 'loading translations...'

  const data = t('project', { returnObjects: true })
  // console.log(data.body.personal)

  return (
    <Layout title={'Project'}>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
          display="flex"
          alignItems="center"
          justifyContent="center"
          shadow={'md'}
          dropShadow={'md'}
        >
          <Stack isInline spacing={1} textAlign={'center'} fontWeight="bold">
            <Text fontSize={'15px'}>My Project</Text>
          </Stack>
        </Box>
      </Container>
      <Divider />
      <br />
      <Box p={{ base: '10px', md: '35px' }}>
        <Flex justifyContent={'space-around'} alignItems="center">
          <Flex
            minW={{ base: '21rem', md: '48rem' }}
            flexWrap={'wrap'}
            justifyContent="space-around"
          >
            <Box alignItems="center" justifyContent="start" w={'full'}>
              <Stack isInline spacing={1} textAlign={'center'} fontWeight="">
                <Text
                  fontSize={'18px'}
                  mb={6}
                  p={3}
                  borderRadius="lg"
                  dropShadow={'md'}
                  fontWeight={'extrabold'}
                >
                  {data.title[0].name}
                </Text>
              </Stack>
            </Box>
            <Flex
              minW={{ base: '21rem', md: '48rem' }}
              flexWrap={'wrap'}
              justifyContent="space-around"
            >
              <ViewAndCodePrivate data={data?.body?.personal} />
            </Flex>
            <Divider pt={'2rem'} mb="2rem" />
            <Box alignItems="center" justifyContent="start" w={'full'}>
              <Stack isInline spacing={1} textAlign={'center'} fontWeight="">
                <Text
                  fontSize={'18px'}
                  mb={6}
                  p={3}
                  borderRadius="lg"
                  dropShadow={'md'}
                  fontWeight={'extrabold'}
                >
                  {data.title[1].name}
                </Text>
              </Stack>
            </Box>
            <Flex
              minW={{ base: '21rem', md: '48rem' }}
              flexWrap={'wrap'}
              justifyContent="space-around"
            >
              <ViewAndCodePublic data={data?.body?.propesional} />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  )
}

export default project

const ViewAndCodePrivate = ({ data }) => {
  return (
    <>
      {data.map((e, i) => (
        <Section delay={0.3} key={i}>
          <ProjextGridItem
            id={e.title}
            title={e.title}
            thumbnail={e?.thumbnail}
            relese={e?.relese}
            link={`project/personal/${e?.slug}`}
            color={useColorModeValue('#eaeaead4', '#2e3436b3')}
          >
            {e.deskripsi}
          </ProjextGridItem>
        </Section>
      ))}
    </>
  )
}

const ViewAndCodePublic = ({ data }) => {
  return (
    <>
      {data.map((e, i) => (
        <Section delay={0.3} key={i}>
          <ProjextGridItem
            id={e.title}
            title={e.title}
            thumbnail={e?.thumbnail}
            relese={e?.relese}
            link={`project/propesional/${e?.slug}`}
            color={useColorModeValue('#eaeaead4', '#2e3436b3')}
          >
            {e.deskripsi}
          </ProjextGridItem>
        </Section>
      ))}
    </>
  )
}
