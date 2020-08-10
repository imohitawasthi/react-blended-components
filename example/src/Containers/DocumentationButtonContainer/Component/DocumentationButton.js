import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationButton.css';

import META from '../source';

class DocumentationButton extends React.Component {

  render() {
    return <ChildLayout meta={META()} />;
  }
}

export default DocumentationButton;
