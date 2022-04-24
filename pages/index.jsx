import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import Layout from '../components/layout/artickel'
import NextLink from 'next/link'

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Stack isInline spacing={1} textAlign={'center'}>
            <Text>Hello ,</Text>
            <Text color={useColorModeValue('pink.700', 'cyan.500')}>
              Saya Mochammad Yoga Prasetya!
            </Text>
          </Stack>
        </Box>
        <Box display={{ md: 'flex' }}>
          <Text textAlign={'center'}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus deleniti a repudiandae dicta, laudantium praesentium
            sed illum mollitia, quae quasi explicabo! Esse ea optio architecto
            numquam nemo odit impedit ab!{' '}
            <NextLink href="/project">
              <Link>Project</Link>
            </NextLink>
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}
