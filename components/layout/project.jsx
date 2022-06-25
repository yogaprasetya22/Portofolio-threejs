import { Heading, Box, Image, Flex, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useState } from 'react'



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

const Para = styled.p`
  text-align: justify;
  text-indent: 1em;
`

export const Paragraf = ({ children }) => (
  <Box display={{ md: 'flex' }}>
    <Para>{children}</Para>
  </Box>
)
