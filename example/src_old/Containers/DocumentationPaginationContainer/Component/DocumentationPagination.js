import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationPagination.css';

import META, { OPTION_TYPE_PAGINATION } from '../source';

import { Pagination, FormElements } from 'react-blended-components';

class DocumentationPagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 10,
      offset: 0,
      total: 100,
      type: 'BASIC',
    };
  }

  paginationType = () => (
    <div className="col-lg-12">
      <FormElements.Radio
        name="pagination-type"
        label="Type"
        onChange={(e) => {
          this.setState({ type: e });
        }}
        value={this.state.type}
        options={OPTION_TYPE_PAGINATION}
      />
    </div>
  );

  renderOptions = () => <div className="row">{this.paginationType()}</div>;

  renderDemo = () => (
    <div className="center">
      <Pagination
        limit={this.state.limit}
        offset={this.state.offset}
        total={this.state.total}
        onPageChange={(action) =>
          action === 'back' ? this.setState((p) => ({ offset: p.offset - p.limit })) : this.setState((p) => ({ offset: p.offset + p.limit }))
        }
        type={this.state.type}
      />
    </div>
  );

  render() {
    return <ChildLayout meta={META(this.renderDemo, this.renderOptions)} />;
  }
}

export default DocumentationPagination;
