import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './Installation.css';

import META from '../source';

class Installation extends React.Component {
  render() {
    return <ChildLayout meta={META()} />;
  }
}

export default Installation;
