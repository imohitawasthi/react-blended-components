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

  renderDemo = () => <Avatar round={true} name="Sample Avatar" size={50} fontSize={20} />;

  render() {
    return <ChildLayout meta={META(this.renderDemo)} />;
  }
}

export default DocumentationAvatar;
