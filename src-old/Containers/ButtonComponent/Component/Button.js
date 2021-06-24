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
  TRANSPARENT: { className: 'rbc-button-type-transparent' },
  DASHED: { className: 'rbc-button-type-dashed' }
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
    const { id, children, type, style, className, disabled, size, onClick } = this.props

    const buttonClass = `
        ${className || ''}
        ${Styles['rbc-button']}
        ${Styles[TYPE_BUTTON_COMPONENT[type].className] || ''} 
        ${Styles[SIZE_BUTTON_COMPONENT[size].className] || ''} 
    `

    return (
      <button
        id={id}
        className={buttonClass}
        style={style}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.element]).isRequired,
  type: propTypes.oneOf(Object.keys(TYPE_BUTTON_COMPONENT)),
  style: propTypes.object,
  className: propTypes.string,
  disabled: propTypes.bool,
  size: propTypes.oneOf(Object.keys(SIZE_BUTTON_COMPONENT)),
  onClick: propTypes.func,
}

Button.defaultProps = {
  type: Object.keys(TYPE_BUTTON_COMPONENT)[2],
  style: {},
  className: '',
  disabled: false,
  size: Object.keys(SIZE_BUTTON_COMPONENT)[0],
  onClick: () => null
}

export default Button
