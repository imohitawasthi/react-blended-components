import React from 'react';
import propTypes, { element } from 'prop-types';

import Constants from '../../../Blended/Constants';

import Styles from './Table.css';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: null,
    };
  }

  componentDidMount() {
    const { header } = this.props;

    let width = 0;

    header.forEach((element) => {
      width += element.width || 1;
    });

    this.setState({ width });
  }

  render() {
    const { name, className, header, data, defaultValue } = this.props;

    return (
      <table name={name} className={className.root ? className.root : Styles['rbc-table']}>
        <tr className={className.head ? className.head : Styles['rbc-table-head']}>
          {header.map((element, index) => {
            const styles = element.thStyle || {};
            const width = this.state.width ? (element.width / this.state.width) * 100 : null;

            return (
              <th key={index} colSpan={element.colSpan || 1} style={{ ...styles, width: width ? `${width}%` : null }} id={index}>
                {element.label}
              </th>
            );
          })}
        </tr>
        {data.map((elements, index) => {
          return (
            <tr key={index} id={index} className={`${className.row ? className.row : Styles['rbc-table-body']} ${index % 2 === 0 ? 'rowEven' : 'rowOdd'}`}>
              {header.map((element, i) =>
                element.element ? (
                  <td key={i} style={element.tdStyle}>
                    {element.element(index, elements)}
                  </td>
                ) : (
                  <td key={i} style={element.tdStyle}>
                    {elements[element.dataKey] || defaultValue}
                  </td>
                )
              )}
            </tr>
          );
        })}
      </table>
    );
  }
}

Table.propTypes = {
  name: propTypes.string.isRequired,
  className: propTypes.object,
  header: propTypes.array.isRequired,
  data: propTypes.array.isRequired,
  defaultValue: propTypes.string
};

Table.defaultProps = {
  className: {}
};

export default Table;
