import React from 'react'

import Header from './../../HeaderContainer'
import Navigation from './../../NavigationContainer'

class App extends React.Component {

 render () {
  const { children } = this.props
   return(
     <div className="rbc-example-app-root">
       <Header />
       <div className="col-sm-4 padding-0">
         <Navigation />
       </div>
       <div className="col-sm-8 padding-0">
         {children}
       </div>
     </div>
   )
 } 
}

export default App
