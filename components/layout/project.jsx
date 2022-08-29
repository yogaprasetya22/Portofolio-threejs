import {
  Heading,
  Box,
  Image,
  Flex,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  Icon,
  Text,
  Button,
  Stack,
  Textarea,
  Link
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const Section = dynamic(() => import('../section'), { ssr: false })

export const Title = ({ children }) => (
  <Box>
    <Heading
      display="inline-block"
      as="h3"
      fontSize={20}
      mb={{ base: 0, md: 3 }}
    >
      {children}
    </Heading>
  </Box>
)

const color = () => {
  const clr = useColorModeValue('#4dccd9', '#ff63c3')
  return clr
}

export const Mark = styled.span`
  color: ${color};
`

const Para = styled.p`
  text-align: justify;
  text-indent: 1em;
`

export const Paragraf = ({ children }) => (
  <Section delay={0.1}>
    <Box display={{ md: 'flex' }}>
      <Para>{children}</Para>
    </Box>
  </Section>
)

export const ImageProject = ({ src, alt }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = useRef(null)
  return (
    <>
      <Flex pt={4} alignItems="center" justifyContent={'center'}>
        <Image
          maxW="full"
          src={src}
          alt={alt}
          mb={4}
          onClick={onOpen}
          cursor="pointer"
        />
      </Flex>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(4px) " />
        <ModalContent
          onClick={onClose}
          bg="none"
          maxW="55rem"
          h={{ base: '90vh', md: 'auto' }}
          overflow="hidden"
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Image src={src} />
        </ModalContent>
      </Modal>
    </>
  )
}

export const CommentModel = ({ src,title,des }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = useRef(null)
  return (
    <>
      <Flex
        gap="1"
        fontFamily={'monospace'}
        fontWeight="semibold"
        fontSize={'sm'}
        alignItems="center"
        color={useColorModeValue('gray.600', 'gray.500')}
        style={{ userSelect: 'none' }}
        onClick={onOpen}
        cursor="pointer"
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
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(4px) " />
        <ModalContent
          onClick={onClose}
          maxW="46rem"
          h={{ base: '90vh', md: 'auto' }}
          overflow="hidden"
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Box w="full">
            <Flex flexDirection={'row'} justifyContent="space-between">
              <Box bg="black" w="full">
                <Image src={src} h="25rem" objectFit={'contain'} />
              </Box>
              <Box
                bg={useColorModeValue('#f9f7f1', '#181825')}
                w="full"
                color={useColorModeValue('#181825', '#f9f7f1')}
                p="10px"
                px="1rem"
              >
                <Heading
                  as="h6"
                  fontSize="lg"
                  fontFamily={'monospace'}
                >
                  <Text
                    href="/project/whatsapp-clone"
                    color={useColorModeValue('gray.700', 'gray.200')}
                  >
                    {title}
                  </Text>
                </Heading>
                <Text fontSize={'sm'}>{des}</Text>
                <Box position={'fixed'}></Box>
              </Box>
            </Flex>
          </Box>
        </ModalContent>
      </Modal>
    </>
  )
}
