const CODE = `
  <Badge value="10"/>
`;

const PROPS = [
  {
    attribute: 'value',
    type: 'String | Element',
    default: '-',
    description: 'The value will be displayed inside badge.',
  },
  {
    attribute: 'className',
    type: 'String',
    default: '-',
    description: 'Custom class for Badge, the attributes will get concat with the default class.',
  },
  {
    attribute: 'style',
    type: 'Object',
    default: '-',
    description: 'React style object.',
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
  // {
  //   type: 'EXAMPLE',
  //   render: renderOptions()
  // },
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
