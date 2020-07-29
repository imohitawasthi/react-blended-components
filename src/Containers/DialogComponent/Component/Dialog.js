import React from 'react'
import propTypes from 'prop-types'

import Modal, { ModalHead, ModalBody, ModalFoot } from '../../../Components/Modal'

import Constants from '../../../Blended/Constants'

import Styles from './Dialog.css'

class Dialog extends React.Component {


  renderHeader = ({header, headerClass, headerStyle}) => {
    
    return (
      header ?
        <ModalHead
          className={headerClass}
          style={headerStyle}
        >
          {header}
        </ModalHead>
        : null
    )
  }

  renderBody = ({body, bodyClass, bodyStyle}) => {
    
    return (
      body ?
        <ModalHead
          className={bodyClass}
          style={bodyStyle}
        >
          {body}
        </ModalHead>
        : null
    )
  }

  renderFooter = ({footer, footerClass, footerStyle}) => {
    
    return (
      footer ?
        <ModalHead
          className={footerClass}
          style={footerStyle}
        >
          {footer}
        </ModalHead>
        : null
    )
  }

  render() {
    const { 
      active,
      form,
      buttons
    } = this.props

    return (
      <Modal
        active={active}
        onClose={()=>console.log("Made Closed")}
        onHide={()=>console.log("Made Hidden")}
        showClose
      >
        {this.renderHeader(this.props)}
        {/* {form ? this.renderBody(this.props) : null} */}
        {this.renderBody(this.props)}
        {/* {buttons ? this.renderFooter(this.props) : null} */}
        {this.renderFooter(this.props)}
      </Modal>
    )
  }
}

Dialog.propTypes = { }

Dialog.defaultProps = { }

export default Dialog
