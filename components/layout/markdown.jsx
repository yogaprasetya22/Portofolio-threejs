import { useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs, rainbow } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
 
const Markdown = ({ src }) => {
  return (
    <ReactMarkdown
      
      className="markdown"
      children={src}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={useColorModeValue(vs, rainbow)}
              language={'javascript'}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        }
      }}
    />
  )
}

export default Markdown
