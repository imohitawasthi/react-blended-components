import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './OverviewContribute.css';

import META from '../source';

class OverviewContribute extends React.Component {
  renderFork = () => (
    <div>
      - Fork the project! (<a href="https://github.com/imohitawasthi/react-blended-components">https://github.com/imohitawasthi/react-blended-components</a>)
    </div>
  );

  renderRemark = () => (
    <div>
      Or you can follow this awesome documentation{' '}
      <a href="https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project">https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project</a>)
    </div>
  );

  renderCustomSpacing = () => (
    <div className='rbc-example-overview-contribute-custom-margin'></div>
  )

  render() {
    return <ChildLayout meta={META(this.renderFork, this.renderRemark, this.renderCustomSpacing)} />;
  }
}

export default OverviewContribute;
