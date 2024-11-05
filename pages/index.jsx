import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import Layout from '../components/layout/artickel'
import NextLink from 'next/link'
import { Paragraf } from '../components/layout/project'
import Section from '../components/section'
import Skill from '../components/skils/Skill'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'

export default function Home() {
  const [t, i18n] = useTranslation('global')
  const education = t('education', { returnObjects: true })
  return (
    <Layout>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')}
        display="flex"
        alignItems="center"
        justifyContent="center"
        shadow={'md'}
        dropShadow={'md'}
      >
        <Stack isInline spacing={1} textAlign={'center'} fontWeight="bold">
          <Text fontSize={'15px'}>Hi, </Text>
          <Text fontSize={'15px'}>{t('header.my')}</Text>
          <Text
            fontSize={'15px'}
            color={useColorModeValue('pink.700', 'cyan.500')}
          >
            M Yoga Prasetya
          </Text>
          <Text fontSize={'15px'}>.</Text>
        </Stack>
      </Box>
      <Stack
        p={{ base: '10px', md: '50px' }}
        mt={{ base: '0', md: '-2rem' }}
        spacing={1}
      >
        <Paragraf>{t('home.body.0.title')}</Paragraf>
        <Paragraf>{t('home.body.1.title')}</Paragraf>
        <Paragraf>{t('home.body.2.title')}</Paragraf>
        <Paragraf>{t('home.body.3.title')}</Paragraf>
        <Paragraf>
          {t('home.body.4.title')}{' '}
          <NextLink href="/project">
            <Link>Project</Link>
          </NextLink>
        </Paragraf>
        <Section delay={0.1}>
          <Flex
            justifyContent={'space-around'}
            flexDirection={'column'}
            gap={2}
          >
            {education.map((item, i) => (
              <Box fontSize={'sm'} fontWeight={'semibold'} key={i}>
                <Flex
                  textColor={useColorModeValue('#2e3436b3', '#898989')}
                  width="auto"
                  justifyContent={'start'}
                  alignItems="center"
                  border={`2px solid ${useColorModeValue(
                    '#767b879c',
                    '#2e3436b3'
                  )}`}
                  p={2}
                  gap={2}
                  _hover={{
                    textColor: useColorModeValue('#000', '#fff'),
                    cursor: 'pointer'
                  }}
                >
                  <Image src={item.src} width={35} height={35} />
                  <Flex flexDirection={'column'}>
                    <Text>{item.name}</Text>
                    <Text fontSize={'xs'}>{item.period}</Text>
                  </Flex>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Section>
        <Section delay={0.1}>
          <Skill />
        </Section>
      </Stack>
    </Layout>
  )
}
