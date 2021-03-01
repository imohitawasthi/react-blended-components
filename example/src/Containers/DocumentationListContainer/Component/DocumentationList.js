import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationList.css';

import META, { HEADER, DATA, META_FORM_STRUCTURE } from '../source';

import { Table } from 'react-blended-components';

class DocumentationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

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

  renderDemo = () => (
    <Table 
      name='tableDemo' 
      className={{
        rootClassName: "rbc-documentation-table-root",
        headClassName: "rbc-documentation-table-head",
        rowClassName: "rbc-documentation-table-row",
      }}
      header={HEADER} 
      data={DATA}
    />
  )
  
  listOptions = () => (
    <div className="col-lg-12">
    </div>
  );

  renderOptions = () => (
    <div className="row">
    </div>
  );

  render() {
    return <ChildLayout meta={META(this.renderDemo, this.renderOptions, this.renderMetaStructure)} />
  }
}

export default DocumentationList;
