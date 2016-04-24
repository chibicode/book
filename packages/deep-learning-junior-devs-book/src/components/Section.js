import React from 'react'
import classnames from 'classnames'
import styles from './styles/Section.css'

const Section = ({ id, hint = false }) =>
  <div className={classnames('max-width-2 mb2', {
    [styles.hint]: hint
  })}>
    {hint ? <div className='mt1 bold'>Hint</div> : null}
    <div dangerouslySetInnerHTML={{ __html: require(`../content/${id}.md`) }} >
    </div>
  </div>

export default Section
