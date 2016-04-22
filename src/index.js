import React from 'react'
import { render } from 'react-dom'
import Book from 'deep-learning-junior-devs-book'
import components from './components'

render(<Book { ...{ components }}/>, document.getElementById('root'))
