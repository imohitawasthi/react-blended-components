import React from 'react'

import './ChildLayout.css'

class ChildLayout extends React.Component {
  renderHeading = (element, index) => (
    <div key={index} className='rbc-example-layout-heading'>
      {element.render}
    </div>
  )

  renderSubHeading = (element, index) => (
    <div key={index} className='rbc-example-layout-sub-heading'>
      {element.render}
    </div>
  )

  renderContent = (element, index) => (
    <div key={index} className='rbc-example-layout-content'>
      {typeof element.render === 'object' && element.render.length ? element.render.map((e, i) => <div key={`${index}-${i}`}>{e}</div>) : element.render}
    </div>
  )

  renderRemark = (element, index) => (
    <div key={index} className='rbc-example-layout-remark'>
      {typeof element.render === 'object' && element.render.length ? element.render.map((e, i) => <div key={`${index}-${i}`}>{e}</div>) : element.render}
    </div>
  )

  renderCode = (element, index) => (
    <div key={index} className='rbc-example-layout-code'>
      {typeof element.render === 'object' && element.render.length ? element.render.map((e, i) => <div key={`${index}-${i}`}>{e}</div>) : element.render}
    </div>
  )

  renderExample = (element, index) => (
    <div key={index} className='rbc-example-layout-example'>
      {typeof element.render === 'object' && element.render.length ? element.render.map((e, i) => <div key={`${index}-${i}`}>{e}</div>) : element.render}
    </div>
  )

  renderCustom = (element, index) => (
    <div key={index} className={`${element.className || 'rbc-example-layout-custom'}`}>
      {element.render}
    </div>
  )

  renderSpacing = (element, index) => (
    <div key={index} style={element.style}></div>
  )

  render() {
    const { meta } = this.props

    const renderMap = (element, index) => ({
      HEADING: this.renderHeading(element, index),
      SUB_HEADING: this.renderSubHeading(element, index),
      CONTENT: this.renderContent(element, index),
      REMARK: this.renderRemark(element, index),
      CODE: this.renderCode(element, index),
      EXAMPLE: this.renderExample(element, index),
      CUSTOM: this.renderCustom(element, index),
      SPACING: this.renderSpacing(element, index)
    })

    return (
      <div className='rbc-example-layout-root'>
        {meta.map((element, index) => renderMap(element, index)[element.type])}
      </div>
    )
  }
}

export default ChildLayout
