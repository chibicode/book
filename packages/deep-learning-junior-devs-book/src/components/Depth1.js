import React from 'react'
import { Link } from 'react-router'
import PageTitle from './PageTitle'
import Section from './Section'
import Snippet from './Snippet'

const Depth1 = () =>
  <div>
    <p>
      <Link to='/'>← Back to Home</Link>
    </p>
    <PageTitle>
      Depth 1: Matrix Component
    </PageTitle>
    <Section id={1} />
    <Snippet id={1} />
    <Section id={2} hint={true} />
    <Section id={3} />
    <Snippet id={2} lang={ 'jsx' } />
  </div>

export default Depth1
