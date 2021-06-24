import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './OverviewAuthor.css';

import META from '../source';

class OverviewAuthor extends React.Component {

  render() {
    return <ChildLayout meta={META()} />;
  }
}

export default OverviewAuthor;
