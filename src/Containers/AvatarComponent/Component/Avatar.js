import React from 'react'
import propTypes from 'prop-types'

import Modal, {
  ModalHead,
  ModalBody,
  ModalFoot
} from '../../../Components/Modal'

import Constants from '../../../Blended/Constants'

import Styles from './Avatar.css'

const POSSIBLE_COLORS = [
  { background: '#62AB37', label: '#FFFFFF' },
  { background: '#ED217C', label: '#FFFFFF' },
  { background: '#1B998B', label: '#FFFFFF' },
  { background: '#2d3047', label: '#FFFFFF' },
  { background: '#95F9E3', label: '#000000' },
  { background: '#5F5566', label: '#FFFFFF' },
  { background: '#427AA1', label: '#FFFFFF' },
  { background: '#7871AA', label: '#FFFFFF' },
  { background: '#4E5283', label: '#FFFFFF' },
  { background: '#B9D6F2', label: '#000000' },
  { background: '#006DAA', label: '#FFFFFF' },
  { background: '#0353A4', label: '#FFFFFF' },
  { background: '#5F5AA2', label: '#FFFFFF' },
  { background: '#63A088', label: '#FFFFFF' },
  { background: '#56203D', label: '#FFFFFF' },
  { background: '#483A58', label: '#FFFFFF' },
  { background: '#2F6690', label: '#FFFFFF' },
  { background: '#FB5012', label: '#FFFFFF' }
]

class Avatar extends React.Component {
  render() {
    const { round, boarderRadius, name, src, size, className } = this.props

    const color =
      POSSIBLE_COLORS[Math.floor(Math.random() * POSSIBLE_COLORS.length)]

    const styles = {
      boarderRadius: round
        ? '100%'
        : boarderRadius
        ? `${boarderRadius}px`
        : '0px',
      height: size,
      width: size,
      backgroundColor: color.background,
      color: color.label
    }

    return src ? (
      <img
        className={className || Styles['rbc-avatar']}
        alt={name}
        style={styles}
      ></img>
    ) : (
      <span
        className={className || Styles['rbc-avatar']}
        alt={name}
        style={styles}
      >
        {Constants.GENERATE_INITIALS(name)}
      </span>
    )
  }
}

Avatar.propTypes = {
  round: propTypes.bool,
  boarderRadius: propTypes.number,
  name: propTypes.string.isRequired,
  src: propTypes.string,
  size: propTypes.number,
  className: propTypes.string
}

Avatar.defaultProps = {
  size: 50,
  round: true
}

export default Avatar
