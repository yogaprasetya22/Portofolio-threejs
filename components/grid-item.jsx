import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Link,
  Stack,
  Flex
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { useState } from 'react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        placeholder="blur"
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

export const ProjextGridItem = ({ children, id, title, thumbnail, color }) => {
  return (
    <Box w="100%" textAlign="center">
      <NextLink href={`/project/${id}`}>
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
              placeholder="blur"
              loading="lazy"
              className="grid-item-thumbnail"
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
            <Text fontSize={18}>{title}</Text>
            <Text fontSize={14}>{children}</Text>
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
