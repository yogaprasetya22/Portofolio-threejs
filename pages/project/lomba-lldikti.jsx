import { Container, Link, Stack, Flex, Box, Badge, Center } from '@chakra-ui/react'
import React from 'react'
import Layout from '../../components/layout/artickel'
import Markdown from '../../components/layout/markdown'
import {
  BadgeUi,
  ImageProject,
  Mark,
  Paragraf,
  Title
} from '../../components/layout/project'
import { Auth, Chat } from '../../components/markdown/Whatsapp'
import { Bottom } from '../../components/BottomView'

const Lldikti = () => {
  return (
    <Layout title={'LLDIKTI-4'}>
      <Box p={{ base: '10px', md: '35px' }}>
        <Title>LLDIKTI-4</Title>
        <br />
        <Center>
          <Paragraf>
            Selamat datang di portfolio{' '}
            <Mark>
              <Mark> Instagram Clone</Mark>
            </Mark>{' '}
            dengan
            <Mark> Next.js </Mark> <BadgeUi>21 Aug 2022</BadgeUi>
          </Paragraf>
        </Center>
        <Paragraf>
          Saya bangga mempersembahkan karya saya, yaitu sebuah aplikasi
          <Mark> Instagram Clone</Mark> yang dibangun menggunakan{' '}
          <Mark> Next.js</Mark>. Dalam proyek ini, saya menjelajahi potensi{' '}
          <Mark> Next.js </Mark> untuk menciptakan pengalaman yang sama dengan
          Instagram.
        </Paragraf>
        <Bottom
          link={'http://lldikti-4-yoga.herokuapp.com/'}
          github={'https://github.com/yogaprasetya22/lLLDIKTI_4'}
        />
      </Box>
    </Layout>
  )
}

export default Lldikti
