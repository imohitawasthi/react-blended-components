import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import App from './Containers/AppContainer'

class Routes extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <section className='root-container'>
          {/* <Switch> */}
            <App>
              {/* <Route> */}
            </App>
          {/* </Switch> */}
      </section>
    )
  }
}

export default Routes
