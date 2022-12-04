import { Container, Link, Stack, Flex, Box, Badge } from '@chakra-ui/react'
import React from 'react'
import Layout from '../../components/layout/artickel'
import Markdown from '../../components/layout/markdown'
import {
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
        <Paragraf>
          Saya membuat aplikasi <Mark>Web Whatsapp Clone</Mark> dengan tujuan
          pembelajaran yang mana nantinya untuk pengalaman saya dalam membuat
          sebuah aplikasi menggunakan teknologi firebase dan juga next.js
        </Paragraf>
        <br />
        <Paragraf>
          Whatsapp clone yang dibuat menggunakan Next.js, firebase untuk
          authentication, penyimpanan data, dibaut pada <Badge>2022</Badge>
        </Paragraf>
        <ImageProject
          src={'/img/whatsapp-clone/whatsapp-clone.png'}
          alt={'Whatsapp Clone'}
        />
        <Paragraf>
          Pada aplikasi yang saya buat adalah sebuah cloningan dari whatsapp web
          versi saya dengan menggunakan next.js sebagai framework dari react.js.
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
          menggunakan alur login firebase SDK, dan penyimpanan data pada chating
          juga menggunakan firestore dari firebase. 
        </Paragraf>
        <Markdown src={Auth} />
        <Paragraf>
          Pada bagian ini dimana agar terhubungnya aplikasi dengan firebase
          menggunakan <Mark> initializeApp()</Mark> dan{' '}
          <Mark>getFirestore()</Mark> sebagai penyimpanan database dan database
          tersebut bersifat noSql atau bisa dibilang berupa<Mark> Json</Mark>,
          kemudian untuk Authenticationya saya mengambil sebuat metode dari
          dokumentasi firebase yaitu <Mark>getAuth()</Mark> dan
          <Mark> new GoogleAuthProvider()</Mark> untuk mendapatkan akses dari
          Auth Provider Google.
        </Paragraf>
        <Markdown src={Chat} />
        <Paragraf>
          Kemudian ini ketika user sudah melakukan login menggunakan google dan
          data-data tersebut akan secara otomatis terinput ke database berupa{' '}
          <Mark>displayName, Email, PhotoUrl, LastSeen</Mark> / kapan terakhir
          user online. dan kemudian data dari user akan disimpan di CurrentUser
          yang nantinya akan di fetching di akun tersebut.
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

