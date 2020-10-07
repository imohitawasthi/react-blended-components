import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationTooltip.css';

import { Tooltip } from 'react-blended-components';

import META from '../source';

class DocumentationTooltip extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  renderDemo = () => (
    <div className="center">
      SHOW TOAST
      <Tooltip />
    </div>
  )

  renderOptions = () => (
    <div></div>
  );

  render() {
    return <ChildLayout meta={META(this.renderDemo, this.renderOptions)} />;
  }
}

export default DocumentationTooltip;
