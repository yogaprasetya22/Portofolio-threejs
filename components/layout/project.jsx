import { Heading, Box, Image, Flex, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Fragment, useState } from 'react'
// import Section from '../section'
import dynamic from 'next/dynamic'

// import { Dialog, Transition } from '@headlessui/react'

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
  background: #545454b0;
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
          <Popup onClick={() => setPop(false)}>
            <Box>
              <Flex maxW={'60vh'} alignItems="center" justifyContent={'center'}>
                <Image
                  maxW={{
                    base: ['28rem', '35rem', '35rem', '36rem'],
                    md: ['45rem', '50rem']
                  }}
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
export const ImageExperience = ({ src, alt }) => {
  const [pop, setPop] = useState(false)
  const [data, setData] = useState({})
  const Val = (data, des) => {
    setPop(true)
    setData({ data: data, des: des })
  }
  return (
    <>
      <Flex pt={4}>
        <Image
          maxW="20rem"
          rounded={'md'}
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
          <Popup onClick={() => setPop(false)}>
            <Box>
              <Flex maxW={'60vh'} alignItems="center" justifyContent={'center'}>
                <Image
                  maxW={{
                    base: ['28rem', '35rem', '35rem', '36rem'],
                    md: ['45rem', '50rem']
                  }}
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
  <Section delay={0.1}>
    <Box display={{ md: 'flex' }}>
      <Para>{children}</Para>
    </Box>
  </Section>
)

// const TamplateDialog = ({ children, open, setOpen, src }) => (
//   <Transition.Root show={open} as={Fragment}>
//     <Dialog
//       as={'div'}
//       className="fixed z-50 inset-0 overflow-y-auto"
//       onClose={setOpen}
//     >
//       <Box
//         display={{ base: 'flex', sm: 'block' }}
//         alignItems={'end'}
//         justifyContent="center"
//         minH={{ base: '500px', sm: 'full' }}
//         pt={{ base: 4, sm: 0 }}
//         px={{ base: 4, sm: 0 }}
//         pb={20}
//         textAlign="center"
//       >
//         <Transition.Child
//           as={Fragment}
//           enter="transition ease-out duration-150"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="transition ease-in-out duration-150 transform"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <Dialog.Overlay
//             className={
//               'fixed inset-0 bg-gray-700 bg-opacity-50 transition-opacity'
//             }
//           />
//         </Transition.Child>
//         <span
//           className="hidden sm:inline-block sm:align-middle sm:h-screen"
//           aria-hidden="true"
//         >
//           &#8203;
//         </span>
//         <Transition.Child
//           as={Fragment}
//           enter="transition ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="transition ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <Image src="https://i.imgur.com/qXQQQ.png" />
//         </Transition.Child>
//       </Box>
//     </Dialog>
//   </Transition.Root>
// )
