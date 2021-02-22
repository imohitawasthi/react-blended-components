import React from 'react';
import propTypes, { element } from 'prop-types';

import Constants from '../../../Blended/Constants';

import Button from './../../ButtonComponent';

import Styles from './Form.css';

const VALIDATION_FAILED = 'form-has-error';

function getClasses(className = {}, baseClass) {
  return {
    rootClass: `${Styles[`${baseClass}-root`]} ${className.rootClassName || ''}`,
    groupClass: `${Styles[`${baseClass}-group`]} ${className.groupClassName || ''}`,
    labelClass: `${Styles[`${baseClass}-label`]} ${className.labelClassName || ''}`,
    fieldClass: `${Styles[`${baseClass}-field`]} ${className.fieldClassName || ''}`,
    errorClass: `${Styles[`${baseClass}-error`]} ${className.errorClassName || ''}`,
  };
}

function makeHidden(hidden) {
  return hidden ? { display: 'none' } : {};
}

function allowResize(resize) {
  return resize ? { resize: 'none' } : {};
}

// Elements

// Text, Password
const formInputTextElement = (props, classes, type) => (
  <div key={props.index} className={`${classes.rootClass} ${props.error ? VALIDATION_FAILED : ''}`} style={makeHidden(props.hidden)}>
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
        autoFocus={props.autoFocus}
        autocomplete={props.autocomplete}
        onChange={(e) => props.onChange(e.target.value, props.name, props.validation)}
        onBlur={() => props.onBlur(props.value, props.error, props.name, props.validation)}
      />
      <span className={classes.errorClass}>{props.error}</span>
    </div>
  </div>
);

// TextArea
const formInputTextAreaElement = (props, classes) => (
  <div
    key={props.index}
    className={`${classes.rootClass} ${props.error ? VALIDATION_FAILED : ''}`}
    style={{ ...makeHidden(props.hidden), ...allowResize(props.stopResize) }}
  >
    <div className={classes.groupClass}>
      {props.label ? <label className={classes.labelClass}>{props.label}</label> : null}
      <textarea
        name={props.name}
        className={classes.fieldClass}
        placeholder={props.placeholder}
        value={props.value || ''}
        disabled={props.disabled || false}
        autoComplete={props.autoComplete}
        autoFocus={props.autoFocus}
        maxLength={props.maxLength}
        onChange={(e) => props.onChange(e.target.value, props.name, props.validation)}
        onBlur={() => props.onBlur(props.value, props.error, props.name, props.validation)}
      />
      <span className={classes.errorClass}>{props.error}</span>
    </div>
  </div>
);

// Radio
const formInputRadioElement = (props, classes, type) => (
  <div
    key={props.index}
    className={`${classes.rootClass} ${props.error ? VALIDATION_FAILED : ''}`}
    style={{ ...makeHidden(props.hidden), ...allowResize(props.stopResize) }}
  >
    <div className={classes.groupClass}>
      {props.label ? <label className={classes.labelClass}>{props.label}</label> : null}
      {props.options.map((element, index) => {
        let _value, _checked;

        if (props.isForm) {
          _value = props.state ? props.state[props.name] : null;
        } else {
          _value = props.value;
        }

        _checked = _value === element.value;

        return (
          <div key={index} className={classes.fieldClass}>
            <input
              name={props.name}
              id={`${props.name}-${element.id}`}
              type={type}
              value={_value}
              checked={_checked}
              disabled={props.disabled || false}
              autoFocus={props.autoFocus}
              onChange={() => props.onChange(element.value, props.name, props.validation)}
              onBlur={() => props.onBlur(element.value, props.error, props.name, props.validation)}
            />
            <label htmlFor={`${props.name}-${element.id}`}>{element.label}</label>
          </div>
        );
      })}
      <span className={classes.errorClass}>{props.error}</span>
    </div>
  </div>
);

