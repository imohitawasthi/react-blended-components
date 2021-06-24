import React from 'react';
import propTypes from 'prop-types';

import Modal, { ModalHead, ModalBody, ModalFoot } from '../../../Components/Modal';

import Constants from '../../../Blended/Constants';

import Styles from './Avatar.css';

// const POSSIBLE_COLORS = [
//   { background: '#62AB37', label: '#FFFFFF' },
//   { background: '#ED217C', label: '#FFFFFF' },
//   { background: '#1B998B', label: '#FFFFFF' },
//   { background: '#2d3047', label: '#FFFFFF' },
//   { background: '#95F9E3', label: '#000000' },
//   { background: '#5F5566', label: '#FFFFFF' },
//   { background: '#427AA1', label: '#FFFFFF' },
//   { background: '#7871AA', label: '#FFFFFF' },
//   { background: '#4E5283', label: '#FFFFFF' },
//   { background: '#B9D6F2', label: '#000000' },
//   { background: '#006DAA', label: '#FFFFFF' },
//   { background: '#0353A4', label: '#FFFFFF' },
//   { background: '#5F5AA2', label: '#FFFFFF' },
//   { background: '#63A088', label: '#FFFFFF' },
//   { background: '#56203D', label: '#FFFFFF' },
//   { background: '#483A58', label: '#FFFFFF' },
//   { background: '#2F6690', label: '#FFFFFF' },
//   { background: '#FB5012', label: '#FFFFFF' },
// ];

const COLOR_LABEL_BLACK = "#000000"
const COLOR_LABEL_WHITE = "#FFFFFF"

const POSSIBLE_COLORS = {
  A: { background: '#ffbf00', label: COLOR_LABEL_BLACK },
  B: { background: '#873260', label: COLOR_LABEL_WHITE },
  C: { background: '#36454f', label: COLOR_LABEL_WHITE },
  D: { background: '#013220', label: COLOR_LABEL_WHITE },
  E: { background: '#50c878', label: COLOR_LABEL_WHITE },
  F: { background: '#fffaf0', label: COLOR_LABEL_BLACK },
  G: { background: '#808080', label: COLOR_LABEL_WHITE },
  H: { background: '#f0fff0', label: COLOR_LABEL_BLACK },
  I: { background: '#4b0082', label: COLOR_LABEL_WHITE },
  J: { background: '#00a86b', label: COLOR_LABEL_WHITE },
  K: { background: '#e8000d', label: COLOR_LABEL_WHITE },
  L: { background: '#e6e6fa', label: COLOR_LABEL_WHITE },
  M: { background: '#18453b', label: COLOR_LABEL_WHITE },
  N: { background: '#a4dded', label: COLOR_LABEL_BLACK },
  O: { background: '#9ab973', label: COLOR_LABEL_WHITE },
  P: { background: '#bcd4e6', label: COLOR_LABEL_WHITE },
  Q: { background: '#dda0dd', label: COLOR_LABEL_BLACK },
  R: { background: '#a52a2a', label: COLOR_LABEL_WHITE },
  S: { background: '#ff8c69', label: COLOR_LABEL_BLACK },
  T: { background: '#d0f0c0', label: COLOR_LABEL_BLACK },
  U: { background: '#635147', label: COLOR_LABEL_WHITE },
  V: { background: '#f3e5ab', label: COLOR_LABEL_BLACK },
  W: { background: '#a2add0', label: COLOR_LABEL_BLACK },
  X: { background: '#738678', label: COLOR_LABEL_WHITE },
  Y: { background: '#ffae42', label: COLOR_LABEL_BLACK },
  Z: { background: '#2c1608', label: COLOR_LABEL_WHITE },
}

class Avatar extends React.Component {
  render() {
    const { round, borderRadius, name, src, size, fontSize, className } = this.props;

    // const color = POSSIBLE_COLORS[Math.floor(Math.random() * POSSIBLE_COLORS.length)];
    const avatarName = Constants.GENERATE_INITIALS(name)
    const color = POSSIBLE_COLORS[avatarName[0].toUpperCase()]

    const styles = {
      borderRadius: round ? '100%' : borderRadius ? `${borderRadius}px` : '0px',
      height: size,
      width: size,
      fontSize: fontSize,
      backgroundColor: color.background,
      color: color.label,
    };

    return src ? (
      <img className={`${className} ${Styles['rbc-avatar'] || ''}`} alt={name} style={styles} src={src}></img>
    ) : (
      <div className={`${className} ${Styles['rbc-avatar'] || ''}`} alt={name} style={styles}>
        <span className={Styles['rbc-avatar-content']}>{avatarName}</span>
      </div>
    );
  }
}

Avatar.propTypes = {
  round: propTypes.bool,
  boarderRadius: propTypes.number,
  name: propTypes.string.isRequired,
  src: propTypes.string,
  size: propTypes.number,
  fontSize: propTypes.number,
  className: propTypes.string,
};

Avatar.defaultProps = {
  size: 50,
  fontSize: 14,
  round: true,
};

export default Avatar;
