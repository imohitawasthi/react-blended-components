import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './OverviewIntroduction.css';

import META from './../source';

import iconSimple from './../../../Theme/Icons/icon-oi-simple.svg';
import iconEffective from './../../../Theme/Icons/icon-oi-effective.svg';
import iconCustomizable from './../../../Theme/Icons/icon-oi-ruler.svg';
import iconHeart from './../../../Theme/Icons/icon-oi-heart.svg';

class OverviewIntroduction extends React.Component {
  renderIcons = () => (
    <div className="rbc-overview-introduction-icon-group center">
      <div className="col-lg-3 col-md-3 col-sm-6 col-12">
        <div>
          <img className="rbc-overview-introduction-icon-img" src={iconSimple}></img>
        </div>
        <div className="rbc-overview-introduction-icon-span">Easy to use</div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 col-12">
        <div>
          <img className="rbc-overview-introduction-icon-img" src={iconEffective}></img>
        </div>
        <div className="rbc-overview-introduction-icon-span">Effective like a spell</div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 col-12">
        <div>
          <img className="rbc-overview-introduction-icon-img" src={iconCustomizable}></img>
        </div>
        <div className="rbc-overview-introduction-icon-span">Highly customizable</div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 col-12">
        <div>
          <img className="rbc-overview-introduction-icon-img" src={iconHeart}></img>
        </div>
        <div className="rbc-overview-introduction-icon-span">Made with a lot of love!</div>
      </div>
    </div>
  );

  renderFootNotes = () => (
    <div>
      {' '}
      - You can ask questions or raise issues on{' '}
      <a target="_black" href="https://github.com/imohitawasthi/react-blended-components/issues">
        https://github.com/imohitawasthi/react-blended-components/issues
      </a>
      .
    </div>
  );

  render() {
    return <ChildLayout meta={META(this.renderIcons, this.renderFootNotes)} />;
  }
}

export default OverviewIntroduction;
