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
  Divider,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  Portal
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  ThemeToggleButton,
  ThemeToggleButtonMobile,
  TranslateButton,
  TranslateButtonMobile
} from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import {
  ContactIcons,
  LinkedinIcons,
  InstagramIcons,
  EmailIcon,
  ResumeIcon
} from './general/ChakraIcons'
import { useRef } from 'react'

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
    <>
      <Box
        position="fixed"
        bottom={0}
        right={0}
        m={10}
        rounded="lg"
        as="nav"
        zIndex={10}
        bg={useColorModeValue('#9f9f9f2b', '#29293c59')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <InternalStateEx />
      </Box>
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
              href="https://github.com/yogaprasetya22"
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
            <Flex gap={2} justifyContent={'flex-end'}>
              <ThemeToggleButton />
              <TranslateButton />
            </Flex>

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
                  minWidth={400}
                  bg={useColorModeValue('#eaeaeaf2', '#181825f5')}
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
                  <MenuItem as={Link} href="https://github.com/yogaprasetya22">
                    Github
                  </MenuItem>
                  <Divider border={'2px'} />
                  <Box
                    py={3}
                    pr={20}
                    pl={3}
                    display={'flex'}
                    gap="1rem"
                    alignItems={'center'}
                    justifyContent={'space-between'}
                  >
                    <Box display={'flex'} gap="1rem" alignItems={'center'}>
                      <Text>Switch Theme :</Text>
                      <ThemeToggleButtonMobile />
                    </Box>
                    <TranslateButtonMobile />
                  </Box>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Navbar

function InternalStateEx() {
  const initRef = useRef()
  return (
    <Popover
      closeOnBlur={false}
      placement="top-start"
      initialFocusRef={initRef}
      w={'5rem'}
    >
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            <ContactIcons
              width="2.7rem"
              h="2.7rem"
              filter={useColorModeValue('invert(0)', 'invert(100%)')}
            />
          </PopoverTrigger>
          <Portal>
            <PopoverContent w={'10rem'}>
              <PopoverCloseButton /> <PopoverHeader>social media</PopoverHeader>
              <PopoverBody>
                <Stack spacing={1}>
                  <LinkItem
                    href="https://www.linkedin.com/in/m-yoga-prasetya-928877227/"
                    path="/"
                    target="_blank"
                    display="flex"
                    gap={2}
                    fontSize="xs"
                    alignItems="center"
                  >
                    <LinkedinIcons width="1.7rem" h="1.7rem" />
                    linked-in
                  </LinkItem>
                  <LinkItem
                    href="https://www.instagram.com/yogaprasetya22/"
                    path="/"
                    target="_blank"
                    display="flex"
                    gap={2}
                    fontSize="xs"
                    alignItems="center"
                  >
                    <InstagramIcons width="1.7rem" h="1.7rem" />
                    Instagram
                  </LinkItem>
                  <LinkItem
                    href="mailto:mochammad.yogaprasetya@student.upj.ac.id"
                    path="/"
                    target="_blank"
                    display="flex"
                    gap={2}
                    fontSize="xs"
                    alignItems="center"
                  >
                    <EmailIcon width="1.7rem" h="1.7rem" p={0.5} /> Email
                  </LinkItem>
                  <LinkItem
                    href={`https://docs.google.com/gview?url=https://www.myogaprasetya.my.id/img/experience/Mochammad Yoga Prasetya.pdf`}
                    path="/"
                    target="_blank"
                    display="flex"
                    gap={2}
                    fontSize="xs"
                    alignItems="center"
                  >
                    <ResumeIcon
                      width="1.7rem"
                      h="1.7rem"
                      filter={useColorModeValue('invert(0)', 'invert(100%)')}
                    />
                    Resume
                  </LinkItem>
                </Stack>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  )
}
