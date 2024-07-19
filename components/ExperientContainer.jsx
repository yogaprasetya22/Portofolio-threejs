import {
  Box,
  useColorModeValue,
  Stack,
  Text,
  Flex,
  Icon,
  Heading,
  Link,
  Img,
  Skeleton
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import i18n from 'i18next'

const ExperientContainer = ({ children, h, src, title, tahun, id }) => {
  return (
    <Box p={{ base: '0', md: '17px' }} pt={{ base: '10px' }}>
      <Flex pl={{ base: '10px', md: '17px' }}>
        <Box flex="1" py={4} mt={-3}>
          <Flex
            direction={'column'}
            justifyContent="center"
            alignItems={'center'}
            gap={1}
            px={{ base: '0', md: '-5rem' }}
            ml={{ base: '0', md: '-5rem' }}
            position={'relative'}
          >
            <Icon
              viewBox="0 0 222.334 222.334"
              color={useColorModeValue('#4dccd9', '#ff63c398')}
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
          </Flex>
          <Flex
            direction={'column'}
            justifyContent="center"
            alignItems={'center'}
            gap={1}
            height={'100%'}
            px={{ base: '0', md: '-5rem' }}
            ml={{ base: '0', md: '-5rem' }}
            position={'relative'}
          >
            <Box
              _before={{
                content: '""',
                display: 'flex',
                justifyContent: 'center',
                position: 'absolute',
                top: '0',
                // left: '0',
                width: '1px',
                ml: '-.4px',
                rounded: 'lg',
                height: '100%',
                bg: useColorModeValue('#2bebffa1', '#ed1a9c8c')
              }}
            ></Box>
          </Flex>
        </Box>
        <Box flex="10">
          <Stack spacing={4} ml={{ base: '0', md: '-3rem' }}>
            <Box w="full">
              <Heading as="h6" fontSize="lg" fontFamily={'monospace'}>
                <Text
                  color={useColorModeValue('gray.700', 'gray.200')}
                  _hover={{ color: 'cyan.400', textUnderlineOffset: 1 }}
                  pt={2}
                  mb={-2}
                >
                  {title}
                </Text>
              </Heading>
              <Flex
                fontFamily={'monospace'}
                fontSize="sm"
                fontWeight={'bold'}
                mb={2}
                mt={7}
                color={useColorModeValue('gray.600', 'gray.500')}
              >
                {tahun} -
                <Text pl={1} color={useColorModeValue('#ff63c398', '#4dccd9')}>
                  {i18n.language === 'id' ? 'Sekarang' : 'Now'}
                </Text>
              </Flex>
              <Box w={'full'}>
                <Paraf color={useColorModeValue('#595b5e', '#a0aec0')}>
                  {children}
                </Paraf>
              </Box>
              <Flex>
                <Img
                  bg="teal.400"
                  src={src}
                  alt={title}
                  // maxW="20.5rem"
                  minH={'13rem'}
                  maxH={'13.7rem'}
                  rounded={'md'}
                  cursor="pointer"
                  objectFit={'contain'}
                  shadow={'lg'}
                  dropShadow={'lg'}
                  mt={3}
                  userSelect="none"
                />
              </Flex>
            </Box>
            <Box display={'flex'} gap="3">
              <Flex
                gap="2"
                fontFamily={'monospace'}
                fontWeight="semibold"
                fontSize={'sm'}
                alignItems="center"
                color={useColorModeValue('gray.600', 'gray.500')}
                style={{ userSelect: 'none' }}
              ></Flex>
              {/* <CommentModel src={src} title={title} des={children} /> */}
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
const LikePar = styled.p`
  padding-left: 4px;
  display: inline-flex;
`
