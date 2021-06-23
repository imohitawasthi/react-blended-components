import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationTabs.css';

import META, { META_TABS } from '../source';

import { Tab } from 'react-blended-components';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
    };
  }

  onChange(key) {
    this.setState({ selected: key });
  }

  renderDemo = () => (
    <div className="center">
      <Tab className="" tabs={META_TABS((k) => this.onChange(k))} selected={this.state.selected} />
    </div>
  );

  renderOptions = () => <div className="row"></div>;

  render() {
    return <ChildLayout meta={META(this.renderDemo, this.renderOptions)} />;
  }
}

export default Tabs;
