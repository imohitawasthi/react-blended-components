import React from 'react';

import Header from '../../../Components/Header';
import Navigation from '../../../Components/Navigation';

import './App.css';

const HIDE_SCROLL = { overflow: 'hidden' };
const SHOW_SCROLL = { overflow: 'overlay' };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      childrenScrollStyle: HIDE_SCROLL,
      navigationScrollStyle: HIDE_SCROLL,
    };
  }

  container = (children) => (
    <div className="rbc-example-app-container">
      <div
        className="col-3 rbc-example-app-container-navigation padding-0"
        onMouseEnter={() => this.setState({ navigationScrollStyle: SHOW_SCROLL })}
        onMouseLeave={() => this.setState({ navigationScrollStyle: HIDE_SCROLL })}
        style={this.state.navigationScrollStyle}
      >
        <Navigation parentIndex={this.props.parentIndex} childIndex={this.props.childIndex} />
      </div>
      <div
        className="col-9 rbc-example-app-container-children"
        onMouseEnter={() => this.setState({ childrenScrollStyle: SHOW_SCROLL })}
        onMouseLeave={() => this.setState({ childrenScrollStyle: HIDE_SCROLL })}
        style={this.state.childrenScrollStyle}
      >
        {children}
      </div>
    </div>
  );

  render() {
    const { children } = this.props;
    return (
      <div className="rbc-example-app-root">
        <Header />
        {this.container(children)}
      </div>
    );
  }
}

export default App;
