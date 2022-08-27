import Layout from '../components/layout/artickel'
import {
  Box,
  useColorModeValue,
  Stack,
  Text,
  Flex,
  Icon,
  Heading,
  Link,
  Img
} from '@chakra-ui/react'
import { ImageExperience, Title } from '../components/layout/project'
import styled from '@emotion/styled'
import { CommentsIcons, HeartsIcons } from './general/ChakraIcons'
import { useState } from 'react'

const ExperientContainer = ({ children, h, src, title, date }) => {
  const [likes, setLikes] = useState(false)
  const handleLike = e => {
    switch (e.detail) {
      case 2: {
        setLikes(true)
      }
    }
  }
  return (
    <Box p={{ base: '10px', md: '17px' }}>
      <Flex>
        <Box flex="1">
          <Stack spacing={4}>
            <Flex
              direction={'column'}
              justifyContent="center"
              alignItems={'center'}
              gap={1}
              px={{ base: '0', md: '-5rem' }}
              ml={{ base: '0', md: '-5rem' }}
              position={'relative'}
              // bg="red"
            >
              <Icon
                viewBox="0 0 222.334 222.334"
                color={useColorModeValue('gray.400', 'gray.600')}
                w={5}
                h={5}
              >
                <path
                  fill="currentColor"
                  d="M24.704 82.346a4.116 4.116 0 00-4.117 4.117v49.581a4.117 4.117 0 108.234 0V86.463a4.117 4.117 0 00-4.117-4.117zM41.173 53.525a4.116 4.116 0 00-4.117 4.117v49.581a4.116 4.116 0 004.117 4.117 4.116 4.116 0 004.117-4.117V57.642a4.116 4.116 0 00-4.117-4.117zM41.173 119.402a4.116 4.116 0 00-4.117 4.117V173.1a4.116 4.116 0 004.117 4.117 4.116 4.116 0 004.117-4.117v-49.581a4.116 4.116 0 00-4.117-4.117zM57.642 37.056a4.116 4.116 0 00-4.117 4.117v49.581a4.116 4.116 0 004.117 4.117 4.116 4.116 0 004.117-4.117V41.173a4.115 4.115 0 00-4.117-4.117zM57.642 102.933a4.116 4.116 0 00-4.117 4.117v78.229a4.116 4.116 0 004.117 4.117 4.116 4.116 0 004.117-4.117V107.05a4.115 4.115 0 00-4.117-4.117zM90.581 119.402a4.116 4.116 0 00-4.117 4.117v78.229a4.116 4.116 0 004.117 4.117 4.116 4.116 0 004.117-4.117v-78.229a4.117 4.117 0 00-4.117-4.117zM107.05 123.519a4.116 4.116 0 00-4.117 4.117v28.821a4.116 4.116 0 004.117 4.117 4.116 4.116 0 004.117-4.117v-28.821a4.116 4.116 0 00-4.117-4.117zM107.05 16.469a4.116 4.116 0 00-4.117 4.117v90.581a4.116 4.116 0 004.117 4.117 4.116 4.116 0 004.117-4.117v-90.58a4.116 4.116 0 00-4.117-4.118zM107.05 168.81a4.116 4.116 0 00-4.117 4.117v28.821a4.116 4.116 0 004.117 4.117 4.116 4.116 0 004.117-4.117v-28.821a4.115 4.115 0 00-4.117-4.117zM74.111 82.346a4.116 4.116 0 00-4.117 4.117v53.525a4.117 4.117 0 108.234 0V86.463a4.115 4.115 0 00-4.117-4.117zM90.581 86.463a4.116 4.116 0 00-4.117 4.117v16.469a4.116 4.116 0 004.117 4.117 4.116 4.116 0 004.117-4.117V90.581a4.117 4.117 0 00-4.117-4.118zM90.581 20.587a4.116 4.116 0 00-4.117 4.117v49.408a4.116 4.116 0 004.117 4.117 4.116 4.116 0 004.117-4.117V24.704a4.116 4.116 0 00-4.117-4.117zM74.111 152.34a4.116 4.116 0 00-4.117 4.117v37.056a4.117 4.117 0 108.234 0v-37.056a4.115 4.115 0 00-4.117-4.117zM74.111 28.821a4.116 4.116 0 00-4.117 4.117v37.056a4.117 4.117 0 108.234 0V32.938a4.115 4.115 0 00-4.117-4.117z"
                ></path>
                <path
                  fill="currentColor"
                  d="M111.167 0C49.87 0 0 49.87 0 111.167s49.87 111.167 111.167 111.167 111.167-49.87 111.167-111.167S172.464 0 111.167 0zm0 214.1c-56.758 0-102.933-46.175-102.933-102.933S54.409 8.235 111.167 8.235 214.1 54.409 214.1 111.167 167.925 214.1 111.167 214.1z"
                ></path>
              </Icon>
              <Box
                _before={{
                  content: '""',
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'absolute',
                  top: '1.8rem',
                  // left: '0',
                  width: '1px',
                  ml: '-.4px',
                  rounded: 'lg',
                  height: `${h}rem`,
                  bg: useColorModeValue('gray.400', 'gray.600')
                }}
              ></Box>
            </Flex>
          </Stack>
        </Box>
        <Box flex="7">
          <Stack spacing={4} ml={{ base: '0', md: '-3rem' }}>
            <Box w="full">
              {' '}
              <Heading
                as="h6"
                fontSize="lg"
                fontFamily={'monospace'}
                position="absolute"
              >
                <Link
                  href="/project/whatsapp-clone"
                  color={useColorModeValue('gray.700', 'gray.200')}
                  _hover={{ color: 'cyan.400', textUnderlineOffset: 1 }}
                >
                  {title}
                </Link>
              </Heading>
              <Flex
                fontFamily={'serif'}
                fontSize="sm"
                fontWeight={'bold'}
                mb={2}
                mt={7}
                color={useColorModeValue('gray.600', 'gray.500')}
              >
                {date} -
                <Text pl={1} color={'cyan.400'}>
                  Sekarang
                </Text>
              </Flex>
              <Box w={'full'}>
                <Paraf color={useColorModeValue('#595b5e', '#a0aec0')}>
                  {children}
                </Paraf>
              </Box>
              {/* <ImageExperience src={src} alt={title} /> */}
              <Img
                style={{ userSelect: 'none' }}
                src={src}
                alt={title}
                maxW="20rem"
                rounded={'md'}
                cursor="pointer"
                mt={3}
                onClick={e => handleLike(e)}
              />
            </Box>
            <Box display={'flex'} gap="3">
              <Flex
                gap="1"
                fontFamily={'monospace'}
                fontWeight="semibold"
                fontSize={'sm'}
                alignItems="center"
                color={useColorModeValue('gray.600', 'gray.500')}
                style={{ userSelect: 'none' }}
              >
                {likes ? (
                  <>
                    <Icon
                      onClick={() => setLikes(!likes)}
                      viewBox="0 0 24 24"
                      color={useColorModeValue('gray.400', 'red')}
                      w={5}
                      h={5}
                    >
                      <path
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      ></path>
                    </Icon>
                  </>
                ) : (
                  <>
                    <Icon
                      onClick={() => setLikes(!likes)}
                      viewBox="0 0 24 24"
                      color={useColorModeValue('gray.400', 'white')}
                      w={5}
                      h={5}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      ></path>
                    </Icon>
                  </>
                )}
                <Text fontSize={'md'}>6</Text> Likes
              </Flex>
              <Flex
                gap="1"
                fontFamily={'monospace'}
                fontWeight="semibold"
                fontSize={'sm'}
                alignItems="center"
                color={useColorModeValue('gray.600', 'gray.500')}
                style={{ userSelect: 'none' }}
              >
                <Icon
                  viewBox="0 0 24 24"
                  color={useColorModeValue('gray.400', 'white')}
                  w={5}
                  h={5}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  ></path>
                </Icon>
                <Text fontSize={'md'}>6</Text> Commments
              </Flex>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Box>
  )
}

export default ExperientContainer

const Paraf = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${props => props.color};
  @media (max-width: 768px) {
    width: 40rem;
  }
  @media (max-width: 968px) {
    width: 30rem;
  }
`
