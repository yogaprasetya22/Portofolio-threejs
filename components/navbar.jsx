import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Text,
  Divider
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  ThemeToggleButton,
  ThemeToggleButtonMobile
} from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        borderRadius={6}
        p={2}
        bg={active ? 'gray.50' : undefined}
        color={active ? '#202023' : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#9f9f9f2b', '#29293c59')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={10}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="5xl"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/project" path={path}>
            Project
          </LinkItem>
          <LinkItem href="/experience" path={path}>
            Experience
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="https://github.com/yogaprasetya22?tab=repositories"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            _hover={{ color: useColorModeValue('#aaa', '#a5a5a5') }}
          >
            <IoLogoGithub size={30} />
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                marginRight={{ base: 5, md: 0 }}
              />
              <MenuList
                minWidth={550}
                bg={useColorModeValue('#eaeaeaf2', '#938e8ed6')}
                backdropBlur={10}
              >
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/project" passHref>
                  <MenuItem as={Link}>Project</MenuItem>
                </NextLink>
                <NextLink href="/experience" passHref>
                  <MenuItem as={Link}>Experience</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/yogaprasetya22?tab=repositories"
                >
                  Github
                </MenuItem>
                <Divider border={'2px'} />
                <Box display={'flex'} p={2} gap="1rem" alignItems={'center'}>
                  <Text>Switch Theme :</Text>
                  <ThemeToggleButtonMobile />
                </Box>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
