import React from 'react'
import styles from './styles/ComponentEmbed.css'

// TODO: Display file name
const ComponentEmbed = ({ filename, ...others }) => {
  let Component
  try {
    Component = (require(filename) || {}).default
  } catch (e) {}
  if (Component) {
    return <div className={styles.container}>
      <Component { ...others }/>
    </div>
  } else {
    // TODO: Implement styles.emptyContainer
    return <div className={styles.container}>
      File Not Found
    </div>
  }
}

export default ComponentEmbed
