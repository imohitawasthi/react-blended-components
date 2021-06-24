import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationSteps.css';

import { Steps } from 'react-blended-components';

import META from '../source';

class DocumentationSteps extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  renderDemo = () => (
    <div className="center">
      <Steps 
        steps={[{step: 1}, {step: 2}, {step: 3}]}
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

export default DocumentationSteps;
