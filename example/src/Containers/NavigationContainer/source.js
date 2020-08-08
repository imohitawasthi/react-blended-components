const CSS_CLASS_TAB = 'rbc-example-navigation-tab'
const CSS_CLASS_SUB_TAB = 'rbc-example-navigation-sub-tab'

const NAVIGATION_CHILDREN_OVERVIEW = [
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Introduction',
    onClick: () => null
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Author',
    onClick: () => null
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'How to Contribute',
    onClick: () => null
  }
]

const NAVIGATION_CHILDREN_DOCUMENTATION = [
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Button',
    onClick: () => null
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Card',
    onClick: () => null
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Dialog',
    onClick: () => null
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Loader',
    onClick: () => null
  },
  {
    className: CSS_CLASS_SUB_TAB,
    label: 'Form',
    onClick: () => null
  }
]

const META_NAVIGATION = [
  {
    className: CSS_CLASS_TAB,
    label: 'Over View',
    onClick: () => null,
    subTabs: NAVIGATION_CHILDREN_OVERVIEW
  },
  {
    className: CSS_CLASS_TAB,
    label: 'Installation',
    onClick: () => null
  },
  {
    className: CSS_CLASS_TAB,
    label: 'Documentation',
    onClick: () => null,
    subTabs: NAVIGATION_CHILDREN_DOCUMENTATION
  }
]

export default {
    META_NAVIGATION
}
