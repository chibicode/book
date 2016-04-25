import React from 'react'
import Markdown from 'matthewmueller-react-remarkable'

const Text = ({ children }) =>
  <div className='max-width-2 mb2'>
    <Markdown options={{ html: true }}>
      {children}
    </Markdown>
  </div>

export default Text
