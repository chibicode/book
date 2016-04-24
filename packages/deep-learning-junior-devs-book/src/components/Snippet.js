import React from 'react'
import { PrismCode } from 'react-prism'

const Snippet = ({ id }) =>
  <div className='max-width-3'>
    <pre className='rounded'>
      <PrismCode className='language-javascript'>
        { require(`../snippets/${id}.js`) }
      </PrismCode>
    </pre>
  </div>

export default Snippet
