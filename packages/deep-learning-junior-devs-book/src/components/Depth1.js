import React from 'react'
import { Link } from 'react-router'
import PageTitle from './PageTitle'
import Snippet from './Snippet'
import ComponentEmbed from './ComponentEmbed'
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
        We're using \`const\` instead of \`var\` - \`const\` is like \`var\`, but you can only assign the value once. [Learn more here](https://github.com/lukehoban/es6features#let--const).
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
    <Text>
      {`
        And the rendered React component looks like this:
      `}
    </Text>
    <ComponentEmbed filename='./Depth1Matrix1' data={[
      [1, 2, 3],
      [4, 5, 6]
    ]} />
    <Text>
      {`
        Let's implement this component. First, <mark>inside \`src/components\` file, create \`Depth1.Matrix.1.js\`. Then add the following code.</mark>
      `}
    </Text>
    <Snippet>
      {require('!!raw!./solutions/Depth1.Matrix.1.js')}
    </Snippet>
    <Text>
      {`
        This is just to make sure that the code is working. If you implement it correctly, it should show up below:
      `}
    </Text>
    {/* TODO: This should be toggle-able with the solution */}
    <ComponentEmbed filename='./solutions/Depth1.Matrix.1' />
    <Hint>
      {`
        We're using functional stateless React components. If you don't know what that means, google for it or watch [this video on Egghead.io](https://egghead.io/lessons/react-building-stateless-function-components-new-in-react-0-14).

        We're also using ES6 function shorthand \`() => ...\` as well as \`import\` and \`export\`. You can [learn about them here](https://github.com/lukehoban/es6features#let--const).
      `}
    </Hint>
  </div>

export default Depth1
