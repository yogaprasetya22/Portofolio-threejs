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
import { useState } from 'react'
import { CloseIcon } from '@chakra-ui/icons'

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

const Popup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding-top: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const Blur = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #dbc0c091;
  filter: blur(5px);
`

export const ImageProject = ({ src, alt }) => {
  const [pop, setPop] = useState(false)
  const [data, setData] = useState({})
  const Val = (data, des) => {
    setPop(true)
    setData({ data: data, des: des })
  }
  return (
    <>
      <Flex pt={8}>
        <Image
          w="full"
          src={src}
          alt={alt}
          mb={4}
          onClick={() => Val(src, alt)}
          cursor="pointer"
        />
      </Flex>
      {pop ? (
        <>
          <Blur />
          <Popup>
            <Box>
              <CloseIcon onClick={() => setPop(false)} cursor="pointer" />
              <Flex maxW={'60vh'} alignItems="center" justifyContent={'center'}>
                <Image
                  maxW="45rem"
                  src={data.data}
                  alt={data.des}
                  rounded={5}
                  objectFit="cover"
                />
              </Flex>
            </Box>
          </Popup>
        </>
      ) : (
        <></>
      )}
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

{
  // const { isOpen, onOpen, onClose } = useDisclosure()
  /* <Modal size={'10vh'} onClose={onClose} isOpen={isOpen} isCentered>
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
            <Image minW="sm" src={src} alt={alt} mb={4} />
          </ModalBody>
        </ModalContent>
      </Modal> */
}
