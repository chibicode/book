import React from 'react'
import Prism from './Prism'
import strip from 'strip-indent'

const Snippet = ({ children }) =>
  <div className='max-width-3'>
    <Prism>
      {strip(children).trim()}
    </Prism>
  </div>

export default Snippet
