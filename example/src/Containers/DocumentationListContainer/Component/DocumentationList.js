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
      name='' 
      className=''
      header={HEADER} 
      data={DATA}
    />
  )

  render() {
    return <ChildLayout meta={META(this.renderDemo)} />
  }
}

export default DocumentationList;
