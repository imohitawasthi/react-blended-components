import React from 'react'
import propTypes from 'prop-types'

import Constants from '../../../Blended/Constants'

import Styles from './Button.css'

const TYPE_BUTTON_COMPONENT = {
  BASIC: { className: 'rbc-button-type-basic' },
  DEFAULT: { className: 'rbc-button-type-default' },
  PRIMARY: { className: 'rbc-button-type-primary' },
  SUCCESS: { className: 'rbc-button-type-success' },
  INFO: { className: 'rbc-button-type-info' },
  WARNING: { className: 'rbc-button-type-warning' },
  DANGER: { className: 'rbc-button-type-danger' },
  TRANSPARENT: { className: 'rbc-button-type-transparent' }
}

const SIZE_BUTTON_COMPONENT = {
  NORMAL: { className: 'rbc-button-size-normal' },
  'EXTRA-LARGE': { className: 'rbc-button-size-extra-large' },
  LARGE: { className: 'rbc-button-size-large' },
  SMALL: { className: 'rbc-button-size-small' },
  'EXTRA-SMALL': { className: 'rbc-button-size-extra-small' }
}

class Button extends React.Component {
  render() {
    const { label, type, style, className, disable, size, onClick, icon } = this.props

    const buttonClass = `
        ${Styles['rbc-button']}
        ${Styles[TYPE_BUTTON_COMPONENT[type].className] || ''} 
        ${Styles[SIZE_BUTTON_COMPONENT[size].className] || ''} 
        ${className}
    `

    return (
      <button
        className={buttonClass}
        style={style}
        onClick={onClick}
        disable={disable}
      >
        {icon ? (icon) : null}
        {label}
      </button>
    )
  }
}

Button.propTypes = {
  label: propTypes.string.isRequired,
  type: propTypes.oneOf(Object.keys(TYPE_BUTTON_COMPONENT)),
  style: propTypes.object,
  className: propTypes.string,
  disable: propTypes.string,
  size: propTypes.oneOf(Object.keys(SIZE_BUTTON_COMPONENT)),
  onClick: propTypes.func,
  icon: propTypes.element
}

Button.defaultProps = {
  type: Object.keys(TYPE_BUTTON_COMPONENT)[2],
  style: {},
  className: '',
  disable: 'false',
  size: Object.keys(SIZE_BUTTON_COMPONENT)[0],
  onClick: () => null
}

export default Button
