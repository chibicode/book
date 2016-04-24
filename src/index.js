import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Book from 'deep-learning-junior-devs-book'

// TODO: For **MY** development, hot loading deep-learning-junior-devs-book is the way to go,
// but for the user hot loading needs to listen to ./components. Probably should separate
// this index.js file into two files later.
import components from './components'

render(<AppContainer component={Book} props={{ components }}/>, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('deep-learning-junior-devs-book', () => {
    render(
      <AppContainer
        component={require('deep-learning-junior-devs-book').default}
        props={{ components }}
      />,
      document.getElementById('root')
    )
  })
}
