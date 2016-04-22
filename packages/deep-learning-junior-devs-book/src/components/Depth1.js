import React from 'react'
import { Link } from 'react-router'
import PageTitle from './PageTitle'
import Section from './Section'

const Depth1 = () =>
  <div>
    <p>
      <Link to='/'>← Back to Home</Link>
    </p>
    <PageTitle>
      Depth 1: Matrix Component
    </PageTitle>
    <Section id={ 1 } />
  </div>

export default Depth1
