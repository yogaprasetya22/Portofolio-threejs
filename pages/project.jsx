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
import cewe from '../public/img/cwe.png'
import { ProjextGridItem } from '../components/grid-item'
import Section from '../components/section'
import whatsappClone from '../public/img/whatsapp-clone/whatsapp-clone.png'
import instagramClone from '../public/img/instagram-clone/thumbnile.png'

const DataViewProject = [
  {
    id: '1',
    relese: 2022,
    thumbnail: whatsappClone,
    title: 'Whatsapp-clone',
    des: `Whatsapp clone yang dibuat menggunakan Next.js, firebase untuk authentication, penyimpanan data`
  },
  {
    id: '2',
    relese: 2022,
    thumbnail: cewe,
    title: 'lldikti-4',
    des: 'Music recommendation app for iOS'
  },

  {
    id: '3',
    relese: 2022,
    thumbnail: instagramClone,
    title: 'Instagram-clone',
    des: 'Instagram clone yang dibuat menggunakan Next.js, firebase untuk authentication, penyimpanan data'
  },
  {
    id: '4',
    relese: 2022,
    thumbnail: cewe,
    title: 'lldikti-4',
    des: 'Music recommendation app for iOS'
  }
]

const project = () => {
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
            <ViewAndCode />
          </Flex>
        </Flex>
      </Box>
    </Layout>
  )
}

export default project

const ViewAndCode = () => {
  return (
    <>
      {DataViewProject.map(e => (
        <Section delay={0.3} key={e.id}>
          <ProjextGridItem
            id={e.title}
            title={e.title}
            thumbnail={e?.thumbnail}
            relese={e?.relese}
            color={useColorModeValue('#bdd1ff9c', '#2e3436b3')}
          >
            {e.des}
          </ProjextGridItem>
        </Section>
      ))}
    </>
  )
}
