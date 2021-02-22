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
    const { name, className, header, data, defaultValue, onRowClick } = this.props;

    const { rootClassName, headClassName, rowClassName } = className;

    return (
      <table name={name} className={`${Styles['rbc-table']} ${rootClassName || ''}`}>
        <tr className={`${Styles['rbc-table-head']} ${headClassName || ''}`}>
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
            <tr
              key={index}
              id={index}
              className={`${Styles['rbc-table-body']} ${rowClassName || ''} ${index % 2 === 0 ? 'row-even' : 'row-odd'}`}
              onClick={onRowClick}
            >
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
  defaultValue: propTypes.string,
  onRowClick: propTypes.func,
};

Table.defaultProps = {
  className: {
    rootClassName: '',
    headClassName: '',
    rowClassName: '',
  },
  defaultValue: '-',
  onRowClick: () => null,
};

export default Table;
