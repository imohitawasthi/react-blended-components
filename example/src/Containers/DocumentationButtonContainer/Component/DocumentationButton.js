import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationButton.css';

import META from '../source';

import { Button, FormElements } from 'react-blended-components';

class DocumentationButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'PRIMARY',
    };
  }

  renderDemo = () => (
    <div className="rbc-overview-button-demo-group">
      <div className="col-lg-6 center">
        <Button type={this.state.type}>Demo</Button>
      </div>
      <div className="col-lg-6">
        <FormElements.Radio
          name="button-type"
          label="Type"
          onChange={(e) => {
            this.setState({type: e})
          }}
          value={this.state.type}
          options={[
            {
              id: 'type-primary',
              label: 'BASIC',
              value: 'BASIC'
            },
            {
              id: 'type-primary',
              label: 'DEFAULT',
              value: 'DEFAULT'
            },
            {
              id: 'type-primary',
              label: 'PRIMARY',
              value: 'PRIMARY',
            },
            {
              id: 'type-primary',
              label: 'SUCCESS',
              value: 'SUCCESS',
            },
            {
              id: 'type-primary',
              label: 'INFO',
              value: 'INFO',
            },
            {
              id: 'type-primary',
              label: 'WARNING',
              value: 'WARNING',
            },
          ]}
        />
      </div>
    </div>
  );

  render() {
    return <ChildLayout meta={META(this.renderDemo)} />;
  }
}

export default DocumentationButton;
