import React from 'react';
import propTypes from 'prop-types';

import Constants from '../../../Blended/Constants';

import Styles from './Card.css';

class Card extends React.Component {
  render() {
    const {
      classNames,
      styles,
      header,
      footer,
      children,
      align,
      width,
      height,
    } = this.props;

    const classes = {
      root: ` ${Styles['rbc-card']} ${classNames.rootClass || ''} `,
      header: `${Styles['rbc-card-head']}  ${classNames.headClass || ''} `,
      child: ` ${Styles['rbc-card-child']} ${classNames.childClass || ''} `,
      footer: ` ${Styles['rbc-card-foot']} ${classNames.footClass || ''} `,
    };

    const style = {
      root: styles.rootStyle || {},
      header: styles.headStyle || {},
      child: styles.childStyle || {},
      footer: styles.footStyle || {},
    }

    const rootStyle = {
      ...style.root,
      float: align === 'CENTER' ? '' : align === 'LEFT' ? 'left' : align === 'RIGHT' ? 'right' : null,
      width: width,
      height: height,
    };

    return (
      <div className={classes.root} style={rootStyle}>
        {header ? (
          <div className={classes.header} style={style.header}>
            {header}
          </div>
        ) : null}
        <div className={classes.child} style={style.child}>
          {children}
        </div>
        {footer ? (
          <div className={classes.footer} style={style.footer}>
            {footer}
          </div>
        ) : null}
      </div>
    );
  }
}

Card.propTypes = {
  classNames: propTypes.string,
  styles: propTypes.object,
  header: propTypes.oneOfType([propTypes.string, propTypes.element]),
  footer: propTypes.oneOfType([propTypes.string, propTypes.element]),
  children: propTypes.oneOfType([propTypes.string, propTypes.element]).isRequired,
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  height: propTypes.oneOfType([propTypes.string, propTypes.number]),
  align: propTypes.oneOf(['LEFT', 'RIGHT', 'CENTER']),
};

Card.defaultProps = {
  classNames: {},
  styles: {},
  header: '',
  footer: '',
};

export default Card;
