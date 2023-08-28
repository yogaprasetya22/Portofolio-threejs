import Layout from '../components/layout/artickel'
import {
  Container,
  Box,
  useColorModeValue,
  Stack,
  Text,
  Divider,
  Button
} from '@chakra-ui/react'
import ExperientContainer from '../components/ExperientContainer'
import { PostingExperience } from '../components/layout/Post'
import { useEffect, useState } from 'react'

const about = () => {
  const posts = [
    {
      caption: 'Himpunan Akademik',
      image: '/img/experience/himpunan.JPG',
      profile:
        'https://lh3.googleusercontent.com/a/AGNmyxbS8l447_XY6jfdoVK06R7OcxH-9xSJU35g8qPsCw=s96-c',
      timestamp: {
        nanoseconds: 421000000,
        seconds: 1679930420
      },
      username: 'MYogaPrasetya',
      tahun: 'Juli 2022 - Juli 2023',
      deskripsi:
        'Aktif sebagai anggota Divisi Akademik dalam Himpunan Mahasiswa, bertanggung jawab dalam mengorganisir dan menyelenggarakan kegiatan akademik.'
    },
    {
      caption: 'Magang di ICT Universitas Pembangunan Jaya',
      image:
        'https://firebasestorage.googleapis.com/v0/b/portfolio-dd69a.appspot.com/o/posts%2FHoBPy0ZPzUggxyc2tgim%2Fimage?alt=media&token=deee5036-f5b4-43c7-87e0-2aac51f2f7a4',
      profile:
        'https://lh3.googleusercontent.com/a/AGNmyxbS8l447_XY6jfdoVK06R7OcxH-9xSJU35g8qPsCw=s96-c',
      timestamp: {
        nanoseconds: 421000000,
        seconds: 1679930420
      },
      username: 'MYogaPrasetya',
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
