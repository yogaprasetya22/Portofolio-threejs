import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">404 Not found</Heading>
      <Text>Tidak ada halaman..</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Kembali ke menu utama</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
