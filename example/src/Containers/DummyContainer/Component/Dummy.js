import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './Dummy.css';

import META from '../source';

class Dummy extends React.Component {

  render() {
    return <ChildLayout meta={META()} />;
  }
}

export default Dummy;
