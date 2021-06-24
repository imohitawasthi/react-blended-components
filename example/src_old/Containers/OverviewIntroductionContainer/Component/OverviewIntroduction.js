import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './OverviewIntroduction.css';

import META, { ICON_MAP } from './../source';

class OverviewIntroduction extends React.Component {
  renderIcons = () => (
    <div className="rbc-overview-introduction-icon-group center">
      {ICON_MAP.map((element, index) => (
        <div className="col-lg-3 col-md-3 col-sm-6 col-12" key={index}>
          <div key="1">
            <img className="rbc-overview-introduction-icon-img" src={element.icon} alt="rbc-overview-introduction-icon-img"></img>
          </div>
          <div key="2" className="rbc-overview-introduction-icon-span">
            {element.label}
          </div>
        </div>
      ))}
    </div>
  );

  renderFootNotes = () => (
    <div key={99}>
      <span>- You can ask questions or raise issues on</span>
      <a target="_black" href="https://github.com/imohitawasthi/react-blended-components/issues">
        https://github.com/imohitawasthi/react-blended-components/issues.
      </a>
    </div>
  );

  render() {
    return <ChildLayout meta={META(this.renderIcons, this.renderFootNotes)} />;
  }
}

export default OverviewIntroduction;
