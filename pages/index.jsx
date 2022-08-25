import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import Layout from '../components/layout/artickel'
import NextLink from 'next/link'
import { Paragraf } from '../components/layout/project'
import Section from '../components/section'
import dynamic from 'next/dynamic'
import Skill from '../components/skils/Skill'




export default function Home() {
  return (
    <Layout>
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
          <Text fontSize={'15px'}>Portfolio,</Text>
          <Text
            fontSize={'15px'}
            color={useColorModeValue('pink.700', 'cyan.500')}
          >
            M Yoga Prasetya
          </Text>
        </Stack>
      </Box>
      <Box p={{ base: '10px', md: '50px' }} mt={{ base: '0', md: '-2rem' }}>
        <Paragraf>
          Halo, nama saya Mochammad Yoga Prasetya, tapi teman-teman memanggil
          saya Yoga. Saya berasal dari Universitas Pembangunan Jaya dengan prodi
          Sistem Informasi. Saya senang mempelajari sesuatu yang baru dan
          mendapatkan masukan untuk menjadikan diri saya lebih baik dan
          berkembang.
        </Paragraf>
        <br />
        <Paragraf>
          Saya tinggal di Pamulang, Tangerang Selatan. Sekarang saya
          berkonsentrasi pada pemrograman web yang mana sedang mendalami tentang
          full stack Development yang bersangkut Backend dan Frontend. Website
          ini tidak hanya sebagai sarana pembelajaran tetapi juga sebagai tempat
          untuk membuat memamerkan proyek saya dan sebagai tempat untuk melihat
          sejarah pengalaman saya.{' '}
          <NextLink href="/project">
            <Link>Project</Link>
          </NextLink>
        </Paragraf>
        <br />
        <Section delay={0.1}>
          <Skill />
        </Section>
      </Box>
    </Layout>
  )
}


