import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationForm.css';

import META, { META_FORM, META_FORM_STRUCTURE } from '../source';

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
        className='row'
      />
  )

  renderMetaStructure = () => (
    <div className="rbc-documentation-form-meta-structure">
      {META_FORM_STRUCTURE.map((e, i) => (
        <div key={i}>
          <div className="rbc-documentation-form-meta-structure-heading">
            {e.label}
          </div>
          <div className="rbc-documentation-form-meta-structure-body">
            <code>
              {e.code}
            </code>
          </div>
        </div>
      ))}
    </div>
  )

  render() {
    return <ChildLayout meta={META(this.renderDemo, this.renderMetaStructure)} />
  }
}

export default DocumentationForm;
