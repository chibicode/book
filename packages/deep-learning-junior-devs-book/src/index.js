import React, { Component, PropTypes } from 'react'

export default class Book extends Component {
  static contextTypes = {
    renderTutorialComponent: PropTypes.func
  };

  render () {
    return (
      <div>
        <h2>Book?</h2>
        <div>
          { this.context.renderTutorialComponent('Test', { foo: 1 }) }
        </div>
      </div>
    )
  }
}
