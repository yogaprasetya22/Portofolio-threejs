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
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import { useSession } from 'next-auth/react'

const about = () => {
  const { data: session } = useSession()
  // const [posts, setPosts] = useState([])
  const posts = [
    {
      caption: 'www',
      image:
        'https://firebasestorage.googleapis.com/v0/b/portfolio-dd69a.appspot.com/o/posts%2FYgjGm4NTfzReNj0ybguE%2Fimage?alt=media&token=cebe3a60-0c70-4aea-b0b7-44378876c6f4',
      profile:
        'https://lh3.googleusercontent.com/a/AGNmyxbS8l447_XY6jfdoVK06R7OcxH-9xSJU35g8qPsCw=s96-c',
      timestamp: {
        nanoseconds: 421000000,
        seconds: 1679930420
      },
      username: 'MYogaPrasetya'
    },
    {
      caption: 'adad',
      image:
        'https://firebasestorage.googleapis.com/v0/b/portfolio-dd69a.appspot.com/o/posts%2FHoBPy0ZPzUggxyc2tgim%2Fimage?alt=media&token=deee5036-f5b4-43c7-87e0-2aac51f2f7a4',
      profile:
        'https://lh3.googleusercontent.com/a/AGNmyxbS8l447_XY6jfdoVK06R7OcxH-9xSJU35g8qPsCw=s96-c',
      timestamp: {
        nanoseconds: 421000000,
        seconds: 1679930420
      },
      username: 'MYogaPrasetya'
    }
  ]
  // useEffect(() => {
  //   const PostsUser = () => {
  //     try {
  //       onSnapshot(
  //         query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
  //         snapshot => {
  //           // console.log("snapshot : ",snapshot.docs)
  //           setPosts(snapshot?.docs)
  //           snapshot.docs.map(doc => {
  //             console.log('doc map: ', doc.data())
  //           })
  //         }
  //       )
  //     } catch (error) {
  //       console.log('err : ', error)
  //     }
  //   }
  //   PostsUser()
  // }, [db])
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
      {session?.user.uid === '112588840329457790265' && <PostingExperience />}
      <>
        {posts?.map((data, i) => (
          <ExperientContainer
            h="21.4"
            key={i}
            id={i}
            src={data.image}
            title={data.caption}
            date="7 agustus 2022"
          >
            awdasdawd
          </ExperientContainer>
        ))}
        {/* {posts?.map(data => (
          <ExperientContainer
            h="21.4"
            key={data.id}
            id={data.id}
            src={data.data().image}
            title={data.data().title}
            date="7 agustus 2022"
          >
            {data.data().des}
          </ExperientContainer>
        ))} */}
        {/* {posts?.map((data, i) => (
          <Box key={i}>{console.log(data.data())}</Box>
        ))} */}
      </>
    </Layout>
  )
}

export default about
