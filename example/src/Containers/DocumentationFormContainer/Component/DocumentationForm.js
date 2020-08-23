import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationForm.css';

import META, { } from '../source';

import { Form } from 'react-blended-components';

class DocumentationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <ChildLayout meta={META()} />
  }
}

export default DocumentationForm;
