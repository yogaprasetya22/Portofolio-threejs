import Layout from '../components/layout/artickel'
import { Container, Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import cewe from '../public/img/cwe.png'
import { ProjextGridItem, GridItem } from '../components/grid-item'
import Section from '../components/section'
import whatsappClone from '../public/img/whatsapp-clone.png'

const project = () => {
  return (
    <Layout title={'Project'}>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={1.4}
          textAlign={'center'}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          My Project
        </Box>
        <Section delay={0.4}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <Section>
              <ProjextGridItem
                id="whatsapp-clone"
                title="Whatsapp Clone"
                thumbnail={whatsappClone}
              >
                Whatsapp clone yang dibuat menggunakan Next.js dan Firebase
              </ProjextGridItem>
            </Section>
            <Section>
              <ProjextGridItem id="walknote" title="walknote" thumbnail={cewe}>
                Music recommendation app for iOS
              </ProjextGridItem>
            </Section>
            <Section delay={0.3}>
              <ProjextGridItem id="jagres" title="jagres" thumbnail={cewe}>
                A Markdown note-taking app with 100+ plugins, cross-platform and
                encrypted data sync support
              </ProjextGridItem>
            </Section>
            <Section>
              <GridItem id="walknote" title="walknote" thumbnail={cewe}>
                Music recommendation app for iOS
              </GridItem>
            </Section>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default project
