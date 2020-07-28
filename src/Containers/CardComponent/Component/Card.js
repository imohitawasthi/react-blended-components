import React from 'react'
import propTypes from 'prop-types'

import Constants from '../../../Blended/Constants'

import Styles from './Card.css'

class Card extends React.Component {
  render() {
    const { rootClass, rootStyles, headClass, headStyles, footClass, footStyles, childClass, childStyle, header, footer, children } = this.props

    const classes = {
      root: ` ${Styles['rbc-card']} ${rootClass || ''} `,
      header: ` ${Styles['rbc-card-head']} ${headClass || ''} `,
      child: ` ${Styles['rbc-card-child']} ${childClass || ''} `,
      footer: ` ${Styles['rbc-card-foot']} ${footClass || ''} `,
    }

    return (
      <div className={classes.root} style={rootStyles}>
        {
          header ?
          <div className={classes.header} style={headStyles}>
            {header}
          </div> : null
        }
        <div className={classes.child} style={childStyle}>
          {children}
        </div>
        {
          footer ? 
          <div className={classes.footer} style={footStyles}>
            {footer}
          </div> : null
        }
      </div>
    )
  }
}

Card.propTypes = { 
  rootClass: propTypes.string, 
  styles: propTypes.object, 
  headClass: propTypes.string, 
  headStyles: propTypes.object, 
  footClass: propTypes.string, 
  footStyles: propTypes.object, 
  childClass: propTypes.string, 
  childStyle: propTypes.object, 
  header: propTypes.oneOfType([propTypes.string, propTypes.element]), 
  footer: propTypes.oneOfType([propTypes.string, propTypes.element]), 
  children: propTypes.oneOfType([propTypes.string, propTypes.element]).isRequired
}

Card.defaultProps = {
  rootClass: '', 
  styles: {}, 
  headClass: '', 
  headStyles: {}, 
  footClass: '', 
  footStyles: {}, 
  childClass: '', 
  childStyle: {}, 
  header: '', 
  footer: '', 
  children: propTypes.oneOfType([propTypes.string, propTypes.element]).isRequired
 }

export default Card
