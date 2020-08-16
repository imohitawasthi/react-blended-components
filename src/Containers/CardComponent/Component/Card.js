import React from 'react'
import propTypes from 'prop-types'

import Constants from '../../../Blended/Constants'

import Styles from './Card.css'

class Card extends React.Component {
  render() {
    const { rootClass, rootStyles, headClass, headStyles, footClass, footStyles, childClass, childStyle, header, footer, children, center, width, height } = this.props

    let rootStyle = { ...rootStyles, justifyContent: center ? 'center' : null, width: width, height: height }

    const classes = {
      root: ` ${rootClass || Styles['rbc-card']} `,
      header: ` ${headClass || Styles['rbc-card-head']} `,
      child: ` ${childClass || Styles['rbc-card-child']} `,
      footer: ` ${footClass || Styles['rbc-card-foot']} `,
    }

    return (
      <div className={classes.root} style={rootStyle}>
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
  rootStyles: propTypes.object, 
  headClass: propTypes.string, 
  headStyles: propTypes.object, 
  footClass: propTypes.string, 
  footStyles: propTypes.object, 
  childClass: propTypes.string, 
  childStyle: propTypes.object, 
  header: propTypes.oneOfType([propTypes.string, propTypes.element]), 
  footer: propTypes.oneOfType([propTypes.string, propTypes.element]), 
  children: propTypes.oneOfType([propTypes.string, propTypes.element]).isRequired,
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  height: propTypes.oneOfType([propTypes.string, propTypes.number]),
}

Card.defaultProps = {
  rootClass: '', 
  rootStyles: {}, 
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
