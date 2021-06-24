import React from 'react'
import propTypes from 'prop-types'

import Constants from '../../../Blended/Constants'

import Styles from './Badge.css'

class Badge extends React.Component {
  render() {
    const {
      value,
      className,
      style
    } = this.props

    return (
      <span className={`${Styles['rbc-badge']} ${className || ''}`} style={style}>{value}</span>
    )
  }
}

Badge.propTypes = {
  value: propTypes.oneOfType([propTypes.element, propTypes.string]).isRequired,
  className: propTypes.string,
  style: propTypes.object
}

Badge.defaultProps = {
  style: {}
}

export default Badge
