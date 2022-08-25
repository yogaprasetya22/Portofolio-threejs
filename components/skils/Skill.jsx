import React from 'react'
import { Box, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import {
  ReactIcons,
  JavascriptIcons,
  NextJsIcons,
  ChakraUiIcons,
  TailwindsIcons,
  JsonWebTokenIcons,
  FirebaseIcons,
  HtmlIcons,
  CSSIcons,
  NodejsIcons,
  ExpressIcons,
  MongodbIcons,
  PythonIcons
} from '../general/ChakraIcons'

const Skill = () => {
  return (
    <>
      <Stack spacing={5} pt={5}>
        <Box>
          <Title>My Skills</Title>
          <Text fontSize={'xs'} fontWeight={'semibold'}>
            Some of the technologies I learned and use
          </Text>
        </Box>
        <Box>
          <Title>Programming Language</Title>
          <Flex gap={2} pt={2}>
            <ContainerSkill>
              <PythonIcons width="1.7rem" h="1.7rem" />
              Python
            </ContainerSkill>
            <ContainerSkill>
              <JavascriptIcons width="1.7rem" h="1.7rem" />
              Javascript
            </ContainerSkill>
            <ContainerSkill>
              <HtmlIcons width="1.7rem" h="1.7rem" />
              HTML5
            </ContainerSkill>
            <ContainerSkill>
              <CSSIcons width="1.7rem" h="1.7rem" />
              CSS
            </ContainerSkill>
          </Flex>
        </Box>
        <Box>
          <Title>Framework</Title>
          <Flex gap={2} pt={2}>
            <ContainerSkill>
              <PythonIcons width="1.7rem" h="1.7rem" />
              Python
            </ContainerSkill>
            <ContainerSkill>
              <JavascriptIcons width="1.7rem" h="1.7rem" />
              Javascript
            </ContainerSkill>
          </Flex>
        </Box>
        <Box>
          <Title>Frameworks (Full Stack)</Title>
          <Flex gap={2} pt={2}>
            <ContainerSkill>
              <ReactIcons width="1.7rem" h="1.7rem" />
              React Js
            </ContainerSkill>
            <ContainerSkill>
              <JavascriptIcons width="1.7rem" h="1.7rem" />
              Javascript
            </ContainerSkill>
          </Flex>
        </Box>
        <Box>
          <Title>Tools</Title>
          <Flex gap={2} pt={2}>
            <ContainerSkill>
              <ReactIcons width="1.7rem" h="1.7rem" />
              React Js
            </ContainerSkill>
            <ContainerSkill>
              <JavascriptIcons width="1.7rem" h="1.7rem" />
              Javascript
            </ContainerSkill>
          </Flex>
        </Box>
      </Stack>
    </>
  )
}

export default Skill

const ContainerSkill = ({ children }) => (
  <Box fontSize={'sm'} fontWeight={'semibold'}>
    <Flex
      width="auto"
      justifyContent={'start'}
      alignItems="center"
      border={`2px solid ${useColorModeValue('#bdd1ff9c', '#2e3436b3')}`}
      p={2}
      gap={2}
    >
      {children}
    </Flex>
  </Box>
)

const Title = ({ children }) => <Text fontWeight={'bold'}>{children}</Text>
