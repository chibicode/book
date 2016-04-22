import React, { createElement, Component, PropTypes } from 'react'
import './styles/index.css'

export default class Book extends Component {
  static propTypes = {
    components: PropTypes.object
  };

  static childContextTypes = {
    renderTutorialComponent: PropTypes.func
  };

  getChildContext () {
    return { renderTutorialComponent: ::this.renderTutorialComponent }
  }

  renderTutorialComponent (name, props) {
    return createElement(this.props.components[name], props)
  }

  render () {
    return (
      <div style={{ padding: '50px 100px 100px' }}>
        <div className='max-width-3'>
          <h1 className='mt0'>Depth 2.1: Matrix Component</h1>
        </div>
        <div>
          Hello World!
        </div>
      </div>
    )
  }
}
