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

const about = () => {
  const posts = [
    {
      caption: 'Himpunan Akademik',
      image: '/img/experience/himpunan.png',
      tahun: 'Juli 2022 - Juli 2023',
      deskripsi:
        'Aktif sebagai anggota Divisi Akademik dalam Himpunan Mahasiswa, bertanggung jawab dalam mengorganisir dan menyelenggarakan kegiatan akademik.'
    },
    {
      caption: 'Magang di ICT Universitas Pembangunan Jaya',
      image: '/img/instagram-clone/thumbnile.png',
      tahun: 'Januari 2023 - Mei 2023',
      deskripsi:
        'Magang sebagai Web Developer, dengan fokus pada pengembangan aplikasi web di universitas pembangunan jaya.'
    }
  ]

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
