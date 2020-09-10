import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationButton.css';

import META, { OPTION_TYPE_BUTTON, OPTION_SIZE_BUTTON, OPTION_DISABLED_BUTTON } from '../source';

import { Button, FormElements } from 'react-blended-components';

class DocumentationButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'PRIMARY',
      size: 'NORMAL',
      disabled: false,
      custom: false,
      customClass: 'rbc-overview-button-custom',
    };

    this.refDemo = React.createRef();
  }

  renderDemo = () => (
    <div className="rbc-overview-button-demo-group">
      <div className="col-lg-12 center middle">
        <Button
          className={this.state.custom ? this.state.customClass : ''}
          type={this.state.type}
          size={this.state.size}
          disabled={this.state.disabled}
          onClick={() => null}
        >
          Demo
        </Button>
      </div>
    </div>
  );

  buttonType = () => (
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
  );

  buttonSize = () => (
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
  );

  buttonOptions = () => (
    <div className="col-lg-12">
      <FormElements.CheckBox
        name="button-other"
        label="Other"
        onChange={(value, id) => {
          if (id === `button-other-${OPTION_DISABLED_BUTTON[0].id}`) {
            this.setState((pState) => ({ disabled: !pState.disabled }));
          } else if (id === `button-other-${OPTION_DISABLED_BUTTON[1].id}`) {
            this.setState((pState) => ({ custom: !pState.custom }));
          }
        }}
        value={{
          disabled: this.state.disabled,
          custom: this.state.custom,
        }}
        options={OPTION_DISABLED_BUTTON}
      />
    </div>
  );

  renderDemoOptions = () => (
    <div className="row">
      {this.buttonType()}
      {this.buttonSize()}
      {this.buttonOptions()}
    </div>
  );

  render() {
    return (
      <div>
        <ChildLayout meta={META(this.renderDemo, this.renderDemoOptions)} />
      </div>
    );
  }
}

export default DocumentationButton;
