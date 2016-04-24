import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Book from 'deep-learning-junior-devs-book'
import components from './allComponents'

const root = document.getElementById('root')

render(<AppContainer component={Book} props={{ components }}/>, root)

if (module.hot) {
  // Duplicate code, but otherwise you'll be calling require()
  // with a dynamic arg, which will trigger a warning
  if (__DEV__) {
    module.hot.accept('deep-learning-junior-devs-book', () => {
      render(
        <AppContainer
          component={require('deep-learning-junior-devs-book').default}
          props={{ components }}
        />,
        root
      )
    })
  } else {
    module.hot.accept('./allComponents', () => {
      render(
        <AppContainer
          component={require('./allComponents').default}
          props={{ components }}
        />,
        root
      )
    })
  }
}