// Checkbox
const formInputCheckboxElement = (props, classes, type) => (
  <div
    key={props.index}
    className={`${classes.rootClass} ${props.error ? VALIDATION_FAILED : ''}`}
    style={{ ...makeHidden(props.hidden), ...allowResize(props.stopResize) }}
  >
    <div className={classes.groupClass}>
      {props.label ? <label className={classes.labelClass}>{props.label}</label> : null}
      {props.options.map((element, index) => {
        let _value, _checked;

        if (props.isForm) {
          _value = props.state ? props.state[`${props.name}-${element.id}`] : null;
        } else {
          _value = props.value;
        }

        _checked = _value && Object.keys(_value).includes(element.id) ? _value[element.id] : _value;

        return (
          <div key={index} className={classes.fieldClass}>
            <input
              name={`${props.name}-${element.id}`}
              id={`${props.name}-${element.id}`}
              type={type}
              value={_value}
              checked={_checked}
              disabled={props.disabled || false}
              autoFocus={props.autoFocus}
              onChange={() => props.onChange(props.isForm ? !!!_value : element.value, `${props.name}-${element.id}`, props.validation)}
              onBlur={() => props.onBlur(props.isForm ? !!!_value : element.value, props.error, `${props.name}-${element.id}`, props.validation)}
            />
            <label htmlFor={`${props.name}-${element.id}`}>{element.label}</label>
          </div>
        );
      })}
      <span className={classes.errorClass}>{props.error}</span>
    </div>
  </div>
);

// Select
const formInputSelectElement = (props, classes, type) => (
  <div
    key={props.index}
    className={`${classes.rootClass} ${props.error ? VALIDATION_FAILED : ''}`}
    style={{ ...makeHidden(props.hidden), ...allowResize(props.stopResize) }}
  >
    <div className={classes.groupClass}>
      {props.label ? <label className={classes.labelClass}>{props.label}</label> : null}
      <select
        className={classes.fieldClass}
        name={props.name}
        id={props.name}
        value={props.value}
        disabled={props.disabled || false}
        autoFocus={props.autoFocus}
        onChange={(e) => props.onChange(e.target.value, props.name, props.validation)}
        onBlur={() => props.onBlur(props.value, props.error, props.name, props.validation)}
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
);

// Date Picker
const formInputDatePickerElement = (props, classes) => (
  <div key={props.index} className={`${classes.rootClass} ${props.error ? VALIDATION_FAILED : ''}`} style={makeHidden(props.hidden)}>
    <div className={classes.groupClass}>
      {props.label ? <label className={classes.labelClass}>{props.label}</label> : null}
      <input
        name={props.name}
        className={classes.fieldClass}
        placeholder={props.placeholder}
        type={'date'}
        value={props.value || ''}
        disabled={props.disabled || false}
        autoFocus={props.autoFocus}
        autocomplete={props.autocomplete}
        min={props.startDate || null}
        max={props.endDate || null}
        onChange={(e) => props.onChange(e.target.value, props.name, props.validation)}
        onBlur={() => props.onBlur(props.value, props.error, props.name, props.validation)}
      />
      <span className={classes.errorClass}>{props.error}</span>
    </div>
  </div>
);

// Switch
const formInputSwitchElement = (props, classes) => (
  <div key={props.index} className={`${classes.rootClass} ${props.error ? VALIDATION_FAILED : ''}`} style={makeHidden(props.hidden)}>
    <div className={classes.groupClass}>
      {props.label ? <label className={classes.labelClass}>{props.label}</label> : null}

      <label name={props.name} autoFocus={props.autoFocus} disabled={props.disabled || false} className={classes.fieldClass}>
        <input
          type="checkbox"
          checked={props.value}
          onChange={(e) => props.onChange(!!!props.value, props.name, props.validation)}
          onBlur={() => props.onBlur(!!!props.value, props.error, props.name, props.validation)}
        />
        <span className={Styles['rbc-form-input-switch-slider']}></span>
      </label>
      <span className={classes.errorClass}>{props.error}</span>
    </div>
  </div>
);

// Slider
const formInputSliderElement = (props, classes) => (
  <div key={props.index} className={`${classes.rootClass} ${props.error ? VALIDATION_FAILED : ''}`} style={makeHidden(props.hidden)}>
    <div className={classes.groupClass}>
      {props.label ? <label className={classes.labelClass}>{props.label}</label> : null}
      <input
        type="range"
        name={props.name}
        autoFocus={props.autoFocus}
        disabled={props.disabled || false}
        className={classes.fieldClass}
        min={props.minValue}
        max={props.maxValue}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value, props.name, props.validation)}
        onBlur={() => props.onBlur(props.value, props.error, props.name, props.validation)}
      />
      <span className={classes.errorClass}>{props.error}</span>
    </div>
  </div>
);

