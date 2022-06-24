import Layout from '../components/layout/artickel'
import {
  Container,
  Box,
  useColorModeValue,
  Flex,
  Divider
} from '@chakra-ui/react'
import cewe from '../public/img/cwe.png'
import { ProjextGridItem } from '../components/grid-item'
import Section from '../components/section'
import whatsappClone from '../public/img/whatsapp-clone/whatsapp-clone.png'

const DataViewProject = [
  {
    id: '1',
    thumbnail: whatsappClone,
    title: 'whatsapp-clone',
    des: 'Whatsapp clone yang dibuat menggunakan Next.js, firebase untuk authentication'
  },
  {
    id: '2',
    thumbnail: cewe,
    title: 'percobaan',
    des: 'Music recommendation app for iOS'
  },
  {
    id: '3',
    thumbnail: cewe,
    title: 'percobaan',
    des: 'A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support'
  }
]

const project = () => {
  return (
    <Layout title={'Project'}>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={1.4}
          textAlign={'center'}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          My Project
        </Box>
      </Container>
      <Divider />
      <br />
      <Section delay={0.4}>
        <Box
          display={'flex'}
          justifyContent={'space-around'}
          alignItems="center"
        >
          <Flex
            minW={{ base: '27rem', md: '48rem' }}
            flexWrap={'wrap'}
            justifyContent="space-around"
          >
            <ViewAndCode />
          </Flex>
        </Box>
      </Section>
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
            color={useColorModeValue('#bdd1ff9c', '#2e3436b3')}
          >
            {e.des}
          </ProjextGridItem>
        </Section>
      ))}
    </>
  )
}
