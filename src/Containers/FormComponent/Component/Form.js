import React from 'react'
import propTypes, { element } from 'prop-types'

import Constants from '../../../Blended/Constants'

import Styles from './Form.css'

const VALIDATION_FAILED = 'form-has-error'

function getClasses(className = {}, baseClass) {
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
      {props.label ? (
        <label className={classes.labelClass}>{props.label}</label>
      ) : null}
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
const formInputTextAreaElement = (props, classes) => (
  <div
    key={props.index}
    className={`${classes.rootClass} ${props.error ? VALIDATION_FAILED : ''}`}
    style={{ ...makeHidden(props.hidden), ...allowResize(props.stopResize) }}
  >
    <div className={classes.groupClass}>
      {props.label ? (
        <label className={classes.labelClass}>{props.label}</label>
      ) : null}
      <textarea
        name={props.name}
        className={classes.fieldClass}
        placeholder={props.placeholder}
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

// Radio, Checkbox
const formInputRadioElement = (props, classes, type) => (
  <div
    key={props.index}
    className={`${classes.rootClass} ${props.error ? VALIDATION_FAILED : ''}`}
    style={{ ...makeHidden(props.hidden), ...allowResize(props.stopResize) }}
  >
    <div className={classes.groupClass}>
      {props.label ? (
        <label className={classes.labelClass}>{props.label}</label>
      ) : null}
      {props.options.map((element) => (
        <div className={classes.fieldClass}>
          <input
            name={props.name}
            id={`${props.name}-${element.id}`}
            type={type}
            value={element.value}
            checked={type === 'radio' ? element.value === props.value : element.value === props.value[element.id]}
            disabled={props.disabled || false}
            onChange={(e) =>
              props.onChange(element.value, element.id, props.validation, props.name)
            }
            autoFocus={props.autoFocus}
          />
          <label htmlFor={`${props.name}-${element.id}`}>{element.label}</label>
        </div>
      ))}
      <span className={classes.errorClass}>{props.error}</span>
    </div>
  </div>
)

// Select
const formInputSelectElement = (props, classes, type) => (
  <div
    key={props.index}
    className={`${classes.rootClass} ${props.error ? VALIDATION_FAILED : ''}`}
    style={{ ...makeHidden(props.hidden), ...allowResize(props.stopResize) }}
  >
    <div className={classes.groupClass}>
      {props.label ? (
        <label className={classes.labelClass}>{props.label}</label>
      ) : null}
      <select
        className={classes.fieldClass}
        name={props.name}
        id={props.name}
        value={element.value}
        disabled={props.disabled || false}
        onChange={(e) =>
          onChange
            ? onChange(e.target.value)
            : this.onChange(e.target.value, props.name, props.validation)
        }
        autoFocus={props.autoFocus}
      >
        {props.options.map((element) =>
          element.meta && element.meta.length ? (
            <optgroup className={element.className} label={element.label}>
              {element.meta.map((element) => (
                <option className={element.className} value={element.value}>
                  {element.label}
                </option>
              ))}
            </optgroup>
          ) : (
            <option className={element.className} value={element.value}>
              {element.label}
            </option>
          )
        )}
      </select>
      <span className={classes.errorClass}>{props.error}</span>
    </div>
  </div>
)

// Date Picker
const formInputDatePickerElement = (props, classes) => (
  <div
    key={props.index}
    className={`${classes.rootClass} ${props.error ? VALIDATION_FAILED : ''}`}
    style={makeHidden(props.hidden)}
  >
    <div className={classes.groupClass}>
      {props.label ? (
        <label className={classes.labelClass}>{props.label}</label>
      ) : null}
      <input
        name={props.name}
        className={classes.fieldClass}
        placeholder={props.placeholder}
        type={'date'}
        value={props.value || ''}
        disabled={props.disabled || false}
        onChange={(e) =>
          onChange
            ? onChange(e.target.value)
            : this.onChange(e.target.value, props.name, props.validation)
        }
        autoFocus={props.autoFocus}
        autocomplete={props.autocomplete}
        min={props.startDate || null}
        max={props.endDate || null}
      />
      <span className={classes.errorClass}>{props.error}</span>
    </div>
  </div>
)

// Switch
const formInputSwitchElement = (props, classes) => (
  <div
    key={props.index}
    className={`${classes.rootClass} ${props.error ? VALIDATION_FAILED : ''}`}
    style={makeHidden(props.hidden)}
  >
    <div className={classes.groupClass}>
      {props.label ? (
        <label className={classes.labelClass}>{props.label}</label>
      ) : null}

      <label
        name={props.name}
        autoFocus={props.autoFocus}
        disabled={props.disabled || false}
        className={classes.fieldClass}
      >
        <input
          type='checkbox'
          checked={props.value}
          onChange={(e) =>
            onChange
              ? onChange(e.target.value)
              : this.onChange(e.target.value, props.name, props.validation)
          }
        />
        <span class='slider'></span>
      </label>
      <span className={classes.errorClass}>{props.error}</span>
    </div>
  </div>
)

// Slider
const formInputSliderElement = (props, classes) => (
  <div
    key={props.index}
    className={`${classes.rootClass} ${props.error ? VALIDATION_FAILED : ''}`}
    style={makeHidden(props.hidden)}
  >
    <div className={classes.groupClass}>
      {props.label ? (
        <label className={classes.labelClass}>{props.label}</label>
      ) : null}
      <div
        name={props.name}
        autoFocus={props.autoFocus}
        disabled={props.disabled || false}
        className={classes.fieldClass}
      >
        <input
          type='range'
          onChange={(e) =>
            onChange
              ? onChange(e.target.value)
              : this.onChange(e.target.value, props.name, props.validation)
          }
          min={props.minValue}
          max={props.maxValue}
          value={props.value}
          class='slider'
        />
      </div>
      <span className={classes.errorClass}>{props.error}</span>
    </div>
  </div>
)

// INPUTS

//
// Props: index, name, className, label, placeholder, validation, onChange, disabled, hidden, value, error, icon, autocomplete, autoFocus
const Text = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-text')

  return formInputTextElement(props, classes, 'text')
}

// Props: index, name, className, label, placeholder, validation, onChange, disabled, hidden, value, error, icon, autocomplete, autoFocus
const Password = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-password')

  return formInputTextElement(props, classes, 'password')
}

