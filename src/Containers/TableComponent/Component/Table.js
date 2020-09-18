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
    const { name, classNames, header, data, defaultValue } = this.props;

    return (
      <table name={name} className={`${Styles['rbc-table']} ${classNames.root || ''}`}>
        <tr className={`${Styles['rbc-table-head']} ${classNames.head}`}>
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
            <tr key={index} id={index} className={`${Styles['rbc-table-body']} ${classNames.row} ${index % 2 === 0 ? 'rowEven' : 'rowOdd'}`}>
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
  classNames: propTypes.object,
  header: propTypes.array.isRequired,
  data: propTypes.array.isRequired,
  defaultValue: propTypes.string
};

Table.defaultProps = {
  classNames: {}
};

export default Table;
