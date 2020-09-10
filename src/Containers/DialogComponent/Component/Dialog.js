import React from 'react';
import propTypes from 'prop-types';

import Modal, { ModalHead, ModalBody, ModalFoot } from '../../../Components/Modal';

import Constants from '../../../Blended/Constants';

import Styles from './Dialog.css';

class Dialog extends React.Component {
  renderHeader = ({ header, headerClass, headerStyle }) => {
    return header ? (
      <ModalHead className={headerClass} style={headerStyle}>
        {header}
      </ModalHead>
    ) : null;
  };

  renderBody = ({ body, bodyClass, bodyStyle }) => {
    return body ? (
      <ModalHead className={bodyClass} style={bodyStyle}>
        {body}
      </ModalHead>
    ) : null;
  };

  renderFooter = ({ footer, footerClass, footerStyle }) => {
    return footer ? (
      <ModalHead className={footerClass} style={footerStyle}>
        {footer}
      </ModalHead>
    ) : null;
  };

  render() {
    const { active, onClose, onHide, form, size, background, hideClose } = this.props;

    return (
      <Modal active={active} onClose={onClose} onHide={onHide} hideClose={hideClose} size={size} background={background}>
        <div>
          {this.renderHeader(this.props)}
          {/* {form ? this.renderBody(this.props) : null} */}
          {this.renderBody(this.props)}
          {/* {buttons ? this.renderFooter(this.props) : null} */}
          {this.renderFooter(this.props)}
        </div>
      </Modal>
    );
  }
}

Dialog.propTypes = {
  active: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
  onHide: propTypes.func.isRequired,
  form: propTypes.object,
  size: propTypes.oneOf(['NORMAL', 'SMALL', 'LARGE', 'EXTRA-LARGE']),
  background: propTypes.string,
  hideClose: propTypes.bool,
  header: propTypes.oneOfType([propTypes.string, propTypes.element]),
  headerClass: propTypes.string,
  headerStyle: propTypes.object,
  body: propTypes.oneOfType([propTypes.string, propTypes.element]),
  bodyClass: propTypes.string,
  bodyStyle: propTypes.object,
  footer: propTypes.oneOfType([propTypes.string, propTypes.element]),
  footerClass: propTypes.string,
  footerStyle: propTypes.object,
};

Dialog.defaultProps = {
  size: 'NORMAL',
};

export default Dialog;
