import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationList.css';

import META, { HEADER, DATA } from '../source';

import { Table } from 'react-blended-components';

class DocumentationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

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
    return <ChildLayout meta={META(this.renderDemo, this.renderOptions)} />
  }
}

export default DocumentationList;
