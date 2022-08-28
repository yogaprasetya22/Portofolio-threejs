import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'
import React from 'react'

const percobaan = () => {
  return (
    <div>
      <ReturnFocus />
    </div>
  )
}

export default percobaan

function ReturnFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  return (
    <>
      <Button mt={4} onClick={onOpen}>
        Open Modal
      </Button>
      <Box h="full" alignItems={'center'} justifyContent={'center'}>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg={'cyan.900'} onClick={onClose}>
            {/* <ModalHeader></ModalHeader> */}
            {/* <ModalCloseButton /> */}
            {/* <ModalBody> */}
              {/* <Lorem count={2} /> */}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDMndRG8hwzAqYRFbbLrQN7ajMZBZjTWOvRw&usqp=CAU" />
            {/* </ModalBody> */}

            {/* <ModalFooter></ModalFooter> */}
          </ModalContent>
        </Modal>
      </Box>
    </>
  )
}
