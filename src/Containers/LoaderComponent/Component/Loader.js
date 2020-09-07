import React from 'react';
import propTypes, { element } from 'prop-types';

import Modal, { ModalHead, ModalBody, ModalFoot } from '../../../Components/Modal';

import Constants from '../../../Blended/Constants';

import Styles from './Loader.css';

import LoaderBars from './Assets/LoaderBars.css';
import LoaderDotSpin from './Assets/LoaderDotSpin.css';
import LoaderDotBounce from './Assets/LoaderDotBounce.css';
import LoaderDotCircle from './Assets/LoaderDotCircle.css';
import LoaderCircle from './Assets/LoaderCircle.css';

const TYPE_LOADERS = {
  BARS: 'BARS',
  CIRCLE: 'CIRCLE',
  'DOT-SPIN': 'DOT-SPIN',
  'DOT-BOUNCE': 'DOT-BOUNCE',
  'DOT-CIRCLE': 'DOT-CIRCLE',
};

const MAP_LOADERS = {
  [TYPE_LOADERS['BARS']]: () => <div className={LoaderBars['rbc-loader-bars']}></div>,
  [TYPE_LOADERS['CIRCLE']]: () => <div className={LoaderCircle['rbc-loader-circle']}></div>,
  [TYPE_LOADERS['DOT-SPIN']]: () => <div className={LoaderDotSpin['rbc-loader-dot-spin']}></div>,
  [TYPE_LOADERS['DOT-BOUNCE']]: () => <div className={LoaderDotBounce['rbc-loader-dot-bounce']}></div>,
  [TYPE_LOADERS['DOT-CIRCLE']]: () => <div className={LoaderDotCircle['rbc-loader-dot-circle']}></div>,
};

class Loader extends React.Component {
  renderHeader = ({ message, headerClass, headerStyle }) => {
    return message ? (
      <ModalHead className={`${headerClass || ''} ${Styles['rbc-loader-message']}`} style={headerStyle}>
        {message}
      </ModalHead>
    ) : null;
  };

  renderBody = ({ bodyClass, bodyStyle, type }) => {
    return (
      <ModalHead className={`${bodyClass || ''} ${Styles['rbc-loader-body']}`} style={bodyStyle}>
        {MAP_LOADERS[type]()}
      </ModalHead>
    );
  };

  render() {
    const { active, blockUI, type, message } = this.props;

    return (
      <Modal active={active} onClose={() => null} onHide={() => null} showClose>
        {this.renderHeader(this.props)}
        {this.renderBody(this.props)}
      </Modal>
    );
  }
}

Loader.propTypes = {
  active: propTypes.bool,
  blockUI: propTypes.bool,
  type: propTypes.oneOf(Object.keys(TYPE_LOADERS)),
  message: propTypes.oneOfType([propTypes.string, propTypes.element]),
  headerClass: propTypes.string,
  headerStyle: propTypes.object,
  bodyClass: propTypes.string,
  bodyStyle: propTypes.object,
};

Loader.defaultProps = {
  active: false,
  blockUI: true,
  type: TYPE_LOADERS["DOT-SPIN"]
};

export default Loader;
