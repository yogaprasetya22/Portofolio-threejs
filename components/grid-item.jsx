import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Link,
  Stack,
  Flex,
  Badge,
  useColorModeValue
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { useState } from 'react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        // placeholder="blur"
        loading="lazy"
        className="grid-item-thumbnail"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const ProjextGridItem = ({
  children,
  id,
  title,
  thumbnail,
  color,
  relese,
  link
}) => {
  return (
    <Box
      w="100%"
      textAlign="center"
      shadow="md"
      rounded="xl"
      transition={'all 0.2s ease-in-out'}
      mb={{ base: 8, md: 0 }}
      _hover={{
        transform: 'scale(1.02)'
      }}
    >
      <NextLink href={`${link}`}>
        <LinkBox cursor="pointer">
          <Box
            marginBottom={3}
            width={{ base: 315, md: 370 }}
            height={{ base: 205, md: 230 }}
            position={'relative'}
          >
            <Image
              layout="fill"
              src={thumbnail}
              alt={title}
              objectFit="cover"
              className="grid-item-thumbnail"
              priority
            />
            <Box
              zIndex={3}
              position="absolute"
              bottom={0}
              background={color}
              className="backdrop-blur"
              width={'100%'}
              height={{ base: '34.6%', md: '34.5%' }}
              borderBottomRadius={'12px'}
            >
              <Box
                fontSize={{ base: 15, md: 18 }}
                fontWeight="bold"
                style={{ userSelect: 'none' }}
              >
                <Flex
                  // bg={useColorModeValue('#4dccd971', '#ff63c371')}
                  flex={'row'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  w={'full'}
                  gap="3px"
                >
                  <Text fontSize={{ base: 15, md: 18 }}>{title}</Text>
                  <Badge>{relese}</Badge>
                </Flex>
              </Box>
              <Flex
                height={{ base: '5rem', md: '3rem' }}
                alignItems="center"
                justifyContent={'center'}
              >
                <Text fontSize={{ base: 11.5, md: 14 }} fontWeight="medium">
                  {children}
                </Text>
              </Flex>
            </Box>
          </Box>
        </LinkBox>
      </NextLink>
    </Box>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
      .backdrop-blur {
        backdrop-filter: blur(2px);
      }
    `}
  />
)
