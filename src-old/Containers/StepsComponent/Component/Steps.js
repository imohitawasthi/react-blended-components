import React from 'react'
import propTypes from 'prop-types'

import Constants from '../../../Blended/Constants'

import Styles from './Steps.css'

class Steps extends React.Component {
  render() {
    const {
      steps,
      className
    } = this.props

    return (
      <div className={`${Styles['rbc-steps']} ${className || ''}`}>
        <div class={`${Styles['rbc-step-bar']}`}></div>

        {
          steps.map((step, index) => {

            const classNames = step.classNames || {}

            const classMap = {
              circle: classNames.circle,
              step: classNames.step
            }

            return(
              <div key={index} className={`${Styles['rbc-step']}`}>
                  {/* <div className={`${Styles['rbc-step-circle']} ${classMap.circle || ''}`}>
                    <div className={`${Styles['rbc-step-counter']} ${classMap.step || ''}`}>
                      {step.step}
                    </div>
                  </div> */}
                  {step.step}
                </div>
            )
          })
        }
      </div>
    )
  }
}

Steps.propTypes = {}

Steps.defaultProps = {
  steps: []
}

export default Steps
