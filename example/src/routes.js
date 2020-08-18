import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Constants from './Blended/Constants';

import App from './Containers/AppContainer';

import OverviewIntroduction from './Containers/OverviewIntroductionContainer';
import OverviewAuthor from './Containers/OverviewAuthorContainer';
import OverviewContribute from './Containers/OverviewContributeContainer';

import Installation from './Containers/InstallationContainer';

import DocumentationButton from './Containers/DocumentationButtonContainer';
import DocumentationCard from './Containers/DocumentationCardContainer';
import DocumentationDialog from './Containers/DocumentationDialogContainer';

class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parentIndex: 0,
      childIndex: 0,
    };
  }

  possiblePaths(location) {
    let parentNavigation, childNavigation;
    let parentIndex = 0,
      childIndex = 0;

    parentNavigation = Object.keys(Constants.MAP_NAVIGATION);

    let loc = location.pathname.split(/[\\/]/);
    loc = loc.filter((element) => !!element);

    for (let i = 0; i < loc.length; i++) {
      parentIndex = parentNavigation.filter((e) => Constants.MAP_NAVIGATION[e] && Constants.MAP_NAVIGATION[e].self === loc[i]);
      if (parentIndex && parentIndex.length) {
        break;
      }
    }

    if (parentIndex && parentIndex.length) {
      parentIndex = parentIndex[0];
      childNavigation = Object.keys((Constants.MAP_NAVIGATION[parentIndex] && Constants.MAP_NAVIGATION[parentIndex].sub) || {});

      for (let i = 0; i < loc.length; i++) {
        childIndex = childNavigation.filter((e) => Constants.MAP_NAVIGATION[parentIndex].sub && Constants.MAP_NAVIGATION[parentIndex].sub[e] === loc[i]);
        if (childIndex && childIndex.length) {
          break;
        }
      }

      if (childIndex && childIndex.length) {
        childIndex = childIndex[0];
      }
    }

    parentIndex = parentNavigation ? parentNavigation.indexOf(parentIndex, 0) : 0;
    childIndex = childNavigation ? childNavigation.indexOf(childIndex, 0) : 0;

    this.setState({
      parentIndex: parentIndex && parentIndex > -1 ? parentIndex : 0,
      childIndex: childIndex && childIndex > -1 ? childIndex : 0,
    });
  }

  componentDidMount() {
    const { location } = this.props;

    if (location) {
      this.possiblePaths(location);
    }
  }

  componentDidUpdate(oldProps, oldState) {
    const { location } = this.props;
    const oldLocation = oldProps.location;

    if (location.pathname !== oldLocation.pathname) {
      this.possiblePaths(location);
    }
  }

  render() {
    const { parentIndex, childIndex } = this.state;

    return (
      <section className="root-container">
        <Switch>
          <App parentIndex={parentIndex} childIndex={childIndex} history={this.props.history}>
            {/* Overview Default */}
            <Route path={`/`} component={OverviewIntroduction} exact />
            <Route path={`/${Constants.MAP_NAVIGATION.OVERVIEW.self}`} component={OverviewIntroduction} exact />

            {/* Overview Introduction */}
            <Route
              path={`/${Constants.MAP_NAVIGATION.OVERVIEW.self}/${Constants.MAP_NAVIGATION.OVERVIEW.sub.INTRODUCTION}`}
              component={OverviewIntroduction}
              exact
            />
            {/* Overview Author */}
            <Route path={`/${Constants.MAP_NAVIGATION.OVERVIEW.self}/${Constants.MAP_NAVIGATION.OVERVIEW.sub.AUTHOR}`} component={OverviewAuthor} exact />
            {/* Overview How to contribute */}
            <Route
              path={`/${Constants.MAP_NAVIGATION.OVERVIEW.self}/${Constants.MAP_NAVIGATION.OVERVIEW.sub.HOW_TO_CONTRIBUTE}`}
              component={OverviewContribute}
              exact
            />

            {/* Installation */}
            <Route
              path={`/${Constants.MAP_NAVIGATION.INSTALLATION.self}`}
              component={Installation}
              exact
            />

            {/* Documentation Button */}
            <Route
              path={`/${Constants.MAP_NAVIGATION.DOCUMENTATION.self}/${Constants.MAP_NAVIGATION.DOCUMENTATION.sub.BUTTON}`}
              component={DocumentationButton}
              exact
            />
            {/* Documentation Card */}
            <Route
              path={`/${Constants.MAP_NAVIGATION.DOCUMENTATION.self}/${Constants.MAP_NAVIGATION.DOCUMENTATION.sub.CARD}`}
              component={DocumentationCard}
              exact
            />
            {/* Documentation Dialog */}
            <Route
              path={`/${Constants.MAP_NAVIGATION.DOCUMENTATION.self}/${Constants.MAP_NAVIGATION.DOCUMENTATION.sub.DIALOG}`}
              component={DocumentationDialog}
              exact
            />

            {/* Default Redirection */}
            <Redirect to={`/${Constants.MAP_NAVIGATION.OVERVIEW.self}/${Constants.MAP_NAVIGATION.OVERVIEW.sub.INTRODUCTION}`} />
          </App>
        </Switch>
      </section>
    );
  }
}

export default withRouter(Routes);
