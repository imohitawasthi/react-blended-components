import React from 'react'

import Header from '../../../Components/Header'
import Navigation from '../../../Components/Navigation'

import './App.css'

class App extends React.Component {
  container = (children) => (
    <div className='rbc-example-app-container'>
      <div className='col-lg-3 padding-0 rbc-example-app-container-navigation'>
        <Navigation
          parentIndex={this.props.parentIndex}
          childIndex={this.props.childIndex}
        />
      </div>
      <div className='col-lg-9 padding-0 rbc-example-app-container-children'>
        {children}
      </div>
    </div>
  )

  render() {
    const { children } = this.props
    return (
      <div className='rbc-example-app-root'>
        <Header />
        {this.container(children)}
      </div>
    )
  }
}

export default App
