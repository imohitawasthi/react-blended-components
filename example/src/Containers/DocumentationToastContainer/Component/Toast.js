import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './Toast.css';

import { } from 'react-blended-components';

import META from '../source';

class Toast extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  renderDemo = () => (
    <div></div>
  )

  renderOptions = () => (
    <div className="row">
    </div>
  );

  render() {
    return <ChildLayout meta={META(this.renderDemo, this.renderOptions)} />;
  }
}

export default Toast;
