import { Box, Stack, Flex, Link } from '@chakra-ui/react'

export const Bottom = ({ link, github }) => (
  <Box
    pt={10}
    display={'flex'}
    alignItems="center"
    justifyContent={'space-around'}
    width={'100%'}
  >
    <Stack isInline spacing={20} padding={'10px 60px'}>
      {link && (
        <Flex
          bg={'black'}
          w={'80px'}
          h={'50px'}
          borderRadius={5}
          justifyContent="center"
          alignItems="center"
        >
          <Link href={link} target="_blank">
            View
          </Link>
        </Flex>
      )}
      {github && (
        <Flex
          bg={'black'}
          w={'80px'}
          h={'50px'}
          borderRadius={5}
          justifyContent="center"
          alignItems="center"
        >
          <Link href={github} target="_blank">
            Code
          </Link>
        </Flex>
      )}
    </Stack>
  </Box>
)
