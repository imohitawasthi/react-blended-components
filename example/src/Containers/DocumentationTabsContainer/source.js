const CODE = `
  <Tab 
    className="rbc-tabs" 
    tabs={
      [{
        label: 'Overview',
        key: 'overview',
        onClick: ({index}) => onClick(index),
        className:'',
        subTabs: []
      },
      {
        label: 'Installation',
        key: 'installation',
        onClick: ({index}) => onClick(index),
        className:'',
        subTabs: []
      },
      {
        label: 'Documentation',
        key: 'documentation',
        onClick: ({index}) => onClick(index),
        className:'',
        subTabs: []
      }]
    } 
    selected={this.state.selected} 
  />
`;

const PROPS = [
  {
    attribute: 'className',
    type: 'String',
    default: '-',
    description: 'Class Name for Tabs',
  },
  {
    attribute: 'tabs',
    type: 'Array',
    default: '-',
    description: 'Meta data for tabs',
  },
  {
    attribute: 'selected',
    type: 'Integer | Object',
    default: '-',
    description: 'Selected tab',
  }
];

const META = (renderDemo, renderOptions) => [
  {
    type: 'HEADING',
    render: 'Form',
  },
  // {
  //   type: 'REMARK',
  //   render: `A warping element for some awesome content.`,
  // },
  {
    type: 'SPACING',
    style: {padding: 4}
  },
  // {
  //   type: 'SUB_HEADING',
  //   render: 'Demo',
  // },
  {
    type: 'CONTENT',
    render: renderDemo()
  },
  {
    type: 'EXAMPLE',
    render: renderOptions()
  },
  {
    type: 'SUB_HEADING',
    render: 'Code',
  },
  {
    type: 'DEMO_CODE',
    render: CODE,
  },
  {
    type: 'SUB_HEADING',
    render: 'Props',
  },
  {
    type: 'PROPS',
    render: PROPS,
  },
  {
    type: 'SPACING',
    style: { padding: 8 },
  }
];

const META_TABS = (onClick) => [
  {
    label: 'Overview',
    key: 'overview',
    onClick: ({index}) => onClick(index),
  },
  {
    label: 'Installation',
    key: 'installation',
    onClick: ({index}) => onClick(index)
  },
  {
    label: 'Documentation',
    key: 'documentation',
    onClick: ({index}) => onClick(index),
  }
]

export { META_TABS }

export default META;
