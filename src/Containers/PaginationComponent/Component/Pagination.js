import React from 'react';
import propTypes, { element } from 'prop-types';

import Constants from '../../../Blended/Constants';

import Styles from './Pagination.css';

const iconBack =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACN0lEQVR4nO3dP49MUQCG8YcpNrazFqUodSpZtagVJNS0vsXWIj6BaMQWZEm0vgGVRvypya7VUQijmN1kmpWdc677HmeeX3Iy1Z15c+7NO3funDsDkiRJkiRJ0v9rA3gEfAJ+7D9uA1eToZbBBLgP/Aamh4wtYDUVsHcPOHzi58dL4FgoY7euc7TJPxh3MjH7tA58ZrEd8CaStFNPWGzyD8aZRNjeLFo98+NiIG9XSqpnfpwbP3JfSqtnCnzFM6Eq1yif/CmwOX7kfqwDXyif/J3951ChLeqO/pvjR+5HbfVsjx+5H7VnPbvA2dFTd8TqCbJ6gqyeMKsnyOoJsnrCrJ4gqyfI6gmzeoKsniCrJ6zmGy6rp5LVE2T1hFk9QVZP0Bp11bOD1VPlHnVH/63xI/djBfhG+eQ/HT9yXzawegA4Hnrd8xXb3mW2MKsLqR0wrdjWNZ0DsILCVoA9fBNmEnrdX8zuULlcuP0F4B3wdrBES2iN+lXOVlGl2ksRz8eP3J/ai3F+Iq50Ci9Hx1lFDbCKwqyiBlhFDbCKwvySvgFWUQOsojCrqAFWUQOsojCrqAFWUQOsojCrqAFWUQOsorCufrIstSylxnfgPeVH8irwE3g1WKIlVXM/8R4ucazWxQ+3phbnDmGX2UrpUieHCrLsSqvodCJsj0qq6HUkacdusNgOuJ2J2bej/oXJCzwD+icmzO68/Nuf+DwGTqQCLotLwEPgA7MPbR+BZ8CVZChJkiRJkiTpDzAY61DyTo/xAAAAAElFTkSuQmCC';
const iconForward =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACQklEQVR4nO3dsWoUURhA4bMqioogmpg2tnY2amWltY1JL2KT10gZBDEPIFbRCCIIFj6EVmKjYqlZYmm6bIoxYLNh997h/nfvnA+GVEN+7mxOJrOzE5AkSZIkSZLqMQLuA++AH8DBv68vgTuBcw3CBWAXmEzZDoFnwOmoAVs2Aj4wffH/37aDZmzaY2Zb/ONtPWbMdn1mvgMwBlZCJm3QNeZb/OPtTcSwLbpJ2gEwRT1ZJf0AmKIejIB90g/CwqSo5vPnS8DdxH1vAF+BL/2NMzxXgD3Sfwr2gOXiUzfmAekHYEJ3+UKZTroUMcu2Vn7ktiwBv/CsKJQpqoApCmaKKmCKKmCKgpmiCpiiCpiiYKaoAqaoAqYomCmqgCmqgCkKZooqYIoqYIqCLZP/Zv7VUsPWfFtKqr/AT9JfyReBM8DHvgYaqpwU/QHOlR+5Lbkpul1iyFMlvkmQMfAkY//rfQ1ykpYPAORlZNLbFAO1EAlqWc4v4X3gbPmR27FG3h9jW+VHbkduen7T3ZmtRLmXIh6WH7kd6+Qt/qvyI7djiS4fqYs/pvt0phKZnkCmJ5DpCWZ6AuWm53X5kdtheoKZnkCmJ5DpCWZ6ApmeQKYnmOkJZHoCmZ5gpieQ6QnkI8uCbZL36vc+/wy5j63cLT9yW1YZyFlPrTfnXs7Yd4Ou/8qQ+vBu09OjTzScnkXwCM96Qo2A98y2+M+DZmzeeWCH6Qt/CDylzU97VuUe8Bb4TvdvrL4BL4BbkUNJkiRJkiRJ8zgCuG7pTBw4tNcAAAAASUVORK5CYII=';

const TYPE_PAGINATION_COMPONENT = {
  BASIC: 'BASIC',
  NAVIGATION_BUTTONS: 'ONLY-NAVIGATION',
  PAGES: 'PAGES',
  BUTTON: 'BUTTON',
  CURRENT_PAGE: 'CURRENT_PAGE'
}

class Pagination extends React.Component {
  render() {
    const { rootClassName, contentClassName, icons, element, limit, offset, total, onPageChange } = this.props;

    const disableBack = offset - limit > 0 ? false : true;
    const disableForward = offset + limit < total ? false : true;

    return (
      <div className={`${Styles['rbc-pagination']} ${rootClassName || ''}`}>
        <div className={`${Styles['rbc-pagination-content']} ${contentClassName || ''}`}>
          <div className={`${Styles['rbc-pagination-icon-back']} ${disableBack ? Styles['rbc-pagination-icon-back-disabled'] : ''}`}>
            {icons && icons.back ? icons.back : <img className={Styles['rbc-pagination-icon-back-icon']} src={iconBack} onClick={() => onPageChange('back')} />}
          </div>
          {element ? (
            element
          ) : (
            <div className={Styles['rbc-pagination-icon-element']}>{`${(offset || 0) + 1} - ${(offset || 0) + (limit || 0) || 0} of ${total}`}</div>
          )}
          <div className={`${Styles['rbc-pagination-icon-forward']} ${disableForward ? Styles['rbc-pagination-icon-forward-disabled'] : ''}`}>
            {icons && icons.forward ? (
              icons.forward
            ) : (
              <img className={Styles['rbc-pagination-icon-forward-icon']} src={iconForward} onClick={() => onPageChange('forward')} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

Pagination.propTypes = {
  // type:
  rootClassName: propTypes.string,
  contentClassName: propTypes.string,
  icons: propTypes.object,
  element: propTypes.element,
  limit: propTypes.number.isRequired,
  offset: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
};

Pagination.defaultProps = {};

export default Pagination;
