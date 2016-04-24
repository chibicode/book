import React from 'react'
import Markdown from 'matthewmueller-react-remarkable'
import styles from './styles/Hint.css'

const Hint = ({ children }) =>
  <div className={styles.hint}>
    <div className={styles.hintHeader}>Hint</div>
    <Markdown>
      {children}
    </Markdown>
  </div>

export default Hint
