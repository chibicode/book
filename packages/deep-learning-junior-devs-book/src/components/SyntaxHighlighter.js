// Slimmed down version of https://github.com/conorhastings/react-syntax-highlighter
// ...But it doesn't quite work yet. See my comment:
// https://github.com/isagalaev/highlight.js/issues/931#issuecomment-213838285
// Also see this:
// https://github.com/wooorm/lowlight/pull/1#issuecomment-213849625
import lowlight from 'lowlight/lib/core'
import highlightLangJs from 'highlight.js/lib/languages/javascript'
import highlightLangXml from 'highlight.js/lib/languages/xml'
lowlight.registerLanguage('javascript', highlightLangJs)
lowlight.registerLanguage('xml', highlightLangXml)

import React from 'react'

const Text = ({ children }) => <span>{children}</span>

const createStyleObject = (classNames, style) => {
  return classNames.reduce((styleObject, className) => {
    return {...styleObject, ...style[className]}
  }, {})
}

function createChildren(style) {
  let childrenCount = 0
  return children => {
    childrenCount += 1
    return children.map((child, i) => createElement(child, style, `code-segment-${childrenCount}-${i}`))
  }
}
function createElement(node, style, key) {
  const { properties, type, tagName, value } = node
  if (type === "text") {
    return <Text key={key}>{ value }</Text>
  }
  else if (tagName) {
    const TagName = tagName
    const childrenCreator = createChildren(style)
    const nodeStyle = createStyleObject(properties.className, style)
    const children = childrenCreator(node.children)
    return <TagName key={key} style={nodeStyle}>{children}</TagName>
  }
}

export default function SyntaxHighlighter(props) {
  const {language, children, style = defaultStyle} = props
  const codeTree = lowlight.highlight(language, children)
  const defaultPreStyle = style.hljs || {backgroundColor: '#fff'}
  return (
    <pre {...props} style={defaultPreStyle}>
      <code>
        {codeTree.value.map((node, i) => createElement(node, style, `code-segement${i}`))}
      </code>
    </pre>
  )
}
