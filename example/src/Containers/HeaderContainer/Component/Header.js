import React from 'react'

import './Header.css'

const STRING_APP_NAME = "React Blended Component"

class Header extends React.Component {

 render () {
   return(
     <div className="container-fluid rbc-example-header-root">
       <div className="rbc-example-header">
        <div className="col-xs-6 padding-0 rbc-example-header-app-name">
          {STRING_APP_NAME}
        </div>
       </div>
     </div>
   )
 } 
}

export default Header
