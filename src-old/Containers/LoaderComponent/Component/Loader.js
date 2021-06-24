import React from 'react';
import propTypes, { element } from 'prop-types';

import Modal, { ModalHead, ModalBody, ModalFoot } from '../../../Components/Modal';

import Constants from '../../../Blended/Constants';

import Styles from './Loader.css';

import LoaderBars from './Assets/LoaderBars.css';
import LoaderDots from './Assets/LoaderDots.css';
import LoaderSpinner from './Assets/LoaderSpinner.css';
import LoaderCircle from './Assets/LoaderCircle.css';

const TYPE_LOADERS = {
  BARS: 'BARS',
  CIRCLE: 'CIRCLE',
  DOTS: 'DOTS',
  SPINNER: 'SPINNER',
  'DOT-CIRCLE': 'DOT-CIRCLE',
};

function getEmptyDiv(n) {
  let arr = []
  
  for( let i=0; i<n; i++ ) {
    arr.push(<div></div>)
  }

  return arr
}

const MAP_LOADERS = {
  [TYPE_LOADERS['BARS']]: () => <div className={LoaderBars['rbc-loader-bars']}>{getEmptyDiv(3)}</div>,
  [TYPE_LOADERS['CIRCLE']]: () => <div className={LoaderCircle['rbc-loader-circle']}>{getEmptyDiv(8)}</div>,
  [TYPE_LOADERS['DOTS']]: () => <div className={LoaderDots['rbc-loader-dots']}>{getEmptyDiv(12)}</div>,
  [TYPE_LOADERS['SPINNER']]: () => <div className={LoaderSpinner['rbc-loader-spinner']}>{getEmptyDiv(12)}</div>,
};

class Loader extends React.Component {
  renderHeader = ({ message, headerClass, headerStyle }) => {
    return message ? (
      <ModalHead className={`${Styles['rbc-loader-message']} ${headerClass || ''} `} style={headerStyle || {}}>
        {message}
      </ModalHead>
    ) : null;
  };

  renderBody = ({ bodyClass, bodyStyle, type }) => {
    return (
      <ModalBody className={`${Styles['rbc-loader-body']} ${bodyClass || ''} `} style={bodyStyle || {}}>
        {MAP_LOADERS[type]()}
      </ModalBody>
    );
  };

  render() {
    const { active, blockUI } = this.props;

    return blockUI ? (
      <Modal active={active} onClose={() => null} onHide={() => null} hideClose size="25%">
        {this.renderHeader(this.props)}
        {this.renderBody(this.props)}
      </Modal>
    ) : (
      <div className={Styles['rbc-loader-non-block-ui']}>
        {this.renderHeader(this.props)}
        {this.renderBody(this.props)}
      </div>
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
  type: TYPE_LOADERS['BARS'],
  message: 'Please wait',
};

export default Loader;
