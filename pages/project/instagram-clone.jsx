import { Box } from '@chakra-ui/react'
import React from 'react'
import { Bottom } from '../../components/BottomView'
import Layout from '../../components/layout/artickel'
import Markdown from '../../components/layout/markdown'
import { Mark, Paragraf, Title, BadgeUi } from '../../components/layout/project'
import { Atoms } from '../../components/markdown/Instagram'

const InstagramClone = () => {
  return (
    <Layout title="<Mark> Instagram Clone</Mark>">
      <Box p={{ base: '10px', md: '35px' }}>
        <Title>Instagram Clone</Title>
        <Paragraf>
          Selamat datang di portfolio{' '}
          <Mark>
            <Mark> Instagram Clone</Mark>
          </Mark>{' '}
          dengan
          <Mark> Next.js </Mark>! <BadgeUi>21 Aug 2022</BadgeUi>
        </Paragraf>
        <Paragraf>
          Saya bangga mempersembahkan karya saya, yaitu sebuah aplikasi
          <Mark> Instagram Clone</Mark> yang dibangun menggunakan{' '}
          <Mark> Next.js </Mark>. Dalam proyek ini, saya menjelajahi potensi{' '}
          <Mark> Next.js </Mark> untuk menciptakan pengalaman yang sama dengan
          Instagram.
        </Paragraf>
        <Paragraf>
          Aplikasi ini memiliki fungsionalitas yang mungking kurang lengkap,
          memungkinkan pengguna untuk mengunggah foto dan video, dan masih tahap
          pengembangan pada menjelajahi feed, serta berinteraksi dengan
          teman-teman dan pengguna lainnya. Dengan menggunakan teknologi
          <Mark> Next.js </Mark>, aplikasi ini menawarkan kecepatan dan
          responsivitas yang tinggi, sehingga pengguna dapat menikmati
          pengalaman yang mulus.
        </Paragraf>
        <Paragraf>
          Saya juga berkomitmen untuk menjaga keamanan dan privasi pengguna.
          Data yang disimpan di aplikasi ini dienkripsi dan kami melakukan
          langkah-langkah yang ketat untuk melindungi privasi setiap pengguna.
        </Paragraf>
        <Paragraf>
          Dalam membangun{' '}
          <Mark>
            <Mark> Instagram Clone</Mark>
          </Mark>{' '}
          ini, saya belajar banyak tentang pengembangan web dan memperdalam
          pemahaman saya tentang
          <Mark> Next.js </Mark>. dan juga <Mark> Firebase </Mark> Saya bangga
          dengan hasil akhirnya dan berharap dapat berbagi karya ini dengan
          Anda.
        </Paragraf>
        <Paragraf>
          Jelajahi aplikasi ini, nikmati fitur-fitur menarik seperti filter
          foto, stiker, dan interaksi sosial yang mengasyikkan. Jangan ragu
          untuk memberikan masukan atau saran untuk meningkatkan pengalaman
          pengguna.
        </Paragraf>
        <Paragraf>
          Terima kasih telah mengunjungi portfolio <Mark> Instagram Clone</Mark>{' '}
          saya. Saya berharap Anda menikmati menjelajahi karya saya ini dan
          terinspirasi oleh kemampuan <Mark> Next.js </Mark> dalam membangun
          aplikasi web yang keren. Sampai jumpa di proyek berikutnya! 🚀✨
        </Paragraf>
        {/* <Markdown src={Atoms} /> */}
        <Bottom
          link={'https://instagram-jagres.vercel.app/'}
          github={'https://github.com/yogaprasetya22/instagram-jagres'}
        />
      </Box>
    </Layout>
  )
}

export default InstagramClone
