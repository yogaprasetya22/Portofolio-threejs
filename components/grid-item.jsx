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
      shadow={'xl'}
      dropShadow={'xl'}
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
          >
            <Image
              layout="fill"
              src={thumbnail}
              alt={title}
              className="grid-item-thumbnail"
              priority
            />
          </Box>
          <Box
            zIndex={3}
            position="absolute"
            marginTop={{ base: '-82px', md: '-90px' }}
            background={color}
            width={'100%'}
            height={{ base: '37.6%', md: '34.5%' }}
            borderBottomRadius={'12px'}
          >
            <Box
              fontSize={{ base: 15, md: 18 }}
              fontWeight="bold"
              style={{ userSelect: 'none' }}
            >
              <Flex
                bg={useColorModeValue('#4dccd971', '#ff63c371')}
                alignItems="center"
                justifyContent={'center'}
                w={'full'}
                gap="3px"
                fontSize={{ base: 15, md: 18 }}
              >
                {title}
                <Badge>{relese}</Badge>
              </Flex>
            </Box>
            <Flex
              height={{ base: '5rem', md: '3rem' }}
              alignItems="center"
              justifyContent={'center'}
              padding={2}
            >
              <Text fontSize={{ base: 11.5, md: 14 }} fontWeight="medium">
                {children}
              </Text>
            </Flex>
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
    `}
  />
)
