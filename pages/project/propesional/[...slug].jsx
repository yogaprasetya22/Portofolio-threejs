import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Center } from '@chakra-ui/react'
import { Bottom } from '../../../components/BottomView'
import Layout from '../../../components/layout/artickel'
import {
  Mark,
  Paragraf,
  Title,
  BadgeUi,
  ImageProject
} from '../../../components/layout/project'

function flatMap(array, fn, i) {
  var result = []
  for (var i = 0; i < array.length; i++) {
    var mapping = fn(array[i])
    result = result.concat(mapping)
  }
  return result
}

export default function Slug({ id }) {
  const [data, setData] = useState([])
  const { t, i18n, ready } = useTranslation('global')

  if (!ready) return 'loading translations...'
  const trnaslate = t('project', { returnObjects: true })
  const dataTranslate = trnaslate?.body.propesional

  useEffect(() => {
    dataTranslate.map(item => {
      if (item.slug === id) {
        setData(item)
      }
    })
  }, [id, i18n.language])

  const ReplaceStringToComponent = ({ children }) => {
    // Memisahkan teks dalam format ||...|| sebagai badge
    const parts = children?.split('||')
    // Memastikan bahwa ada setidaknya 3 elemen (teks sebelum, dalam, dan setelah ||)
    if (parts?.length >= 3) {
      let textBefore = parts[0]
      const badgeText = parts[1]
      const textAfter = parts.slice(2).join('||') // Menggabungkan kembali bagian setelah badge

      const split = textBefore?.split(' ')
      textBefore = flatMap(split, word => {
        if (word.startsWith('**') || word.endsWith('**')) {
          const uniqueKey = `word1_${Math.random()}_${Math.random()}`
          return <Mark key={uniqueKey}>{word.replace(/\**/g, '')} </Mark>
        }

        return word + ' '
      })
      return (
        <>
          {textBefore}
          <Box whiteSpace={'nowrap'} display="inline-flex">
            <BadgeUi>{badgeText}</BadgeUi>
          </Box>
          {textAfter}
        </>
      )
    }

    // Jika format tidak sesuai, kembalikan teks aslinya
    return children
  }

  return (
    <Layout title={data?.title}>
      <Box p={{ base: '10px', md: '35px' }}>
        <Title>{data?.title}</Title>
        <br />
        <Center>
          <Paragraf>
            {data.content && (
              <ReplaceStringToComponent>
                {data.content[0]?.des_content}
              </ReplaceStringToComponent>
            )}
          </Paragraf>
        </Center>
        <Content data={data?.content} />
        <Bottom link={data?.demo} github={data?.github} />
      </Box>
    </Layout>
  )
}

const Content = ({ data }) => {
  const [dataReplace, setDataReplace] = useState([])
  const [loading, setLoading] = useState(false)

  const ReplaceImageComponent = ({ text }) => {
    const regex = /%\s*([^%]+)\s*%/g
    const parts = text.split(regex)
    const uniqueKey = `image_${Math.random()}`
    const replacedText = parts.map((part, index) => {
      if (index % 2 === 1) {
        // Ini adalah teks yang harus digantikan dengan komponen gambar
        return (
          <Center key={uniqueKey}>
            <ImageProject src={part} alt="Gambar" />
          </Center>
        )
      }
      return part
    })

    return <div key={uniqueKey}>{replacedText}</div>
  }

  const MarkReplaceContent = ({ children }) => {
    const res = children?.split(' ')
    const result = flatMap(res, word => {
      // Use the index for the key
      if (word.startsWith('**') || word.endsWith('**')) {
        const uniqueKey = `word3_${Math.random()}_${Math.random()}`
        return <Mark key={uniqueKey}>{word.replace(/\**/g, '')} </Mark>
      } else if (word.startsWith('%') || word.endsWith('%')) {
        return ReplaceImageComponent({ text: children })
      }
      return word + ' '
    })
    return result
  }

  useEffect(() => {
    setLoading(true)
    data?.splice(0, 1)
    if (data) {
      const result = data.map((item, i) => {
        return (
          <div key={i}>
            <Paragraf>
              <MarkReplaceContent>{item.des_content}</MarkReplaceContent>
            </Paragraf>
          </div>
        )
      })
      setDataReplace(result)
    }
    setLoading(false)
  }, [data])

  useEffect(() => {}, [data])

  return <>{loading ? <Paragraf>loading...</Paragraf> : dataReplace}</>
}

// getServersideProps
export async function getServerSideProps({ params }) {
  const { slug } = params
  return {
    props: {
      id: slug[0]
    }
  }
}
