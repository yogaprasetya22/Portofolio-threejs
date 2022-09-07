import { FcGoogle } from 'react-icons/fc'
import { FiLogOut } from 'react-icons/fi'
import { Box, Button, Center, Stack, Text } from '@chakra-ui/react'
import { getProviders, signIn, signOut, useSession } from 'next-auth/react'

const SingInProvider = ({ providers }) => {
  const { data: sessions } = useSession()
  return (
    <Center p={8}>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
        {/* Google */}
        {!sessions ? (
          <>
            {Object.values(providers).map(provider => (
              <Box key={provider.name}>
                <Button
                  w={'full'}
                  variant={'outline'}
                  leftIcon={<FcGoogle />}
                  onClick={() =>
                    signIn(provider.id, {
                      callbackUrl: '/experience'
                    })
                  }
                >
                  <Center>
                    <Text>Sign in with Google</Text>
                  </Center>
                </Button>
              </Box>
            ))}
          </>
        ) : (
          <Box>
            <Button
              w={'full'}
              colorScheme={'facebook'}
              leftIcon={<FiLogOut />}
              onClick={signOut}
            >
              <Center>
                <Text>Log out</Text>
              </Center>
            </Button>
          </Box>
        )}
      </Stack>
    </Center>
  )
}

export const getServerSideProps = async ctx => {
  const providers = await getProviders()

  return {
    props: {
      providers
    }
  }
}

export default SingInProvider
