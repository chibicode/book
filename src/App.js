import React, { createElement, Component, PropTypes } from 'react'
import Book from 'deep-learning-junior-devs-book'
import components from './components'

export default class App extends Component {
  static childContextTypes = {
    renderTutorialComponent: PropTypes.func
  };

  getChildContext () {
    return {
      renderTutorialComponent: (name, props) => createElement(components[name], props)
    }
  }

  render () {
    return (
      <div>
        <h1>Hello, world.</h1>
        <Book />
        <p>Goodbye.</p>
      </div>
    )
  }
}
