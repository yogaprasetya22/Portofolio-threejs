import {
  Container,
  Link,
  Stack,
  Flex,
  Box,
  Badge,
  Center
} from '@chakra-ui/react'
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

const WhatsappClone = () => {
  return (
    <Layout title={'Whatsapp Clone'}>
      <Box p={{ base: '10px', md: '35px' }}>
        <Title>Whatsapp Clone</Title>
        <br />
        <Center>
          <Paragraf>
            Selamat datang di portfolio <Mark> Whatsapp Clone</Mark>
            dengan
            <Mark>
              {' '}
              <Mark> Next.js </Mark>{' '}
            </Mark>
            <BadgeUi>19 Aug 2022</BadgeUi>
          </Paragraf>
        </Center>
        <Paragraf>
          Saya bangga memperlihatkan project kecil, yaitu sebuah aplikasi
          chatting yang serupa dengan <Mark>Whatsapp</Mark>, melalui aplikasi
          clone yang saya buat menggunakan <Mark> Next.js </Mark>! Aplikasi ini
          memperlihatkan fitur-fitur utama seperti pengiriman pesan teks.
          Dibangun dengan menggunakan teknologi <Mark> Next.js </Mark> dan{' '}
          <Mark>Firebase</Mark>. Saya dengan hati-hati mengembangkan aplikasi
          ini dengan fokus pada keamanan dan privasi pengguna.
        </Paragraf>
        <ImageProject
          src={'/img/whatsapp-clone/whatsapp-clone.png'}
          alt={'Whatsapp Clone'}
        />
        <Paragraf>
          Pada aplikasi yang saya buat adalah sebuah cloningan dari whatsapp web
          versi saya dengan menggunakan <Mark> Next.js </Mark> sebagai framework
          dari react.js.
        </Paragraf>
        <ImageProject
          src={'/img/whatsapp-clone/menu_login.png'}
          alt={'Login'}
        />
        <ImageProject
          src={'/img/whatsapp-clone/google_login.png'}
          alt={'Login'}
        />
        <Paragraf>
          dan selanjutnya pada login menggunakan google yang mana saya
          menggunakan alur login <Mark> Firebase </Mark> SDK, dan penyimpanan
          data pada chating juga menggunakan firestore dari{' '}
          <Mark> Firebase </Mark>.
        </Paragraf>
        <Markdown src={Auth} />
        <Paragraf>
          Pada bagian ini dimana agar terhubungnya aplikasi dengan{' '}
          <Mark> Firebase </Mark>
          menggunakan <Mark> initializeApp()</Mark> dan{' '}
          <Mark>getFirestore()</Mark> sebagai penyimpanan database dan database
          tersebut bersifat noSql atau bisa dibilang berupa<Mark> Json</Mark>,
          kemudian untuk Authenticationya saya mengambil sebuat metode dari
          dokumentasi <Mark> Firebase </Mark> yaitu <Mark>getAuth()</Mark> dan
          <Mark> new GoogleAuthProvider()</Mark> untuk mendapatkan akses dari
          Auth Provider Google.
        </Paragraf>
        <Paragraf>
          Kemudian ketika user sudah melakukan login menggunakan google dan
          data-data tersebut akan secara otomatis terinput ke database berupa{' '}
          dan kapan terakhir user online. dan kemudian data dari user akan
          disimpan akun tersebut.
        </Paragraf>
        <Bottom
          link={'https://whatsapp-clone-jagres.vercel.app/'}
          github={'https://github.com/yogaprasetya22/wahtsapp_clone'}
        />
      </Box>
    </Layout>
  )
}

export default WhatsappClone
