import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import i18n from 'i18next'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">
        {i18n.language === 'id' ? 'Halaman tidak ditemukan' : 'Page not found'}
      </Heading>
      <Text>
        {i18n.language === 'id'
          ? 'Halaman yang anda cari tidak ditemukan'
          : 'The page you are looking for was not found'}
      </Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">
            {i18n.language === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
