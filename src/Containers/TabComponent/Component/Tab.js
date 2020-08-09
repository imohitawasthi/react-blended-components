import React from 'react'
import propTypes, { element, number, object } from 'prop-types'

import Constants from '../../../Blended/Constants'

import Button from '../../ButtonComponent'

import Styles from './Tab.css'

class Tab extends React.Component {
  tabElement = (element, index, selectedTab) => (
    <Button
      key={index}
      type={element.type || 'BASIC'}
      size={element.size || 'NORMAL'}
      className={`${element.className} ${selectedTab === index ? 'tab-selected' : ''}`}
      style={{ borderRadius: 0, ...element.style }}
      disable={element.disable || false}
      onClick={()=>element.onClick(element)}
    >
      {element.label}
    </Button>
  )

  subTabElement = (subElement, index, subIndex, selectedTab, selectedSubTab) => (
    <Button
      key={`${index}-${subIndex}`}
      type={subElement.type || 'BASIC'}
      size={subElement.size || 'NORMAL'}
      className={`${subElement.className} ${selectedSubTab === subIndex && selectedTab === index ? 'sub-tab-selected' : ''}`}
      style={{ borderRadius: 0, ...subElement.style }}
      disable={subElement.disable || false}
      onClick={()=>subElement.onClick(subElement)}
    >
      {subElement.label}
    </Button>
  )

  render() {
    const { className, tabs, selected } = this.props

    let selectedTab, selectedSubTab

    if (typeof selected === 'number') {
      selectedTab = selected
    } else if (typeof selected === 'object') {
      selectedTab = selected.tab
      selectedSubTab = selected.subTab
    }

    return (
      <div className={`${Styles['rbc-tab']} ${className || ''}`}>
        {tabs.map((element, index) =>
          element.subTabs && element.subTabs.length ? (
            <span>
              {this.tabElement(element, index, selectedTab)}
              {element.subTabs.map((subElement, subIndex) =>
                this.subTabElement(subElement, index, subIndex, selectedTab, selectedSubTab)
              )}
            </span>
          ) : (
            this.tabElement(element, index, selectedTab)
          )
        )}
      </div>
    )
  }
}

Tab.propTypes = {}

Tab.defaultProps = {}

export default Tab
