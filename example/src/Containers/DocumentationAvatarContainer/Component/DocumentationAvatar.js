import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationAvatar.css';

import META from '../source';

import { Avatar } from 'react-blended-components';

class DocumentationAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 10,
      offset: 0,
      total: 100,
    };
  }

  renderDemo = () => (
    <div className="center">
      <Avatar round={true} name="Sample Avatar" size={50} fontSize={20} />
    </div>
  );

  renderOptions = () => <div className="row"></div>;

  render() {
    return <ChildLayout meta={META(this.renderDemo, this.renderOptions)} />;
  }
}

export default DocumentationAvatar;
