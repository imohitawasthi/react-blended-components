import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationBadge.css';

import { Badge } from 'react-blended-components';

import META from '../source';

class DocumentationBadge extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  renderDemo = () => (
    <div className="center middle">
      <Badge 
        value="10"
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

export default DocumentationBadge;
