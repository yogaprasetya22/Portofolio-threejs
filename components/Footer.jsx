import React from 'react'
import {
  Box,
  StackDivider,
  useColorModeValue,
  VStack,
  Text
} from '@chakra-ui/react'

const Footer = () => {
  return (
    <VStack
      divider={
        <StackDivider
          borderColor={useColorModeValue('blackAlpha.700', 'gray.600')}
        />
      }
    >
      <Box fontSize="sm" mt={70}></Box>
      <Text
        align="center"
        opacity={0.4}
        fontSize="sm"
        color={useColorModeValue('blackAlpha.900', 'gray.200')}
      >
        &copy; {new Date().getFullYear()} M Yoga Prasetya. All Rights Reserved.
      </Text>
    </VStack>
  )
}

export default Footer


