import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationDialog.css';

import META, { } from '../source';

import { Card, FormElements } from 'react-blended-components';

class DocumentationDialog extends React.Component {

  constructor(props) {
    super(props) 

    this.state = {

    }
  }

  render() {
    return <ChildLayout meta={META()} />;
  }
}

export default DocumentationDialog;
