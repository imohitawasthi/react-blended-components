import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationDialog.css';

import META, { OPTION_DIALOG_SIZE, OPTION_DIALOG_OTHER } from '../source';

import { Button, Dialog, FormElements } from 'react-blended-components';

class DocumentationDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDialog: false,

      hideClose: false,

      size: OPTION_DIALOG_SIZE[0].value
    };
  }

  renderDemo = () => (
    <div className="center">
      <Button size="NORMAL" onClick={() => this.setState({ showDialog: true })}>
        SHOW DIALOG
      </Button>
    </div>
  );

  dialogWidth = () => (
    <div className="col-12">
      <FormElements.Radio
        name="dialog-size"
        label="Size"
        onChange={(e) => {
          this.setState({ size: e });
        }}
        value={this.state.size}
        options={OPTION_DIALOG_SIZE}
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
            this.setState((pState) => ({ hideClose: !pState.hideClose }));
          }
        }}
        value={{
          [OPTION_DIALOG_OTHER[0].id]: this.state.hideClose
        }}
        options={OPTION_DIALOG_OTHER}
      />
    </div>
  );

  renderOptions = () => (
    <div className="row">
      {this.dialogWidth()}
      {this.dialogOptions()}
    </div>
  );

  render() {
    return (
      <div>
        <ChildLayout meta={META(this.renderDemo, this.renderOptions)} />
        <Dialog
          active={this.state.showDialog}
          onClose={() => this.setState({ showDialog: false })}
          onHide={() => this.setState({ showDialog: false })}
          header="Sample Dialogs' Header"
          footer="Sample Dialogs' Footer"
          body={
            <div className="row">
              <div className="col-12">
                Cras a velit iaculis, faucibus ante et, ultricies ante. Maecenas laoreet elit quis neque lacinia, in tincidunt neque consequat. Quisque non enim
                varius, gravida metus quis, lobortis sapien. Nulla consequat dignissim commodo. Phasellus in nibh fermentum, condimentum felis nec, euismod
                arcu. Proin feugiat sollicitudin tempus. Aliquam tincidunt, mauris congue cursus ultricies, tellus erat ultrices neque, at scelerisque neque
                metus nec sapien. Nulla metus leo, varius in feugiat nec, interdum vel urna. Fusce consequat fringilla sapien. Ut quis placerat magna, in
                aliquet tellus. Integer posuere nisi nec odio dignissim vehicula et sed risus.
              </div>
            </div>
          }
          size={this.state.size}
          hideClose={this.state.hideClose}
        />
      </div>
    );
  }
}

export default DocumentationDialog;
