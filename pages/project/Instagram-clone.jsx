import { Box } from '@chakra-ui/react'
import React from 'react'
import { Bottom } from '../../components/BottomView'
import Layout from '../../components/layout/artickel'
import Markdown from '../../components/layout/markdown'
import { Mark, Paragraf, Title } from '../../components/layout/project'
import { Atoms } from '../../components/markdown/Instagram'

const InstagramClone = () => {
  return (
    <Layout title="Instagram Clone">
      <Box p={{ base: '10px', md: '35px' }}>
        <Title>Instagram Clone</Title>
        <Paragraf>
          Saya membuat aplikasi <Mark>Web Instagram Clone</Mark> dengan tujuan
        </Paragraf>
        <Markdown src={Atoms} />
        <Bottom
          link={'https://instagram-jagres.vercel.app/'}
          github={'https://github.com/yogaprasetya22/instagram-jagres'}
        />
      </Box>
    </Layout>
  )
}

export default InstagramClone
