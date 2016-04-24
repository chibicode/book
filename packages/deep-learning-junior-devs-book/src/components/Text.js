import React from 'react'
import Markdown from 'matthewmueller-react-remarkable'

const Text = ({ children }) =>
  <div className='max-width-2 mb2'>
    <Markdown>
      {children}
    </Markdown>
  </div>

export default Text
