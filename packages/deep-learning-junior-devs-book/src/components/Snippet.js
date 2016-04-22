import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/styles'

const Snippet = ({ id }) =>
  <div className='max-width-3'>
    <SyntaxHighlighter language='javascript' style={ tomorrow } className='rounded'>
      { require(`../snippets/${id}.js`) }
    </SyntaxHighlighter>
  </div>

export default Snippet
