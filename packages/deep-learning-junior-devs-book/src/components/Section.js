import React from 'react'

const Section = ({ id }) =>
  <div className='max-width-2' dangerouslySetInnerHTML={{ __html: require(`../content/${id}.md`) }} >
  </div>

export default Section
