import React from 'react'
import propTypes, { element } from 'prop-types'

import Constants from '../../../Blended/Constants'

import Styles from './Form.css'

const VALIDATION_FAILED = 'form-has-error'

function getClasses(className, baseClass) {
  return {
    rootClass: className.rootClassName || Styles[`${baseClass}-root`],
    groupClass: className.groupClassName || Styles[`${baseClass}-group`],
    labelClass: className.labelClassName || Styles[`${baseClass}-label`],
    fieldClass: className.fieldClassName || Styles[`${baseClass}-field`],
    errorClass: className.errorClassName || Styles[`${baseClass}-error`]
  }
}

function makeHidden(hidden) {
  return hidden ? { display: 'none' } : {}
}

function allowResize(resize) {
  return resize ? { resize: 'none' } : {}
}

// Elements

// Text, Password
const formInputTextElement = (props, classes, type) => (
  <div
    key={props.index}
    className={`${classes.rootClass} ${props.error ? VALIDATION_FAILED : ''}`}
    style={makeHidden(props.hidden)}
  >
    <div className={classes.groupClass}>
      {props.label ? <label className={classes.labelClass}>{props.label}</label> : null}
      {props.icon ? props.icon : null}
      <input
        name={props.name}
        className={classes.fieldClass}
        placeholder={props.placeholder}
        type={type}
        value={props.value || ''}
        disabled={props.disabled || false}
        onChange={(e) =>
          onChange
            ? onChange(e.target.value)
            : this.onChange(e.target.value, props.name, props.validation)
        }
        autoFocus={props.autoFocus}
        autocomplete={props.autocomplete}
      />
      <span className={classes.errorClass}>{props.error}</span>
    </div>
  </div>
)

// TextArea
const formInputTextElement = (props, classes, type) => (
  <div
    key={props.index}
    className={`${classes.rootClass} ${props.error ? VALIDATION_FAILED : ''}`}
    style={ { ...makeHidden(props.hidden), ...allowResize(props.stopResize) } }
  >
    <div className={classes.groupClass}>
      {props.label ? <label className={classes.labelClass}>{props.label}</label> : null}
      <textarea
        name={props.name}
        className={classes.fieldClass}
        placeholder={props.placeholder}
        type={type}
        value={props.value || ''}
        disabled={props.disabled || false}
        onChange={(e) =>
          onChange
            ? onChange(e.target.value)
            : this.onChange(e.target.value, props.name, props.validation)
        }
        autoComplete={props.autoComplete}
        autoFocus={props.autoFocus}
        maxLength={props.maxLength}
      />
      <span className={classes.errorClass}>{props.error}</span>
    </div>
  </div>
)

// Radio
const formInputTextElement = (props, classes, type) => (
  <div
    key={props.index}
    className={`${classes.rootClass} ${props.error ? VALIDATION_FAILED : ''}`}
    style={ { ...makeHidden(props.hidden), ...allowResize(props.stopResize) } }
  >
    <div className={classes.groupClass}>
      {props.label ? <label className={classes.labelClass}>{props.label}</label> : null}
      <textarea
        name={props.name}
        className={classes.fieldClass}
        placeholder={props.placeholder}
        type={type}
        value={props.value || ''}
        disabled={props.disabled || false}
        onChange={(e) =>
          onChange
            ? onChange(e.target.value)
            : this.onChange(e.target.value, props.name, props.validation)
        }
        autoComplete={props.autoComplete}
        autoFocus={props.autoFocus}
        maxLength={props.maxLength}
      />
      <span className={classes.errorClass}>{props.error}</span>
    </div>
  </div>
)

// INPUTS

//
// Props: index, name, className, label, placeholder, validation, onChange, disabled, hidden, value, error, icon, autocomplete, autoFocus
const formInputText = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-text')

  return formInputTextElement(props, classes, 'text')
}

// Props: index, name, className, label, placeholder, validation, onChange, disabled, hidden, value, error, icon, autocomplete, autoFocus
const formInputPassword = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-password')

  return formInputPasswordElement(props, classes, 'password')
}

// Props: index, name, className, label, placeholder, validation, onChange, disabled, hidden, value, error, autocomplete, maxLength, stopResize
const formInputTextArea = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-textarea')

  return formInputTextAreaElement(props, classes)
}

// Props: index, name, className, label, placeholder, validation, onChange, disabled, hidden, value, error, autocomplete, maxLength, stopResize
const formInputRadio = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-radio')

  return formInputRadioElement(props, classes)
}

class Form extends React.Component {
  render() {
    const { name, meta, buttons } = this.props

    return <div></div>
  }
}

Form.propTypes = {}

Form.defaultProps = {}

export default Form
