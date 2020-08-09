import React from 'react'

import ChildLayout from '../../../Components/ChildLayout'

import './OverviewIntroduction.css'

import META from './../source'

class OverviewIntroduction extends React.Component {

  render() {
    return (
      <ChildLayout 
        meta={META}
      />
    )
  }
}

export default OverviewIntroduction
