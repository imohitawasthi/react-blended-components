import React from 'react'
import propTypes, { element } from 'prop-types'

import Constants from '../../../Blended/Constants'

import Styles from './Tooltip.css'

class Tooltip extends React.Component {

  render() {
    const {} = this.props

    return (
      <span class={`${Styles['rbc-tooltip']}`}>Tooltip text</span>
    )
  }
}

Tooltip.propTypes = {
  
}

Tooltip.defaultProps = {}

export default Tooltip
