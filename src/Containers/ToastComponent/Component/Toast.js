import React, { createRef } from 'react'
import propTypes, { element } from 'prop-types'

import Constants from '../../../Blended/Constants'

import Styles from './Toast.css'

class Toast extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.refToast = createRef()
    this.refToastContent = createRef()

  }

  show() {
    setTimeout(() => {
      this.refToast.current.className = `${this.refToast.current.className} ${Styles['rbc-toast-visible']}`
    }, 5000)
  }

  render() {
    const {} = this.props

    return (
      <div className={Styles['rbc-toast']} ref={this.refToast}>
        <div id='desc' ref={this.refToastContent}></div>
      </div>
    )
  }
}

Toast.propTypes = {}

Toast.defaultProps = {}

export default Toast
