import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Constants from './Blended/Constants';

import { Dummy } from 'react-blended-components';

class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {  }

  componentDidUpdate(oldProps, oldState) {  }

  render() {

    return (
      <section className="">
        <Dummy />
      </section>
    );
  }
}

export default withRouter(Routes);
