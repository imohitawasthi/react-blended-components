import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationBreadcrumb.css';

import { Breadcrumb } from 'react-blended-components';

import META from '../source';

class DocumentationBreadcrumb extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  renderDemo = () => (
    <div className="center middle">
      <Breadcrumb 
        elements={[
          {label: 'First Page'},
          {label: 'Second Page'},
          {label: 'Third Page'},
        ]}
      />
    </div>
  )

  renderOptions = () => (
    <div className="row">
    </div>
  );

  render() {
    return <ChildLayout meta={META(this.renderDemo, this.renderOptions)} />;
  }
}

export default DocumentationBreadcrumb;
