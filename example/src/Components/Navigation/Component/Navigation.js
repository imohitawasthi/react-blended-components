import React from 'react';

import history from './../../../history';

import './Navigation.css';

import Source from '../source';

import { Tab } from 'react-blended-components';

const HIDE_SCROLL = { overflow: 'hidden' };
const SHOW_SCROLL = { overflow: 'auto' };

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollStyle: HIDE_SCROLL,
    };

    this.refNavigation = React.createRef();
  }

  componentDidMount() {}

  onChangeNavigation(key) {
    history.push(`/${key}`);
  }

  render() {
    const { parentIndex, childIndex } = this.props;
    const { scrollStyle } = this.state;

    return (
      <div
        className="rbc-example-navigation-root"
        style={scrollStyle}
        ref={this.refNavigation}
        onMouseEnter={() => this.setState({scrollStyle: SHOW_SCROLL})}
        onMouseLeave={() => this.setState({scrollStyle: HIDE_SCROLL})}
      >
        <Tab
          className="rbc-example-navigation-container"
          tabs={Source.META_NAVIGATION(this.onChangeNavigation)}
          selected={{ tab: parentIndex, subTab: childIndex }}
        />
      </div>
    );
  }
}

export default Navigation;
