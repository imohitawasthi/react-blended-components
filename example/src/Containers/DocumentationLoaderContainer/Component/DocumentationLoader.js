import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationLoader.css';

import META, { OPTION_LOADER_DURATION, OPTION_LOADER_TYPE, OPTION_DIALOG_OTHER } from '../source';

import { Button, Loader, FormElements } from 'react-blended-components';

class DocumentationLoader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoader: false,

      duration: OPTION_LOADER_DURATION[0].value,
      type: OPTION_LOADER_TYPE[0].value,
      blockUI: true,

      isOn: false,
      time: 0,
      start: null,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    const meta = {
      isOn: true,
      time: 0,
      start: Date.now(),
      showLoader: true,
    };
    this.setState(meta);
    this.timer = setInterval(() => {
      this.setState({
        time: Date.now() - meta.start,
      });

      if (this.state.time > this.state.duration * 1000) {
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    this.setState({ isOn: false, showLoader: false });
    clearInterval(this.timer);
  }

  resetTimer() {
    this.setState({ time: 0, isOn: true });
    this.startTimer();
  }

  renderDemo = () => (
    <div className="center rbc-overview-loader-demo-group">
      {this.state.showLoader ? (
        <Loader active={this.state.showLoader} type={this.state.type} blockUI={this.state.blockUI} />
      ) : (
        <Button size="LARGE" onClick={() => this.setState({ showDialog: true }, () => this.startTimer())}>
          SHOW LOADER
        </Button>
      )}
    </div>
  );

  dialogDuration = () => (
    <div className="col-12">
      <FormElements.Radio
        name="dialog-duration"
        label="Duration"
        onChange={(e) => {
          this.setState({ duration: e });
        }}
        value={this.state.duration}
        options={OPTION_LOADER_DURATION}
      />
    </div>
  );

  dialogType = () => (
    <div className="col-12">
      <FormElements.Radio
        name="dialog-type"
        label="Type"
        onChange={(e) => {
          this.setState({ type: e });
        }}
        value={this.state.type}
        options={OPTION_LOADER_TYPE}
      />
    </div>
  );

  dialogOptions = () => (
    <div className="col-lg-12">
      <FormElements.CheckBox
        name="dialog-other"
        label="Other"
        onChange={(value, id) => {
          if (id === `dialog-other-${OPTION_DIALOG_OTHER[0].id}`) {
            this.setState((pState) => ({ blockUI: !pState.blockUI }));
          }
        }}
        value={{
          [OPTION_DIALOG_OTHER[0].id]: this.state.blockUI
        }}
        options={OPTION_DIALOG_OTHER}
      />
    </div>
  );

  renderOptions = () => (
    <div className="row">
      {this.dialogDuration()}
      {this.dialogType()}
      {this.dialogOptions()}
    </div>
  );

  render() {
    return (
      <div>
        <ChildLayout meta={META(this.renderDemo, this.renderOptions)} />
      </div>
    );
  }
}

export default DocumentationLoader;
