import React from 'react'
import propTypes from 'prop-types'

import Styles from './index.css'

const Modal = ({ children, active }) => {

  let style = {
    display: active ? 'block' : 'none'
  }

  return (
    <div id='rbc-modal' className={Styles['rbc-modal']} style={style || {}}>
      <div className={Styles['rbc-modal-content']}>{children}</div>
    </div>
  )
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

Modal.propTypes = {}
ModalHead.prototype = {}
ModalBody.prototype = {}
ModalFoot.prototype = {}

Modal.defaultProps = {}
ModalHead.defaultProps = {}
ModalBody.defaultProps = {}
ModalFoot.defaultProps = {}

export default Modal
