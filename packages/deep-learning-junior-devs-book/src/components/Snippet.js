import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/styles'

// TODO: Use recompose so this can be injectable
const languageToExtension = {
  javascript: 'js',
  jsx: 'jsx'
}

const Snippet = ({ id, lang = 'javascript' }) =>
  <div className='max-width-3'>
    <SyntaxHighlighter language={lang} style={tomorrow} className='rounded'>
      { require(`../snippets/${id}.${languageToExtension[lang]}`) }
    </SyntaxHighlighter>
  </div>

export default Snippet
