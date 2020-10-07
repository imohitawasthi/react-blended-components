import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationToast.css';

import { Button, Toast } from 'react-blended-components';

import META from '../source';

class DocumentationToast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showToast: false,
    };
  }

  renderDemo = () => (
    <div className="center">
      <Button size="LARGE" onClick={() => this.setState({ showToast: true })}>
        SHOW TOAST
      </Button>
    </div>
  );

  renderOptions = () => <div className="row"></div>;

  render() {
    return (
      <div>
        <ChildLayout meta={META(this.renderDemo, this.renderOptions)} />
        <Toast show={this.state.showToast} />
      </div>
    );
  }
}

export default DocumentationToast;
