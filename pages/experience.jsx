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
  const [posts, setPosts] = useState([])
  const { data: session } = useSession()
  useEffect(() => {
    onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      snapshot => {
        setPosts(snapshot.docs)
      }
    )
  }, [db])
  console.log(posts)
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
        {posts.map(data => (
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
        ))}
        {/* {posts?.map((data, i) => (
          <Box key={i}>{console.log(data.data())}</Box>
        ))} */}
      </>
    </Layout>
  )
}

export default about
