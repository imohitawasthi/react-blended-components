import React from 'react'
import propTypes, { element } from 'prop-types'

import Constants from '../../../Blended/Constants'

import Styles from './Carousel.css'

class Carousel extends React.Component {

  constructor(props) {
    super(props) 

    this.state = {
      currentIndexElement: 0
    }
  }

  Item = ({children}) => (children)

  render() {
    const { 
      rootClassName,
      contentClassName,
      children,
      changeAnimations,

    } = this.props

    return (
      <div className={`${Styles['rbc-carousel']} ${rootClassName || ''}`}>
        {children}
      </div>
    )
  }
}

Carousel.propTypes = {
  
}

Carousel.defaultProps = {}

export default Carousel
