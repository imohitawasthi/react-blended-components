import React from 'react'

import './Navigation.css'

import Source from './../source'

import { Tab } from 'react-blended-components'

class Navigation extends React.Component {

 render () {
   return(
     <div className='rbc-example-navigation-root'>      
        <Tab 
          className='rbc-example-navigation-container'
          tabs={Source.META_NAVIGATION}
          selected={{tab:0, subTab: 2}} 
        />
     </div>
   )
 } 
}

export default Navigation
