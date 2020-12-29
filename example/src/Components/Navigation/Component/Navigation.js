import React from 'react';

import history from './../../../history';

import './Navigation.css';

import Source from '../source';

import { Tab } from 'react-blended-components';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.refNavigation = React.createRef();
  }

  componentDidMount() {}

  onChangeNavigation(key) {
    history.push(`/${key}`);
  }

  render() {
    const { parentIndex, childIndex } = this.props;
    return (
      <div
        className="rbc-example-navigation-root"
        ref={this.refNavigation}
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
