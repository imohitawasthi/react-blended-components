import React from 'react'
import propTypes from 'prop-types'

// import Styles from "./index.scss"
import Styles from "./../../Theme/styles/index.scss"

class Dummy extends React.Component {
  render() {
    const {} = this.props

    return (
      <span className={Styles["bolder-capital"]}>
          Hi, There!!
      </span>
    )
  }
}

export default Dummy
