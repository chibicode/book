import React from 'react'
import Prism from './Prism'

const ComponentSnippet = ({ name }) =>
  <div className='max-width-3'>
    <Prism>
      {require(`!!raw!./${name}.js`)}
    </Prism>
  </div>

export default ComponentSnippet
