import {
  Heading,
  Box,
  Image,
  Flex,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useRef } from 'react'
import dynamic from 'next/dynamic'

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
          maxW="52rem"
          h={{ base: 'full', md: 'auto' }}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Image src={src} />
        </ModalContent>
      </Modal>
    </>
  )
}

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
