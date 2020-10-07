import React, { createRef } from 'react'
import propTypes, { element } from 'prop-types'

import Constants from '../../../Blended/Constants'

import Styles from './Toast.css'

class Toast extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showToast: false
    }

    this.refToast = createRef()
    this.refToastContent = createRef()

  }

  componentDidUpdate(oldProps, oldState) {
    if(this.props.show && !this.state.showToast) {
      if ( this.refToast.current && this.refToast.current.className ) {
        this.refToast.current.className = `${Styles['rbc-toast']} ${Styles['rbc-toast-visible']}`
        this.setState({ showToast: true }, () => this.show())
      }
    }
  }

  show() {
    if ( this.refToast.current && this.refToast.current.className ) {
      setTimeout(() => {
        this.refToast.current.className = `${Styles['rbc-toast']}`
        this.setState({showToast: false})
      }, this.props.duration)
    }
  }

  render() {
    const {
      show,
      duration
    } = this.props

    // if (show) {
    //   this.show()
    // }

    return (
      <div className={`${Styles['rbc-toast']}`} ref={this.refToast}>
        <div id='desc' ref={this.refToastContent}></div>
      </div>
    )
  }
}

Toast.propTypes = {
  show: propTypes.bool.isRequired,
  duration: propTypes.number
}

Toast.defaultProps = {
  duration: 5000
}

export default Toast
