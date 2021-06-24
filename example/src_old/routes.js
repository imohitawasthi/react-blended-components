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
import DocumentationLoader from './Containers/DocumentationLoaderContainer';
import DocumentationForm from './Containers/DocumentationFormContainer';
import DocumentationList from './Containers/DocumentationListContainer';
import DocumentationPagination from './Containers/DocumentationPaginationContainer';
import DocumentationAvatar from './Containers/DocumentationAvatarContainer';
import DocumentationBadge from './Containers/DocumentationBadgeContainer';
import DocumentationBreadcrumb from './Containers/DocumentationBreadcrumbContainer';
import DocumentationSnackbar from './Containers/DocumentationSnackbarContainer';
import DocumentationSteps from './Containers/DocumentationStepsContainer';
import DocumentationTabs from './Containers/DocumentationTabsContainer';
import DocumentationToast from './Containers/DocumentationToastContainer';
import DocumentationTooltip from './Containers/DocumentationTooltipContainer';

const GIT_PAGES_BASE_PATH = "react-blended-components"

class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parentIndex: 0,
      childIndex: 0,

      basePath:""
    };
  }

  possiblePaths(location) {
    let parentNavigation, childNavigation;
    let parentIndex = 0,
      childIndex = 0;

    parentNavigation = Object.keys(Constants.MAP_NAVIGATION);

    let loc = location.pathname.split(/[\\/]/);
    loc = loc.filter((element) => !!element);

    if ( loc[0] === GIT_PAGES_BASE_PATH ) {
      this.setState({basePath: GIT_PAGES_BASE_PATH})
    }

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
      // this.possiblePaths(location);
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

    const routeMap = [
      { path: `/`, component: OverviewIntroduction },
      { path: `/${Constants.MAP_NAVIGATION.OVERVIEW.self}`, component: OverviewIntroduction },
      { path: `/${Constants.MAP_NAVIGATION.OVERVIEW.self}/${Constants.MAP_NAVIGATION.OVERVIEW.sub.INTRODUCTION}`, component: OverviewIntroduction },
      { path: `/${Constants.MAP_NAVIGATION.OVERVIEW.self}/${Constants.MAP_NAVIGATION.OVERVIEW.sub.AUTHOR}`, component: OverviewAuthor },
      { path: `/${Constants.MAP_NAVIGATION.OVERVIEW.self}/${Constants.MAP_NAVIGATION.OVERVIEW.sub.HOW_TO_CONTRIBUTE}`, component: OverviewContribute },

      { path: `/${Constants.MAP_NAVIGATION.INSTALLATION.self}`, component: Installation },

      { path: `/${Constants.MAP_NAVIGATION.DOCUMENTATION.self}`, component: DocumentationButton },
      { path: `/${Constants.MAP_NAVIGATION.DOCUMENTATION.self}/${Constants.MAP_NAVIGATION.DOCUMENTATION.sub.BUTTON}`, component: DocumentationButton },
      { path: `/${Constants.MAP_NAVIGATION.DOCUMENTATION.self}/${Constants.MAP_NAVIGATION.DOCUMENTATION.sub.CARD}`, component: DocumentationCard },
      { path: `/${Constants.MAP_NAVIGATION.DOCUMENTATION.self}/${Constants.MAP_NAVIGATION.DOCUMENTATION.sub.DIALOG}`, component: DocumentationDialog },
      { path: `/${Constants.MAP_NAVIGATION.DOCUMENTATION.self}/${Constants.MAP_NAVIGATION.DOCUMENTATION.sub.LOADER}`, component: DocumentationLoader },
      { path: `/${Constants.MAP_NAVIGATION.DOCUMENTATION.self}/${Constants.MAP_NAVIGATION.DOCUMENTATION.sub.FORM}`, component: DocumentationForm },
      { path: `/${Constants.MAP_NAVIGATION.DOCUMENTATION.self}/${Constants.MAP_NAVIGATION.DOCUMENTATION.sub.LIST}`, component: DocumentationList },
      { path: `/${Constants.MAP_NAVIGATION.DOCUMENTATION.self}/${Constants.MAP_NAVIGATION.DOCUMENTATION.sub.PAGINATION}`, component: DocumentationPagination },
      { path: `/${Constants.MAP_NAVIGATION.DOCUMENTATION.self}/${Constants.MAP_NAVIGATION.DOCUMENTATION.sub.AVATAR}`, component: DocumentationAvatar },
      { path: `/${Constants.MAP_NAVIGATION.DOCUMENTATION.self}/${Constants.MAP_NAVIGATION.DOCUMENTATION.sub.SNACK_BAR}`, component: DocumentationSnackbar },
      { path: `/${Constants.MAP_NAVIGATION.DOCUMENTATION.self}/${Constants.MAP_NAVIGATION.DOCUMENTATION.sub.TABS}`, component: DocumentationTabs },
      { path: `/${Constants.MAP_NAVIGATION.DOCUMENTATION.self}/${Constants.MAP_NAVIGATION.DOCUMENTATION.sub.TOOL_TIP}`, component: DocumentationTooltip },
      { path: `/${Constants.MAP_NAVIGATION.DOCUMENTATION.self}/${Constants.MAP_NAVIGATION.DOCUMENTATION.sub.TOAST}`, component: DocumentationToast },
      { path: `/${Constants.MAP_NAVIGATION.DOCUMENTATION.self}/${Constants.MAP_NAVIGATION.DOCUMENTATION.sub.BREADCRUMB}`, component: DocumentationBreadcrumb },
      { path: `/${Constants.MAP_NAVIGATION.DOCUMENTATION.self}/${Constants.MAP_NAVIGATION.DOCUMENTATION.sub.STEPS}`, component: DocumentationSteps },
      { path: `/${Constants.MAP_NAVIGATION.DOCUMENTATION.self}/${Constants.MAP_NAVIGATION.DOCUMENTATION.sub.BADGE}`, component: DocumentationBadge },
    ];

    return (
      <section className="root-container rbc-example-app-font">
        <Switch>
          <App parentIndex={parentIndex} childIndex={childIndex} history={this.props.history}>
            {routeMap.map((element, index) => (
              <Route key={index} path={element.path} component={element.component} exact />
            ))}

            {/* Default Redirection */}
            <Redirect to={`/${Constants.MAP_NAVIGATION.OVERVIEW.self}/${Constants.MAP_NAVIGATION.OVERVIEW.sub.INTRODUCTION}`} />
          </App>
        </Switch>
      </section>
    );
  }
}

export default withRouter(Routes);
