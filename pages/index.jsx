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

export default function Home() {
  const [t, i18n] = useTranslation('global')
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
          <Text fontSize={'15px'}>Portfolio,</Text>
          <Text
            fontSize={'15px'}
            color={useColorModeValue('pink.700', 'cyan.500')}
          >
            M Yoga Prasetya
          </Text>
        </Stack>
      </Box>
      <Stack
        p={{ base: '10px', md: '50px' }}
        mt={{ base: '0', md: '-2rem' }}
        spacing={1}
      >
        <Paragraf>{t('home.body.0.title')}</Paragraf>
        <Paragraf>
          {t('home.body.1.title')}{' '}
          <NextLink href="/project">
            <Link>Project</Link>
          </NextLink>
        </Paragraf>
        <Section delay={0.1}>
          <Skill />
        </Section>
      </Stack>
    </Layout>
  )
}
