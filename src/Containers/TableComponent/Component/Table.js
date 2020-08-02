import React from 'react'
import propTypes, { element } from 'prop-types'

import Constants from '../../../Blended/Constants'

import Styles from './Table.css'

class Table extends React.Component {

  render() {
    const { name, className, header, data } = this.props

    return (
      <table name={name} className={`${Styles['rbc-table']} ${className || ''}`}>
        <tr>
          {header.map((element, index) => {

            return (
              <th  style={element.thStyle} id={index}>{element.label}</th>
            )
          })}
        </tr>
        {data.map((elements, index) => {

          return (
            <tr key={index} id={index}>
              {header.map(element => (
                element.element 
                ? <td style={element.tdStyle}>{element.element(index, elements)}</td>
                : <td style={element.tdStyle}>{elements[element.dataKey]}</td>
              ))}
            </tr>
          )
        })}
      </table>
    )
  }
}

Table.propTypes = { 
  name: propTypes.string.isRequired, 
  className: propTypes.string.isRequired, 
  header: propTypes.array.isRequired, 
  data: propTypes.array.isRequired 
}

Table.defaultProps = { }

export default Table
