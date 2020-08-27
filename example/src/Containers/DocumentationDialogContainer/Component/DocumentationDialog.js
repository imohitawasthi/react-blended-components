import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationDialog.css';

import META, { OPTION_DIALOG_DURATION } from '../source';

import { Button, Dialog, FormElements } from 'react-blended-components';

class DocumentationDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDialog: false,
    };
  }

  renderDemo = () => (
    <div className="center">
      <Button size="EXTRA-LARGE" onClick={() => this.setState({ showDialog: true })}>
        SHOW THE GOD DAMN DIALOG!
      </Button>
    </div>
  );

  dialogDuration = () => (
    <FormElements.Radio
      name="dialog-duration"
      label="Duration"
      onChange={(e) => {
        this.setState({ duration: e });
      }}
      value={this.state.duration}
      options={OPTION_DIALOG_DURATION}
    />
  );

  renderOptions = () => (
    <div className="row">
      <div className="col-xs-12"></div>
    </div>
  );

  render() {
    return (
      <div>
        <ChildLayout meta={META(this.renderDemo, this.renderOptions)} />
        <Dialog
          active={this.state.showDialog}
          onClose={()=>this.setState({showDialog: false})}
          onHide={()=>this.setState({showDialog: false})}
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
        />
      </div>
    );
  }
}

export default DocumentationDialog;
