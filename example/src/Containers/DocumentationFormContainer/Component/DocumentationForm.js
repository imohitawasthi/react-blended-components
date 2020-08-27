import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationForm.css';

import META, { META_FORM } from '../source';

import { Form } from 'react-blended-components';

class DocumentationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderDemo = () => (
    <Form 
      name='tempForm'
      meta={META_FORM}
      onChange={()=>null}
      onBlue={()=>null}
    />
  )

  render() {
    return <ChildLayout meta={META(this.renderDemo)} />
  }
}

export default DocumentationForm;