// INPUTS

//
// Props: index, name, className, label, placeholder, validation, onChange, onBlur, disabled, hidden, value, error, icon, autocomplete, autoFocus
const Text = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-text');

  return formInputTextElement(props, classes, 'text');
};

// Props: index, name, className, label, placeholder, validation, onChange, onBlur, disabled, hidden, value, error, icon, autocomplete, autoFocus
const Password = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-password');

  return formInputTextElement(props, classes, 'password');
};

// Props: index, name, className, label, placeholder, validation, onChange, onBlur, disabled, hidden, value, error, autocomplete, maxLength, stopResize, autoFocus
const TextArea = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-textarea');

  return formInputTextAreaElement(props, classes);
};

// Props: index, name, className, label, validation, onChange, onBlur, disabled, hidden, value, error, autocomplete, maxLength, options, autoFocus
const Radio = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-radio');

  return formInputRadioElement(props, classes, 'radio');
};

// Props: index, name, className, label, validation, onChange, onBlur, disabled, hidden, value, error, options, autoFocus
const CheckBox = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-checkbox');

  return formInputCheckboxElement(props, classes, 'checkbox');
};

// Props: index, name, className, label, validation, onChange, onBlur, disabled, hidden, value, error, options, autoFocus
const Select = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-select');

  return formInputSelectElement(props, classes);
};

// Props: index, name, className, label, validation, onChange, onBlur, disabled, hidden, value, error, autoFocus, startDate, endDate
const DatePicker = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-date-picker');

  return formInputDatePickerElement(props, classes);
};

// Props: index, name, className, label, validation, onChange, onBlur, disabled, hidden, value, error, autoFocus
const Switch = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-switch');

  return formInputSwitchElement(props, classes);
};

// Props: index, name, className, label, validation, onChange, onBlur, disabled, hidden, value, error, autoFocus, minValue, maxValue
const Slider = (props) => {
  const classes = getClasses(props.className, 'rbc-form-input-slider');

  return formInputSliderElement(props, classes);
};

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  formElementMap(props) {
    return {
      text: <Text {...props} />,
      password: <Password {...props} />,
      textarea: <TextArea {...props} />,
      radio: <Radio {...props} isForm={true} />,
      checkbox: <CheckBox {...props} isForm={true} />,
      select: <Select {...props} />,
      datepicker: <DatePicker {...props} />,
      switch: <Switch {...props} />,
      slider: <Slider {...props} />,
    };
  }

  handleChange(value, name, validations, type) {
    const { onChange } = this.props;

    let error = null;

    if (validations && validations.length) {
      for (let x = 0; x < validations.length; x++) {
        error = validations[x](value);
        if (error) break;
      }
    }

    this.setState({
      [name]: value,
      [Constants.GENERATE_ERROR_FIELD_KEY(name)]: error,
    });

    if (onChange && typeof onChange === 'function') onChange(name, Constants.GENERATE_ERROR_FIELD_KEY(name), value, error, type);
  }

  handleBlur(value, error, name, validation, type) {
    const { onBlur } = this.props;

    if (onBlur && typeof onBlur === 'function') onBlur(value, error, name, validation, type);
  }

  renderButtons = (buttons) =>
    buttons && buttons.length ? (
      <div className={buttons.className}>
        {buttons.map((element, index) => (
          <Button
            className={element.className}
            type={element.type}
            style={element.style}
            disabled={element.disabled}
            size={element.size}
            onClick={element.onClick}
          >
            {element.label}
          </Button>
        ))}
      </div>
    ) : null;

  render() {
    const { name, meta, buttons, className } = this.props;

    return (
      <div i={name} key={name} className={className}>
        {meta.map(
          (element, index) =>
            this.formElementMap({
              ...element,
              index,

              state: this.state,

              value: this.state[element.name],
              error: this.state[Constants.GENERATE_ERROR_FIELD_KEY(element.name)],

              onChange: (_value, _name, _validations) => this.handleChange(_value, _name, _validations, element.type),
              onBlur: (_value, _error, _name, _validation) => this.handleBlur(_value, _error, _name, _validation, element.type),
            })[element.type]
        )}
        {this.renderButtons(buttons)}
      </div>
    );
  }
}

