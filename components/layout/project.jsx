import {
  Heading,
  Box,
  Image,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useColorModeValue
} from '@chakra-ui/react'
import styled from '@emotion/styled'

export const Title = ({ children }) => (
  <Box>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
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
  return (
    <>
      <Flex pt={8}>
        <Image
          w="full"
          src={src}
          alt={alt}
          mb={4}
          onClick={onOpen}
          cursor="pointer"
        />
      </Flex>
      <Modal size={'xl'} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay
          bg={useColorModeValue('#9f9f9f2b', '#29293c59')}
          backdropFilter="auto"
          backdropInvert="15%"
          backdropBlur="2px"
        />
        <ModalContent>
          <ModalHeader>{alt}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image minW="full" src={src} alt={alt} mb={4} />
          </ModalBody>
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
  <Box display={{ md: 'flex' }}>
    <Para>{children}</Para>
  </Box>
)
