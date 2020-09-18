
import Constants from './../../Blended/Constants'

const CSS_CLASS_TAB = 'rbc-example-navigation-tab'
const CSS_CLASS_SUB_TAB = 'rbc-example-navigation-sub-tab'

const NAVIGATION_CHILDREN_OVERVIEW = (onClick, parentKey) => [
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Introduction',
    key: Constants.MAP_NAVIGATION.OVERVIEW.sub.INTRODUCTION,
    onClick: ({key}) => onClick(`${parentKey}/${key}`)
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Maintainer',
    key: Constants.MAP_NAVIGATION.OVERVIEW.sub.AUTHOR,
    onClick: ({key}) => onClick(`${parentKey}/${key}`)
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'How to Contribute',
    key: Constants.MAP_NAVIGATION.OVERVIEW.sub.HOW_TO_CONTRIBUTE,
    onClick: ({key}) => onClick(`${parentKey}/${key}`)
  }
]

const NAVIGATION_CHILDREN_DOCUMENTATION = (onClick, parentKey) => [
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Button',
    key: Constants.MAP_NAVIGATION.DOCUMENTATION.sub.BUTTON,
    onClick: ({key}) => onClick(`${parentKey}/${key}`)
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Card',
    key: Constants.MAP_NAVIGATION.DOCUMENTATION.sub.CARD,
    onClick: ({key}) => onClick(`${parentKey}/${key}`)
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Dialog',
    key: Constants.MAP_NAVIGATION.DOCUMENTATION.sub.DIALOG,
    onClick: ({key}) => onClick(`${parentKey}/${key}`)
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Loader',
    key: Constants.MAP_NAVIGATION.DOCUMENTATION.sub.LOADER,
    onClick: ({key}) => onClick(`${parentKey}/${key}`)
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Form',
    key: Constants.MAP_NAVIGATION.DOCUMENTATION.sub.FORM,
    onClick: ({key}) => onClick(`${parentKey}/${key}`)
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'List',
    key: Constants.MAP_NAVIGATION.DOCUMENTATION.sub.LIST,
    onClick: ({key}) => onClick(`${parentKey}/${key}`)
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Pagination',
    key: Constants.MAP_NAVIGATION.DOCUMENTATION.sub.PAGINATION,
    onClick: ({key}) => onClick(`${parentKey}/${key}`)
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Avatar',
    key: Constants.MAP_NAVIGATION.DOCUMENTATION.sub.AVATAR,
    onClick: ({key}) => onClick(`${parentKey}/${key}`)
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Snack Bar',
    key: Constants.MAP_NAVIGATION.DOCUMENTATION.sub.SNACK_BAR,
    onClick: ({key}) => onClick(`${parentKey}/${key}`)
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Tabs',
    key: Constants.MAP_NAVIGATION.DOCUMENTATION.sub.TABS,
    onClick: ({key}) => onClick(`${parentKey}/${key}`)
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Tooltip',
    key: Constants.MAP_NAVIGATION.DOCUMENTATION.sub.TOOL_TIP,
    onClick: ({key}) => onClick(`${parentKey}/${key}`)
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Toast',
    key: Constants.MAP_NAVIGATION.DOCUMENTATION.sub.TOAST,
    onClick: ({key}) => onClick(`${parentKey}/${key}`)
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Breadcrumb',
    key: Constants.MAP_NAVIGATION.DOCUMENTATION.sub.BREADCRUMB,
    onClick: ({key}) => onClick(`${parentKey}/${key}`)
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Steps',
    key: Constants.MAP_NAVIGATION.DOCUMENTATION.sub.STEPS,
    onClick: ({key}) => onClick(`${parentKey}/${key}`)
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Badge',
    key: Constants.MAP_NAVIGATION.DOCUMENTATION.sub.BADGE,
    onClick: ({key}) => onClick(`${parentKey}/${key}`)
  }
]

const META_NAVIGATION = (onClick) => [
  {
    className: CSS_CLASS_TAB,
    label: 'Overview',
    key: Constants.MAP_NAVIGATION.OVERVIEW.self,
    onClick: ({key}) => onClick(key),
    subTabs: NAVIGATION_CHILDREN_OVERVIEW(onClick, Constants.MAP_NAVIGATION.OVERVIEW.self)
  },
  {
    className: CSS_CLASS_TAB,
    label: 'Installation',
    key: Constants.MAP_NAVIGATION.INSTALLATION.self,
    onClick: ({key}) => onClick(key)
  },
  {
    className: CSS_CLASS_TAB,
    label: 'Documentation',
    key: 'documentation',
    onClick: ({key}) => onClick(key),
    subTabs: NAVIGATION_CHILDREN_DOCUMENTATION(onClick, Constants.MAP_NAVIGATION.DOCUMENTATION.self)
  }
]

export default {
    META_NAVIGATION
}