Form.propTypes = {
  name: propTypes.string,
  meta: propTypes.array,
  buttons: propTypes.array,
  className: propTypes.string,
};

Form.defaultProps = {
  name: 'customFormComponent',
  meta: [],
  className: '',
};

export default Form;

Text.propTypes = {
  name: propTypes.string,
  className: propTypes.object,
  label: propTypes.string,
  placeholder: propTypes.string,
  validation: propTypes.array,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  disabled: propTypes.bool,
  hidden: propTypes.bool,
  value: propTypes.string,
  error: propTypes.string,
};

Text.defaultProps = {
  className: {},
  validation: [],
  onChange: () => null,
  onBlur: () => null,
};

Password.propTypes = {
  name: propTypes.string,
  className: propTypes.object,
  label: propTypes.string,
  placeholder: propTypes.string,
  validation: propTypes.array,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  disabled: propTypes.bool,
  hidden: propTypes.bool,
  value: propTypes.string,
  error: propTypes.string,
};

Password.defaultProps = {
  className: {},
  validation: [],
  onChange: () => null,
  onBlur: () => null,
};

TextArea.propTypes = {
  name: propTypes.string,
  className: propTypes.object,
  label: propTypes.string,
  placeholder: propTypes.string,
  validation: propTypes.array,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  disabled: propTypes.bool,
  hidden: propTypes.bool,
  value: propTypes.string,
  error: propTypes.string,
};

TextArea.defaultProps = {
  className: {},
  validation: [],
  onChange: () => null,
  onBlur: () => null,
};

Radio.prototype = {
  name: propTypes.string,
  className: propTypes.object,
  label: propTypes.string,
  validation: propTypes.array,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  disabled: propTypes.bool,
  hidden: propTypes.bool,
  value: propTypes.string,
  error: propTypes.string,
  options: propTypes.array,
};

Radio.defaultProps = {
  className: {},
  validation: [],
  onChange: () => null,
  onBlur: () => null,
  options: [],
};

CheckBox.prototype = {
  name: propTypes.string,
  className: propTypes.object,
  label: propTypes.string,
  validation: propTypes.array,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  disabled: propTypes.bool,
  hidden: propTypes.bool,
  value: propTypes.string,
  error: propTypes.string,
  options: propTypes.array,
};

CheckBox.defaultProps = {
  className: {},
  validation: [],
  onChange: () => null,
  onBlur: () => null,
  options: [],
};

Select.prototype = {
  name: propTypes.string,
  className: propTypes.object,
  label: propTypes.string,
  validation: propTypes.array,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  disabled: propTypes.bool,
  hidden: propTypes.bool,
  value: propTypes.string,
  error: propTypes.string,
  options: propTypes.array,
};

Select.defaultProps = {
  className: {},
  validation: [],
  onChange: () => null,
  onBlur: () => null,
  options: [],
};

DatePicker.prototype = {
  name: propTypes.string,
  className: propTypes.object,
  label: propTypes.string,
  validation: propTypes.array,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  disabled: propTypes.bool,
  hidden: propTypes.bool,
  value: propTypes.string,
  error: propTypes.string,
  startDate: propTypes.string,
  endDate: propTypes.string,
};

DatePicker.defaultProps = {
  className: {},
  validation: [],
  onChange: () => null,
  onBlur: () => null,
};

Switch.prototype = {
  name: propTypes.string,
  className: propTypes.object,
  label: propTypes.string,
  validation: propTypes.array,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  disabled: propTypes.bool,
  hidden: propTypes.bool,
  value: propTypes.string,
  error: propTypes.string,
};

Switch.defaultProps = {
  className: {},
  validation: [],
  onChange: () => null,
  onBlur: () => null,
};

Slider.prototype = {
  name: propTypes.string,
  className: propTypes.object,
  label: propTypes.string,
  validation: propTypes.array,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  disabled: propTypes.bool,
  hidden: propTypes.bool,
  value: propTypes.string,
  error: propTypes.string,
  minValue: propTypes.number,
  maxValue: propTypes.number,
};

Slider.defaultProps = {
  className: {},
  validation: [],
  onChange: () => null,
  onBlur: () => null,
};

export { Text, Password, TextArea, Radio, CheckBox, Select, DatePicker, Switch, Slider };
