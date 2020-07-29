import React, { createRef } from 'react'
import propTypes from 'prop-types'

import Styles from './index.css'

// const MODAL_SIZE = {
//   NORMAL: '60%'
// }

class Modal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.refModal = React.createRef()
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickOutside(event) {
    const { onHide } = this.props
    if (
      this.refModal &&
      !this.refModal.current.contains(event.target) &&
      onHide
    ) {
      onHide()
    }
  }

  render() {
    const { children, active, onClose, showClose, bsSize } = this.props

    let style = {
      display: active ? 'block' : 'none'
    }

    return (
      <div id='rbc-modal' className={Styles['rbc-modal']} style={style || {}}>
        <div className={Styles['rbc-modal-content']} ref={this.refModal}>
          {showClose ? (
            <span
              className={Styles['rbc-modal-close']}
              onClick={() => onClose()}
            >
              &times;
            </span>
          ) : null}
          {children}
        </div>
      </div>
    )
  }
}

export const ModalHead = ({ className, style, children }) => {
  return (
    <div
      className={`${Styles['rbc-modal-header']} ${className || ''}`}
      style={style || {}}
    >
      {children}
    </div>
  )
}

export const ModalBody = ({ className, style, children }) => {
  return (
    <div
      className={`${Styles['rbc-modal-body']} ${className || ''}`}
      style={style || {}}
    >
      {children}
    </div>
  )
}

export const ModalFoot = ({ className, style, children }) => {
  return (
    <div
      className={`${Styles['rbc-modal-footer']} ${className || ''}`}
      style={style || {}}
    >
      {children}
    </div>
  )
}

Modal.propTypes = {
  children: propTypes.element, 
  active: propTypes.bool.isRequired, 
  onClose: propTypes.func.isRequired, 
  onHide: propTypes.func.isRequired,
  showClose: propTypes.bool
}
ModalHead.prototype = {
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.oneOfType([propTypes.string, propTypes.element])
}
ModalBody.prototype = {
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.oneOfType([propTypes.string, propTypes.element])
}
ModalFoot.prototype = {
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.oneOfType([propTypes.string, propTypes.element])
}

Modal.defaultProps = {}
ModalHead.defaultProps = {}
ModalBody.defaultProps = {}
ModalFoot.defaultProps = {}

export default Modal
