import React from 'react'
import { highlight, languages } from 'prismjs'
import { mapProps, onlyUpdateForKeys, compose } from 'recompose'

const hoc = compose(
  mapProps(({ children }) => ({
    children,
    lazyHtmlFn: () => highlight(children, languages.javascript)
  })),
  onlyUpdateForKeys(['children'])
)

const Prism = ({ children, lazyHtmlFn }) => (
  <pre className='language-javascript'>
    <code className='language-javascript' dangerouslySetInnerHTML={{ __html: lazyHtmlFn() }}>
    </code>
  </pre>
)

export default hoc(Prism)
