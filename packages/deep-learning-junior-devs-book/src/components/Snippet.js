import React from 'react'
import Prism from './Prism'

const Snippet = ({ id }) =>
  <div className='max-width-3'>
    <Prism>
      {require(`../snippets/${id}.js`)}
    </Prism>
  </div>

export default Snippet
