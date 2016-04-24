import React from 'react'
import { Link } from 'react-router'
import PageTitle from './PageTitle'

const Home = () =>
  <div>
    <PageTitle>
      Deep Learning for Junior Developers, in React.js
    </PageTitle>
    <div>
      This site is under construction.
      But you can head over to <Link to='/depth/1'>Depth 1</Link>.
    </div>
  </div>

export default Home
