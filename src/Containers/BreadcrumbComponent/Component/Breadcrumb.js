import React from 'react';
import propTypes, { element } from 'prop-types';

import Constants from '../../../Blended/Constants';

import Styles from './Breadcrumb.css';

const iconForward =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACQklEQVR4nO3dsWoUURhA4bMqioogmpg2tnY2amWltY1JL2KT10gZBDEPIFbRCCIIFj6EVmKjYqlZYmm6bIoxYLNh997h/nfvnA+GVEN+7mxOJrOzE5AkSZIkSZLqMQLuA++AH8DBv68vgTuBcw3CBWAXmEzZDoFnwOmoAVs2Aj4wffH/37aDZmzaY2Zb/ONtPWbMdn1mvgMwBlZCJm3QNeZb/OPtTcSwLbpJ2gEwRT1ZJf0AmKIejIB90g/CwqSo5vPnS8DdxH1vAF+BL/2NMzxXgD3Sfwr2gOXiUzfmAekHYEJ3+UKZTroUMcu2Vn7ktiwBv/CsKJQpqoApCmaKKmCKKmCKgpmiCpiiCpiiYKaoAqaoAqYomCmqgCmqgCkKZooqYIoqYIqCLZP/Zv7VUsPWfFtKqr/AT9JfyReBM8DHvgYaqpwU/QHOlR+5Lbkpul1iyFMlvkmQMfAkY//rfQ1ykpYPAORlZNLbFAO1EAlqWc4v4X3gbPmR27FG3h9jW+VHbkduen7T3ZmtRLmXIh6WH7kd6+Qt/qvyI7djiS4fqYs/pvt0phKZnkCmJ5DpCWZ6AuWm53X5kdtheoKZnkCmJ5DpCWZ6ApmeQKYnmOkJZHoCmZ5gpieQ6QnkI8uCbZL36vc+/wy5j63cLT9yW1YZyFlPrTfnXs7Yd4Ou/8qQ+vBu09OjTzScnkXwCM96Qo2A98y2+M+DZmzeeWCH6Qt/CDylzU97VuUe8Bb4TvdvrL4BL4BbkUNJkiRJkiRJ8zgCuG7pTBw4tNcAAAAASUVORK5CYII=';

class Breadcrumb extends React.Component {
  render() {
    const { elements, separator } = this.props;

    return (
      <div className={Styles['rbc-breadcrumb']}>
        {elements.map((element, index) => (
          <div key={index} className={`${Styles['rbc-breadcrumb-element']} ${element.className || ''}`} onClick={element.onClick}>
            {/* {index < elements.length - 1 ? ( */}
              <div>
                <span>{element.label}</span>
                <span>{separator || <img className={Styles['rbc-breadcrumb-icon-forward-icon']} src={iconForward} />}</span>
              </div>
            {/* ) : ( */}
              {/* <div>{element.label}</div> */}
            {/* )} */}
          </div>
        ))}
      </div>
    );
  }
}

Breadcrumb.propTypes = {
  elements: propTypes.array.isRequired,
};

Breadcrumb.defaultProps = {
  elements: [],
};

export default Breadcrumb;
