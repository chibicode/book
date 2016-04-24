import React from 'react'
import { Link } from 'react-router'
import PageTitle from './PageTitle'
import Snippet from './Snippet'
import ComponentEmbed from './ComponentEmbed'
import Depth1Matrix1 from './Depth1Matrix1'
import Hint from './Hint'
import Text from './Text'
import SectionHeading from './SectionHeading'

const Depth1 = () =>
  <div>
    <p>
      <Link to='/'>← Back to Home</Link>
    </p>
    <PageTitle>
      Depth 1: Matrix Component
    </PageTitle>
    <Text>
      {`
        The first key concept we'll talk about is **two dimensional (2D) arrays**. In JavaScript, this is a 2D array:
      `}
    </Text>
    <Snippet>
      {`
        const twoDimensionalArray = [
          [1, 2, 3],
          [4, 5, 6]
        ]
      `}
    </Snippet>
    <Hint>
      {`
        We're using \`const\` instead of \`var\` - \`const\` is like \`var\`, but you can only assign the value once.
      `}
    </Hint>
    <SectionHeading>
      Matrix
    </SectionHeading>
    <Text>
      {`
        In Math, a 2D array is called a **Matrix** (plural: **Matrices**). In this depth, we'll implement a React component that renders a matrix. The code will look like this:
      `}
    </Text>
    <Snippet>
      {`
        const data = [
          [1, 2, 3],
          [4, 5, 6]
        ]

        <Matrix data={data} />
      `}
    </Snippet>
    <Text>{`
      And the rendered React component looks like this:
    `}</Text>
    <ComponentEmbed>
      <Depth1Matrix1 data={[
        [1, 2, 3],
        [4, 5, 6]
      ]} />
    </ComponentEmbed>
  </div>

export default Depth1
