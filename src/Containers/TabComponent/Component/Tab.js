import React from 'react'
import propTypes, { element } from 'prop-types'

import Constants from '../../../Blended/Constants'

import Button from '../../ButtonComponent'

import Styles from './Tab.css'

class Tab extends React.Component {

  render() {
    const {
      className,
      tabs
    } = this.props

    return (
      <div className={`${Styles['rbc-tab']} ${className || ''}`}>
        {
          tabs.map((element, index) => (
            <Button 
              id={index}
              type="BASIC"
              size="LARGE"
              className={`${Styles['rbc-carousel-element']} ${element.className || ''}`}
              style={element.style}
              disable={element.disable || false}
              onClick={element.onClick}
            > 
              {element.label}
            </Button>
          ))
        }
      </div>
    )
  }
}

Tab.propTypes = {
  
}

Tab.defaultProps = {}

export default Tab
