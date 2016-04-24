import React from 'react'
import styles from './styles/ComponentEmbed.css'

const ComponentEmbed = ({ children }) =>
  <div className={styles.container}>
    {children}
  </div>

export default ComponentEmbed
