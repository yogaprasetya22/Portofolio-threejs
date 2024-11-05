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
  PythonIcons,
  PHPIcons,
  LaravelIcons,
  MySqlIcons,
  ThreeJsIcons,
  TypeScriptIcons
} from '../general/ChakraIcons'
import { useTranslation } from 'react-i18next'

const Skill = () => {
  const [t, i18n] = useTranslation('global')
  return (
    <>
      <Stack spacing={5} pt={5}>
        <Box>
          <Title>{t('skill.index')}</Title>
          <Text fontSize={'sm'} fontWeight={'semibold'}>
            {t('skill.desc')}
          </Text>
        </Box>
        <Box>
          <Title>Programming Language</Title>
          <Flex gap={2} pt={2} flexWrap={'wrap'}>
            <ContainerSkill url="https://www.python.org/">
              <PythonIcons width="1.7rem" h="1.7rem" />
              Python
            </ContainerSkill>
            <ContainerSkill url="https://www.javascript.com/">
              <JavascriptIcons width="1.7rem" h="1.7rem" />
              JavaScript
            </ContainerSkill>
            <ContainerSkill url="https://www.typescriptlang.org/">
              <TypeScriptIcons width="1.7rem" h="1.7rem" />
              TypeScript
            </ContainerSkill>
            <ContainerSkill url="https://www.w3schools.com/html/">
              <HtmlIcons width="1.7rem" h="1.7rem" />
              HTML5
            </ContainerSkill>
            <ContainerSkill url="https://www.php.net/">
              <PHPIcons
                width="1.7rem"
                h="1.7rem"
                filter={useColorModeValue('invert(0)', 'invert(100%)')}
              />
              PHP
            </ContainerSkill>
          </Flex>
        </Box>
        <Box>
          <Title>Frameworks</Title>
          <Flex gap={2} pt={2}>
            <ContainerSkill url="https://expressjs.com/">
              <ExpressIcons width="1.7rem" h="1.7rem" />
              Express.js
            </ContainerSkill>
            <ContainerSkill url="https://threejs.org/">
              <ThreeJsIcons width="1.7rem" h="1.7rem" />
              Three.js
            </ContainerSkill>
          </Flex>
        </Box>
        <Box>
          <Title>Frameworks (Full Stack)</Title>
          <Flex gap={2} pt={2}>
            <ContainerSkill url="https://nextjs.org/">
              <NextJsIcons
                width="1.7rem"
                h="1.7rem"
                filter={useColorModeValue('invert(0)', 'invert(100%)')}
              />
              Next.js
            </ContainerSkill>
            <ContainerSkill url="https://laravel.com/">
              <LaravelIcons width="1.7rem" h="1.7rem" />
              Laravel
            </ContainerSkill>
            <ContainerSkill url="https://nodejs.org/en/">
              <NodejsIcons width="1.7rem" h="1.7rem" />
              Node.js
            </ContainerSkill>
          </Flex>
        </Box>
        <Box>
          <Title>Javascript UI</Title>
          <Flex gap={2} pt={2}>
            <ContainerSkill url="https://reactjs.org/">
              <ReactIcons width="1.7rem" h="1.7rem" />
              React.js
            </ContainerSkill>
          </Flex>
        </Box>
        <Box>
          <Title>Front-End Frameworks</Title>
          <Flex gap={2} pt={2}>
            <ContainerSkill url="https://tailwindcss.com/">
              <TailwindsIcons width="1.7rem" h="1.7rem" />
              Tailwinds
            </ContainerSkill>
            <ContainerSkill url="https://www.w3schools.com/css/">
              <CSSIcons width="1.7rem" h="1.7rem" />
              CSS
            </ContainerSkill>
          </Flex>
        </Box>
        <Box>
          <Title>Task Processing</Title>
          <Flex gap={2} pt={2}>
            <ContainerSkill url="https://firebase.google.com/">
              <FirebaseIcons width="1.7rem" h="1.7rem" />
              Firebase
            </ContainerSkill>
          </Flex>
        </Box>
        <Box>
          <Title>Database</Title>
          <Flex gap={2} pt={2}>
            <ContainerSkill url="https://www.mongodb.com/">
              <MongodbIcons width="1.7rem" h="1.7rem" />
              MongoDb
            </ContainerSkill>
            <ContainerSkill url="https://www.mysql.com/">
              <MySqlIcons width="1.7rem" h="1.7rem" />
              MySql
            </ContainerSkill>
          </Flex>
        </Box>
      </Stack>
    </>
  )
}

export default Skill

const ContainerSkill = ({ children, url }) => (
  <Link href={url} target="_blank" fontSize={'sm'} fontWeight={'semibold'}>
    <Flex
      textColor={useColorModeValue('#2e3436b3', '#898989')}
      width="auto"
      justifyContent={'start'}
      alignItems="center"
      border={`2px solid ${useColorModeValue('#767b879c', '#2e3436b3')}`}
      p={2}
      gap={2}
      _hover={{
        textColor: useColorModeValue('#000', '#fff'),
        cursor: 'pointer'
      }}
    >
      {children}
    </Flex>
  </Link>
)

const Title = ({ children }) => <Text fontWeight={'bold'}>{children}</Text>
