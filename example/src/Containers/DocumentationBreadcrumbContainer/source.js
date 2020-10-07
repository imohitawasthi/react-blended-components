const CODE = `
<Breadcrumb 
  elements={[
    {label: 'First Page'},
    {label: 'Second Page'},
    {label: 'Third Page'},
  ]}
/>
`;

const PROPS = [
  {
    attribute: 'active',
    type: 'boolean',
    default: '-',
    description: 'Show/hide dialog.',
  }
];

const META = (renderDemo, renderOptions) => [
  {
    type: 'HEADING',
    render: 'Form',
  },
  {
    type: 'REMARK',
    render: `A warping element for some awesome content.`,
  },
  {
    type: 'SPACING',
    style: {padding: 4}
  },
  {
    type: 'SUB_HEADING',
    render: 'Demo',
  },
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

export { }

export default META;
