import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationPagination.css';

import META from '../source';

import { Pagination } from 'react-blended-components';

class DocumentationPagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 10,
      offset: 0,
      total: 100,
    };
  }

  renderOptions = () => <div className="row"></div>;

  renderDemo = () => (
    <div className="center">
      <Pagination
        limit={this.state.limit}
        offset={this.state.offset}
        total={this.state.total}
        onPageChange={(action) =>
          action === 'back' ? this.setState((p) => ({ offset: p.offset - p.limit })) : this.setState((p) => ({ offset: p.offset + p.limit }))
        }
      />
    </div>
  );

  render() {
    return <ChildLayout meta={META(this.renderDemo, this.renderOptions)} />;
  }
}

export default DocumentationPagination;
