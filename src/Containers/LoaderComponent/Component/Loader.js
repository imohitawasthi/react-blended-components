import React from 'react'
import propTypes, { element } from 'prop-types'

import Modal, { ModalHead, ModalBody, ModalFoot } from '../../../Components/Modal'

import Constants from '../../../Blended/Constants'

import Styles from './Loader.css'

import LoaderBars from './Assets/LoaderBars.css'
import LoaderDotSpin from './Assets/LoaderDotSpin.css'
import LoaderDotBounce from './Assets/LoaderDotBounce.css'
import LoaderDotCircle from './Assets/LoaderDotCircle.css'
import LoaderCircle from './Assets/LoaderCircle.css'

const TYPE_LOADERS = {
  'BARS': () => (<div className={LoaderBars['rbc-loader-bars']}></div>),
  'CIRCLE': () => (<div className={LoaderCircle['rbc-loader-circle']}></div>),
  'DOT_SPIN': () => (<div className={LoaderDotSpin['rbc-loader-dot-spin']}></div>),
  'DOT_BOUNCE': () => (<div className={LoaderDotBounce['rbc-loader-dot-bounce']}></div>),
  'DOT_CIRCLE': () => (<div className={LoaderDotCircle['rbc-loader-dot-circle']}></div>),
}


class Loader extends React.Component {


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
      <ModalHead
        className={bodyClass}
        style={bodyStyle}
      >
        {TYPE_LOADERS['DOT_BOUNCE']()}
      </ModalHead>
    )
  }

  render() {
    const { 
      active,
      blockUI,
      type
    } = this.props

    return (
      
      <Modal
        active={active}
        onClose={()=>console.log("Made Closed")}
        onHide={()=>console.log("Made Hidden")}
        showClose
      >
        {this.renderHeader(this.props)}
        {this.renderBody(this.props)}
      </Modal>
    )
  }
}

Loader.propTypes = { }

Loader.defaultProps = { }

export default Loader
