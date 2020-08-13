import React, { createRef } from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationButton.css';

import META, { OPTION_TYPE_BUTTON, OPTION_SIZE_BUTTON } from '../source';

import { Button, FormElements } from 'react-blended-components';

class DocumentationButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'PRIMARY',
      size: 'NORMAL'
    };
  }

  renderDemo = () => (
    <div className="rbc-overview-button-demo-group">
      <div className="col-lg-12 center">
        <Button type={this.state.type} size={this.state.size}>Demo</Button>
      </div>
    </div>
  );

  renderDemoOptions = () => (
    <div className="rbc-overview-button-demo-group">
      <div className="col-lg-12">
        <FormElements.Radio
          name="button-type"
          label="Type"
          onChange={(e) => {
            this.setState({ type: e });
          }}
          value={this.state.type}
          options={OPTION_TYPE_BUTTON}
        />
      </div>
      <div className="col-lg-12">
        <FormElements.Radio
          name="button-size"
          label="Size"
          onChange={(e) => {
            this.setState({ size: e });
          }}
          value={this.state.size}
          options={OPTION_SIZE_BUTTON}
        />
      </div>
    </div>
  );

  render() {
    console.log(this.refButton);
    return <ChildLayout meta={META(this.renderDemo, this.renderDemoOptions)} />;
  }
}

export default DocumentationButton;