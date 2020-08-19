import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationLoader.css';

import META, { OPTION_LOADER_DURATION } from '../source';

import { Button, Loader, FormElements } from 'react-blended-components';

class DocumentationLoader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoader: false,

      duration: 5,

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
      time: this.state.time,
      start: Date.now() - this.state.time,
      showLoader: true,
    };
    this.setState(meta);
    this.timer = setInterval(() => {
      this.setState({
        time: Date.now() - meta.start,
      });

      if (meta.time > this.state.duration * 1000) {
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
    <div className="center">
      <Button size="EXTRA-LARGE" onClick={() => this.setState({ showDialog: true }, () => this.startTimer())}>
        SHOW THE GOD DAMN DIALOG!
      </Button>
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

  renderOptions = () => <div className="row">{this.dialogDuration()}</div>;

  render() {
    return (
      <div>
        <ChildLayout meta={META(this.renderDemo, this.renderOptions)} />
        <Loader active={this.state.showLoader} />
      </div>
    );
  }
}

export default DocumentationLoader;
