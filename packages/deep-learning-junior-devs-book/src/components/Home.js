import React from 'react'
import { Link } from 'react-router'

const Home = () => (
  <div>
    <div className='max-width-3'>
      <h1 className='mt0'>Deep Learning for Junior Developers</h1>
    </div>
    <div>
      This site is under construction.
      But you can head over to <Link to='/depth/1'>Depth 1</Link>.
    </div>
  </div>
)

export default Home
