import React, { createElement, Component, PropTypes } from 'react'
import Book from 'deep-learning-junior-devs-book'
import components from './components'

export default class App extends Component {
  render () {
    return (
      <Book { ...{ components }}/>
    )
  }
}
