import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

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

export const ProjextGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/project/${id}`}>
      <LinkBox cursor="pointer">
        <Box borderRadius={20}>
          <Image
            src={thumbnail}
            alt={title}
            placeholder="blur"
            loading="lazy"
            className={'grid-item-thumbnail'}
          />
        </Box>
        <LinkOverlay href={`/project/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
