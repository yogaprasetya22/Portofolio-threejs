import Layout from '../components/layout/artickel'
import {
  Box,
  useColorModeValue,
  Stack,
  Text,
  Flex,
  Icon,
  Heading,
  Link
} from '@chakra-ui/react'
import { ImageExperience, Title } from '../components/layout/project'
import styled from '@emotion/styled'

const ExperientContainer = ({ children, h, src, title, date }) => {
  return (
    <Box p={{ base: '10px', md: '35px' }}>
      <Flex>
        <Box flex="1">
          <Stack spacing={4}>
            <Flex
              direction={'column'}
              justifyContent="center"
              alignItems={'center'}
              gap={1}
              px="-5rem"
              ml="-5rem"
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
          <Stack spacing={4} ml="-3rem">
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
                  color={'white'}
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
                color={useColorModeValue('gray.400', 'gray.600')}
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
              <ImageExperience src={src} alt={title} />
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Box>
  )
}

export default ExperientContainer

const Paraf = styled.p`
  width: 40rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${props => props.color};
`
