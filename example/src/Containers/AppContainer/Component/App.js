import React from 'react'

import Header from './../../HeaderContainer'
import Navigation from './../../NavigationContainer'

import './App.css'

class App extends React.Component {

  container = (children) => (
    <div className="rbc-example-app-container">
      <div className="col-lg-2 padding-0 rbc-example-app-container-navigation">
         <Navigation />
       </div>
       <div className="col-lg-10 padding-0 rbc-example-app-container-children">
         Children...
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
