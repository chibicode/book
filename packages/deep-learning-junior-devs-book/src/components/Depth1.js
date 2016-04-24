import React from 'react'
import { Link } from 'react-router'
import PageTitle from './PageTitle'
import Section from './Section'
import Snippet from './Snippet'
import ComponentSnippet from './ComponentSnippet'
import Depth1Matrix1 from './Depth1Matrix1'

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
    <Snippet id={2} />
    <Section id={4} />
    <div className='mb2'>
      <Depth1Matrix1 data={
        [
          [1, 2, 3],
          [4, 5, 6]
        ]
      } />
    </div>
    <ComponentSnippet name='Depth1Matrix1' />
  </div>

export default Depth1