// Props: index, name, className, label, placeholder, validation, onChange, disabled, hidden, value, error, autocomplete, maxLength, stopResize, autoFocus
const TextArea = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-textarea')

  return formInputTextAreaElement(props, classes)
}

// Props: index, name, className, label, validation, onChange, disabled, hidden, value, error, autocomplete, maxLength, options, autoFocus
const Radio = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-radio')

  return formInputRadioElement(props, classes, 'radio')
}

// Props: index, name, className, label, validation, onChange, disabled, hidden, value, error, options, autoFocus
const CheckBox = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-checkbox')

  return formInputRadioElement(props, classes, 'checkbox')
}

// Props: index, name, className, label, validation, onChange, disabled, hidden, value, error, options, autoFocus
const Select = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-select')

  return formInputSelectElement(props, classes)
}

// Props: index, name, className, label, validation, onChange, disabled, hidden, value, error, autoFocus, startDate, endDate
const DatePicker = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-date-picker')

  return formInputDatePickerElement(props, classes)
}

// Props: index, name, className, label, validation, onChange, disabled, hidden, value, error, autoFocus, startDate, endDate
const Switch = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-switch')

  return formInputSwitchElement(props, classes)
}

// Props: index, name, className, label, validation, onChange, disabled, hidden, value, error, autoFocus, minValue, maxValue
const Slider = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-slider')

  return formInputSliderElement(props, classes)
}

class Form extends React.Component {
  render() {
    const { name, meta, buttons } = this.props

    return (
      <div>
        <Text />
      </div>
    )
  }
}

Form.propTypes = {}

Form.defaultProps = {}

export default Form

export { Text, Password, TextArea, Radio, CheckBox, Select, DatePicker, Switch }
